import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Plus, Trash2, Edit, Save, X, Eye, KeyRound } from "lucide-react";

// Mock Data Type
interface ListingType {
    id: string;
    address: string;
    price: string | number; // Allow string in form, send number to API
    status: "Active" | "Pending" | "Sold";
    bed: number;
    bath: number;
    sqft: number;
    imageUrl: string;
    photosLink?: string;
    description: string;
}


const Dashboard = () => {
    const { toast } = useToast();

    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Dashboard State
    const [listings, setListings] = useState<ListingType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState<ListingType | null>(null);
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [formData, setFormData] = useState<Partial<ListingType>>({
        address: "",
        price: "",
        status: "Active",
        bed: 3,
        bath: 2,
        sqft: 1500,
        imageUrl: "",
        photosLink: "",
        description: ""
    });

    // Check Token on Load
    useEffect(() => {
        // We use a simple local flag. The real check is the cookie sent to the backend.
        const isLoggedIn = localStorage.getItem("is_logged_in");
        if (isLoggedIn) {
            setIsAuthenticated(true);
            fetchListings();
        }
    }, []);

    const API_URL = import.meta.env.VITE_API_URL;

    // --- AUTH HANDLER ---
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include' // Important: Send cookies with request
            });

            if (res.ok) {
                // Backend sets HttpOnly cookie, we just assume success
                localStorage.setItem("is_logged_in", "true"); // Simple flag for UI state only
                setIsAuthenticated(true);
                toast({ title: "Welcome back!", description: "Dashboard unlocked." });
                fetchListings();
            } else {
                if (res.status === 500) {
                    toast({ title: "Server Error", description: "Backend failed (500). Check server terminal.", variant: "destructive" });
                } else if (res.status === 401) {
                    toast({ title: "Access Denied", description: "Invalid Username or Password", variant: "destructive" });
                } else if (res.status === 429) {
                    toast({ title: "Too Many Requests", description: "Login blocked. Please wait 15 minutes.", variant: "destructive" });
                } else {
                    toast({ title: "Error", description: `Login failed: ${res.statusText}`, variant: "destructive" });
                }
            }
        } catch (err) {
            console.error(err);
            toast({ title: "Error", description: "Login failed.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            // Call logout endpoint to clear cookie on server
            await fetch(`${API_URL}/api/auth/logout`, { method: 'POST', credentials: 'include' });
        } catch (e) { console.error("Logout failed", e); }

        localStorage.removeItem("is_logged_in");
        setIsAuthenticated(false);
    };

    // --- API HANDLERS ---
    const fetchListings = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/listings`, { credentials: 'include' });

            if (res.status === 401) {
                handleLogout();
                return;
            }
            if (res.ok) {
                const data = await res.json();
                setListings(data);
            } else {
                console.error("Failed to fetch listings:", res.status, res.statusText);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Helper for authenticated requests (Cookie handled automatically by browser)
    const getAuthOptions = (method: string, body?: any) => {
        return {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include' as RequestCredentials,
            body: body ? JSON.stringify(body) : undefined
        };
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this listing?")) return;

        try {
            const res = await fetch(`${API_URL}/api/listings/${id}`, getAuthOptions('DELETE'));

            if (res.status === 401) {
                handleLogout();
                return;
            }

            if (res.ok) {
                setListings(prev => prev.filter(l => l.id !== id));
                toast({ title: "Deleted", description: "Listing removed." });
            } else {
                const errorData = await res.json().catch(() => ({ message: res.statusText }));
                console.error("Delete Error:", errorData);
                toast({ title: "Error", description: errorData.message || "Failed to delete.", variant: "destructive" });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare payload: Explicitly pick ONLY allowed fields to avoid "id is not allowed" errors
        const payload = {
            address: formData.address,
            price: Number(String(formData.price).replace(/[^0-9.-]+/g, "")),
            status: formData.status,
            bed: Number(formData.bed),
            bath: Number(formData.bath),
            sqft: Number(formData.sqft),
            imageUrl: formData.imageUrl || "",
            photosLink: formData.photosLink || "",
            description: formData.description || ""
            // Do NOT spread ...formData to avoid sending id, _id, __v
        };

        try {
            let res;
            if (isEditing) {
                res = await fetch(`${API_URL}/api/listings/${isEditing.id}`, getAuthOptions('PUT', payload));
            } else {
                res = await fetch(`${API_URL}/api/listings`, getAuthOptions('POST', payload));
            }

            if (res.status === 401) {
                handleLogout();
                return;
            }

            if (res.ok) {
                const savedItem = await res.json();
                fetchListings();
                toast({ title: isEditing ? "Updated" : "Created", description: "Listing saved." });
                setIsAdding(false);
                setIsEditing(null);
                resetForm();
            } else {
                const errorData = await res.json().catch(() => ({ message: res.statusText }));
                console.error("Save Error Details:", errorData, "Status:", res.status);
                // Stringify the error detail so it's visible in the toast
                const errorMessage = errorData.error || errorData.message || JSON.stringify(errorData);
                toast({
                    title: `Error ${res.status}`,
                    description: `Validation Failed: ${errorMessage}`,
                    variant: "destructive"
                });
            }

        } catch (err) {
            console.error(err);
            toast({ title: "Error", description: "Network error.", variant: "destructive" });
        }
    };

    const resetForm = () => {
        setFormData({
            address: "",
            price: "",
            status: "Active",
            bed: 3,
            bath: 2,
            sqft: 1500,
            imageUrl: "",
            photosLink: "",
            description: ""
        });
    };

    const startEdit = (item: ListingType) => {
        setIsEditing(item);
        setFormData(item);
        setIsAdding(true);
    };

    // --- RENDER LOGIN ---
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-brand-black/10">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <KeyRound className="w-8 h-8 text-accent" />
                        </div>
                        <h1 className="text-2xl font-bold text-brand-black">Admin Dashboard</h1>
                        <p className="text-brand-black/70 text-sm mt-2">Enter credentials to access</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 text-brand-black bg-white"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 text-brand-black bg-white"
                                placeholder="Password"
                            />
                        </div>
                        <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6">
                            {isLoading ? "Logging in..." : "Access Dashboard"}
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    // --- AUTO-LOGOUT ON INACTIVITY ---


    // --- RENDER DASHBOARD ---
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Top Bar */}
            <div className="bg-white border-b sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
                <h2 className="text-xl font-bold text-brand-black flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    Listings Manager
                </h2>
                <div className="flex gap-4 ">
                    <Button className="bg-[#01313c] text-white" onClick={() => window.open('/listing', '_blank')}>
                        <Eye className="w-4 h-4 mr-2 text-white" /> View Site
                    </Button>
                    <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-6xl">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-brand-black">Properties</h1>
                        <p className="text-brand-black/70">Manage your active, pending, and sold inventory.</p>
                    </div>
                    <Button onClick={() => { setIsAdding(true); resetForm(); setIsEditing(null); }} className="bg-accent text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                        <Plus className="w-5 h-5 mr-2" /> Add Property
                    </Button>
                </div>

                {/* ADD/EDIT FORM OVERLAY */}
                {isAdding && (
                    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-brand-black/10 transform transition-all">
                            <div className="border-b px-8 py-6 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur z-10 glass-header">
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-black">{isEditing ? "Edit Property" : "Add New Property"}</h3>
                                    <p className="text-brand-black/80 text-sm mt-1 font-medium">Fill in the details below to update your inventory.</p>
                                </div>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100" onClick={() => setIsAdding(false)}>
                                    <X className="w-5 h-5 text-brand-black" />
                                </Button>
                            </div>
                            <form onSubmit={handleSave} className="p-8 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="col-span-2">
                                        <Label className="text-base font-bold text-brand-black">Property Address</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 focus:ring-black focus:border-black h-12 text-lg" required value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="123 Main St" />
                                    </div>

                                    <div>
                                        <Label className="text-base font-bold text-brand-black">Price</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 focus:ring-black focus:border-black h-12" required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} placeholder="250000" />
                                    </div>

                                    <div>
                                        <Label className="text-base font-bold text-brand-black">Status</Label>
                                        <select
                                            className="mt-2 flex h-12 w-full rounded-md border border-brand-black/30 bg-white text-brand-black px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                            value={formData.status}
                                            onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Sold">Sold</option>
                                        </select>
                                    </div>

                                    <div>
                                        <Label className="text-base font-bold text-brand-black">Bedrooms</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 h-12" type="number" value={formData.bed} onChange={e => setFormData({ ...formData, bed: parseInt(e.target.value) })} />
                                    </div>

                                    <div>
                                        <Label className="text-base font-bold text-brand-black">Bathrooms</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 h-12" type="number" step="0.5" value={formData.bath} onChange={e => setFormData({ ...formData, bath: parseFloat(e.target.value) })} />
                                    </div>

                                    <div>
                                        <Label className="text-base font-bold text-brand-black">Sqft</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 h-12" type="number" value={formData.sqft} onChange={e => setFormData({ ...formData, sqft: parseInt(e.target.value) })} />
                                    </div>

                                    <div className="col-span-2">
                                        <Label className="text-base font-bold text-brand-black">Main Image URL</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 h-12" value={formData.imageUrl} onChange={e => setFormData({ ...formData, imageUrl: e.target.value })} placeholder="https://..." />
                                        <p className="text-xs text-brand-black/70 mt-2 font-medium">Paste a direct image link.</p>
                                    </div>

                                    <div className="col-span-2">
                                        <Label className="text-base font-bold text-brand-black">External Photos Link (Google/Dropbox)</Label>
                                        <Input className="mt-2 bg-white text-brand-black border-brand-black/30 h-12" value={formData.photosLink} onChange={e => setFormData({ ...formData, photosLink: e.target.value })} placeholder="https://photos.google.com/..." />
                                        <p className="text-xs text-brand-black/70 mt-2 font-medium">Link to more photos folder.</p>
                                    </div>

                                    <div className="col-span-2">
                                        <Label className="text-base font-bold text-brand-black">Description</Label>
                                        <textarea
                                            className="mt-2 flex min-h-[120px] w-full rounded-md border border-brand-black/30 bg-white text-brand-black px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black placeholder:text-brand-black/60"
                                            value={formData.description}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                            placeholder="Enter property details..."
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
                                    <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
                                    <Button type="submit" className="bg-accent text-white">
                                        <Save className="w-4 h-4 mr-2" />
                                        {isEditing ? "Update Listing" : "Create Listing"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* LISTINGS GRID */}
                {isLoading ? (
                    <div className="flex justify-center py-20"><Loader2 className="animate-spin w-10 h-10 text-brand-black/60" /></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listings.map(item => (
                            <div key={item.id} className="bg-white rounded-xl border border-brand-black/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="relative h-48 bg-gray-100">
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt={item.address} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-brand-black/60 text-sm">No Image</div>
                                    )}
                                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                               ${item.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            item.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}
                             `}>
                                        {item.status}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-brand-black line-clamp-1">{item.address}</h3>
                                        <span className="font-bold text-accent">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                                    </div>

                                    <div className="flex gap-4 text-sm text-brand-black/70 mb-4">
                                        <span>{item.bed} Beds</span>
                                        <span>{item.bath} Baths</span>
                                        <span>{item.sqft} sqft</span>
                                    </div>

                                    <div className="flex gap-2 pt-4 border-t border-brand-black/10">
                                        <Button size="sm" variant="outline" className="flex-1" onClick={() => startEdit(item)}>
                                            <Edit className="w-4 h-4 mr-2" /> Edit
                                        </Button>
                                        <Button size="sm" variant="destructive" className="flex-1" onClick={() => handleDelete(item.id)}>
                                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {listings.length === 0 && (
                            <div className="col-span-full text-center py-20 bg-white rounded-xl border border-dashed border-brand-black/30">
                                <p className="text-brand-black/70 mb-4">No listings found.</p>
                                <Button className="bg-accent text-white" onClick={() => setIsAdding(true)} variant="outline">Create your first listing</Button>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};


export default Dashboard;




import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Ruler, ArrowLeft, Calendar, Phone, Mail, Share2, Printer, ExternalLink, Images } from "lucide-react";
import { motion } from "framer-motion";

interface ListingType {
    id: string;
    address: string;
    price: string;
    status: "Active" | "Pending" | "Sold";
    beds: number;
    baths: number;
    sqft: number;
    imageUrl: string;
    photosLink?: string;
    description: string;
}

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState<ListingType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                // Fetch ALL listings and find locally (Fallback for missing GET /:id)
                const res = await fetch(`http://localhost:5000/api/listings`);
                if (res.ok) {
                    const data: ListingType[] = await res.json();
                    const found = data.find(l => l.id.toString() === id);
                    if (found) {
                        setListing(found);
                    } else {
                        // Optional: Handle ID not found in list
                        console.warn("Listing ID not found in response");
                    }
                }
            } catch (error) {
                console.error("Failed to load listing details:", error);
            } finally {
                setIsLoading(false);
            }
        };
        if (id) fetchDetails();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (!listing) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Listing Not Found</h2>
                <Link to="/listing">
                    <Button>Back to Listings</Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{listing.address} | HudREI Properties</title>
            </Helmet>
            <Header />

            <div className="min-h-screen bg-gray-50 pt-32 pb-20">

                {/* Navigation Breadcrumb */}
                <div className="container mx-auto px-4 mb-8">
                    <Link to="/listing" className="inline-flex items-center text-gray-500 hover:text-accent transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
                    </Link>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Main Content - Left Column */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Hero Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video"
                            >
                                {listing.imageUrl ? (
                                    <img src={listing.imageUrl} alt={listing.address} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                                )}
                                <div className="absolute top-6 left-6">
                                    <Badge className={`
                                px-4 py-1.5 text-sm font-bold shadow-md border-none
                                ${listing.status === 'Active' ? 'bg-green-500 text-white' :
                                            listing.status === 'Pending' ? 'bg-amber-500 text-white' : 'bg-red-500 text-white'}
                            `}>
                                        {listing.status}
                                    </Badge>
                                </div>
                            </motion.div>

                            {/* Property Specs Grid (Mobile/Desktop) */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-wrap justify-between gap-6 text-center divide-x divide-gray-100">
                                <div className="flex-1 px-2">
                                    <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">Price</div>
                                    <div className="text-2xl md:text-3xl font-extrabold text-accent">{listing.price}</div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">Bedrooms</div>
                                    <div className="text-2xl font-bold text-gray-900 flex justify-center gap-1">
                                        {listing.beds} <Bed className="w-5 h-5 mt-1 text-gray-300" />
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">Bathrooms</div>
                                    <div className="text-2xl font-bold text-gray-900 flex justify-center gap-1">
                                        {listing.baths} <Bath className="w-5 h-5 mt-1 text-gray-300" />
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">Square Fet</div>
                                    <div className="text-2xl font-bold text-gray-900 flex justify-center gap-1">
                                        {listing.sqft} <Ruler className="w-5 h-5 mt-1 text-gray-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this Property</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {listing.description}
                                </p>
                            </div>

                        </div>

                        {/* Sidebar - Right Column */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-6">

                                {/* Summary Card */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{listing.address}</h1>
                                    <div className="flex items-center text-gray-500 mb-6">
                                        <MapPin className="w-4 h-4 mr-2" /> {listing.address}
                                    </div>

                                    <hr className="border-gray-100 my-6" />

                                    <div className="space-y-4">
                                        <Button className="w-full bg-accent hover:bg-accent/90 text-lg py-6 shadow-xl shadow-accent/20">
                                            <Calendar className="w-5 h-5 mr-2" /> Schedule a Tour
                                        </Button>
                                        <Button variant="outline" className="w-full py-6 border-2">
                                            <Mail className="w-5 h-5 mr-2" /> Request Info
                                        </Button>
                                    </div>

                                    <div className="mt-8 flex justify-center gap-4 text-gray-400">
                                        <button className="hover:text-accent transition-colors"><Share2 className="w-5 h-5" /></button>
                                        <button className="hover:text-accent transition-colors"><Printer className="w-5 h-5" /></button>
                                    </div>
                                </div>

                                {/* Agent Card */}
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl">
                                    <h3 className="text-xl font-bold mb-4">Interested?</h3>
                                    <p className="text-gray-300 mb-6">Contact our sales team directly to get more information or make an offer.</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Call Us 24/7</div>
                                            <div className="text-lg font-bold">(555) 123-4567</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ListingDetails;

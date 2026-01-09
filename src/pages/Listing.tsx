import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionsSection from "@/components/QuestionsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, ArrowRight, Ruler, Loader2, RotateCcw, SlidersHorizontal, ChevronDown } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Listing Type Definition
interface ListingType {
    id: string;
    address: string;
    price: string;
    status: "Active" | "Pending" | "Sold";
    beds: number;
    baths: number;
    sqft: number;
    imageUrl: string;
    description: string;
}

const Listing = () => {
    const [listings, setListings] = useState<ListingType[]>([]);
    const [filteredListings, setFilteredListings] = useState<ListingType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Filters
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [stateFilter, setStateFilter] = useState<string>("all");
    const [priceFilter, setPriceFilter] = useState<string>("all");

    // Advanced Filters
    const [minBeds, setMinBeds] = useState<string>("");
    const [minBaths, setMinBaths] = useState<string>("");
    const [minSqft, setMinSqft] = useState<string>("");
    const [customMinPrice, setCustomMinPrice] = useState<string>("");
    const [customMaxPrice, setCustomMaxPrice] = useState<string>("");

    // Extract unique states from listings
    // Extract unique states from listings + Midwest states
    const midwestStates = ["IL", "IN", "IA", "KS", "MI", "MN", "MO", "NE", "ND", "OH", "SD", "WI"];
    const propertyStates = listings.map(item => {
        // Simple extraction assuming "City, State Zip" format or similar
        const parts = item.address.split(',');
        if (parts.length > 1) {
            return parts[parts.length - 1].trim().split(' ')[0];
        }
        return "";
    }).filter(Boolean);

    const states = Array.from(new Set([...midwestStates, ...propertyStates])).sort();

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/listings`);
                if (res.ok) {
                    const data = await res.json();
                    setListings(data);
                    setFilteredListings(data);
                }
            } catch (error) {
                console.error("Failed to load listings:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchListings();
    }, []);

    useEffect(() => {
        let result = listings;

        if (statusFilter !== "all" && statusFilter !== "2 Status") {
            result = result.filter(item => item.status === statusFilter);
        }

        if (stateFilter !== "all" && stateFilter !== "All States") {
            result = result.filter(item => item.address.includes(stateFilter));
        }

        // Price Filter Logic
        result = result.filter(item => {
            if (item.price === undefined || item.price === null) return false;

            let price = 0;
            if (typeof item.price === 'number') {
                price = item.price;
            } else if (typeof item.price === 'string') {
                const cleaned = item.price.toString().replace(/[^0-9]/g, "");
                if (!cleaned) return false;
                price = parseInt(cleaned, 10);
            } else {
                return false;
            }

            // Dropdown Ranges
            if (priceFilter !== "all" && priceFilter !== "Any Price") {
                if (priceFilter === "under-100k" && price >= 100000) return false;
                if (priceFilter === "100k-200k" && (price < 100000 || price > 200000)) return false;
                if (priceFilter === "200k-500k" && (price <= 200000 || price > 500000)) return false;
                if (priceFilter === "500k-plus" && price <= 500000) return false;
            }

            // Custom Range
            if (customMinPrice && price < parseInt(customMinPrice)) return false;
            if (customMaxPrice && price > parseInt(customMaxPrice)) return false;

            return true;
        });

        if (minBeds) {
            result = result.filter(item => item.beds >= parseInt(minBeds));
        }
        if (minBaths) {
            result = result.filter(item => item.baths >= parseInt(minBaths));
        }
        if (minSqft) {
            result = result.filter(item => item.sqft >= parseInt(minSqft));
        }

        setFilteredListings(result);
    }, [listings, statusFilter, stateFilter, priceFilter, minBeds, minBaths, minSqft, customMinPrice, customMaxPrice]);

    const resetFilters = () => {
        setStatusFilter("all");
        setStateFilter("all");
        setPriceFilter("all");
        setMinBeds("");
        setMinBaths("");
        setMinSqft("");
        setCustomMinPrice("");
        setCustomMaxPrice("");
    };

    return (
        <>
            <Helmet>
                <title>Property Listings | HudREI - Homes for Sale in Indiana</title>
                <meta
                    name="description"
                    content="Explore our current inventory of renovated and move-in ready homes in Indiana. Find your dream home with HudREI."
                />
                <link rel="canonical" href="https://hudrei.com/listing" />
            </Helmet>
            <Header />
            <div className="min-h-screen bg-gray-50 pt-32">

                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-4 py-1.5 mb-6 text-sm font-semibold rounded-full">
                            Current Inventory
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6 leading-tight">
                            Find Your Next
                            <span className="text-accent relative inline-block mx-2">
                                Home
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-brand-black/80 leading-relaxed mb-8">
                            Browse our exclusive selection of properties. Whether you're a first-time buyer or looking for an investment, we have options for you.
                        </p>

                        {/* Filters Bar */}
                        {/* Filters Bar */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-black/10 flex flex-col md:flex-row flex-nowrap gap-4 items-center justify-between max-w-10xl mx-auto w-[102%]">
                            <div className="flex flex-col sm:flex-row md:flex-nowrap gap-3 items-center w-full md:w-auto flex-1 justify-center md:justify-start">
                                <Select value={stateFilter} onValueChange={setStateFilter}>
                                    <SelectTrigger className="w-full sm:w-[150px] bg-white text-brand-black border-brand-black/20 font-medium">
                                        <SelectValue placeholder="All States" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-brand-black border-brand-black/10">
                                        <SelectItem value="all">All States</SelectItem>
                                        {states.map(state => (
                                            <SelectItem key={state} value={state}>{state}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger className="w-full sm:w-[150px] bg-white text-brand-black border-brand-black/20 font-medium">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-brand-black border-brand-black/10">
                                        <SelectItem value="all">Any Status</SelectItem>
                                        <SelectItem value="Active">Active</SelectItem>
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="Sold">Sold</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full sm:w-[150px] justify-between bg-white text-brand-black border-brand-black/20 font-medium px-3">
                                            {priceFilter === 'all' && !customMinPrice && !customMaxPrice ? "Any Price" :
                                                priceFilter !== 'all' ? (
                                                    priceFilter === "under-100k" ? "Under $100k" :
                                                        priceFilter === "100k-200k" ? "$100k - $200k" :
                                                            priceFilter === "200k-500k" ? "$200k - $500k" :
                                                                priceFilter === "500k-plus" ? "$500k+" : priceFilter
                                                ) : "Custom Price"}
                                            <ChevronDown className="h-4 w-4 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[300px] bg-white p-4 rounded-xl shadow-xl border border-brand-black/10" align="start">
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <h4 className="font-semibold leading-none">Price Range</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {["all", "under-100k", "100k-200k", "200k-500k", "500k-plus"].map((price) => (
                                                        <Button
                                                            key={price}
                                                            variant={priceFilter === price && !customMinPrice && !customMaxPrice ? "default" : "outline"}
                                                            size="sm"
                                                            className={`justify-start transition-colors duration-200 ${priceFilter === price && !customMinPrice && !customMaxPrice
                                                                ? "bg-accent text-white shadow-md hover:bg-accent/90"
                                                                : "bg-white text-brand-black border border-brand-black/20 hover:bg-accent hover:text-white hover:border-accent"
                                                                } `}
                                                            onClick={() => {
                                                                setPriceFilter(price);
                                                                setCustomMinPrice("");
                                                                setCustomMaxPrice("");
                                                            }}
                                                        >
                                                            {price === "all" ? "Any Price" :
                                                                price === "under-100k" ? "Under $100k" :
                                                                    price === "100k-200k" ? "$100k - $200k" :
                                                                        price === "200k-500k" ? "$200k - $500k" :
                                                                            "$500k+"}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="h-px bg-border" />
                                            <div className="space-y-2">
                                                <h4 className="font-semibold leading-none">Custom Range</h4>
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        type="number"
                                                        placeholder="Min"
                                                        value={customMinPrice}
                                                        onChange={(e) => {
                                                            setCustomMinPrice(e.target.value);
                                                            setPriceFilter("all");
                                                        }}
                                                        className="bg-white text-black border-black placeholder:text-black focus-visible:ring-accent"
                                                    />
                                                    <span className="text-muted-foreground">-</span>
                                                    <Input
                                                        type="number"
                                                        placeholder="Max"
                                                        value={customMaxPrice}
                                                        onChange={(e) => {
                                                            setCustomMaxPrice(e.target.value);
                                                            setPriceFilter("all");
                                                        }}
                                                        className="bg-white text-black border-black placeholder:text-black/70 focus-visible:ring-accent"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full sm:w-auto bg-white border-brand-black/20 text-brand-black hover:bg-gray-50 hover:text-brand-black font-medium gap-2">
                                            <SlidersHorizontal className="w-4 h-4" /> More Filters <ChevronDown className="w-3 h-3 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 bg-white p-6 rounded-2xl shadow-xl border border-brand-black/10" align="start">
                                        <div className="grid gap-6">
                                            {/* Property Details */}
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-lg text-brand-black">Property Details</h4>
                                                    <p className="text-sm text-brand-black/60">Refine by size and rooms.</p>
                                                </div>
                                                <div className="grid gap-4">
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="beds" className="text-right text-sm font-semibold text-brand-black col-span-1">Beds</Label>
                                                        <Input
                                                            id="beds"
                                                            type="number"
                                                            placeholder="Min"
                                                            value={minBeds}
                                                            onChange={(e) => setMinBeds(e.target.value)}
                                                            className="col-span-3 h-9 bg-gray-50 border-brand-black/20 focus-visible:ring-accent"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="baths" className="text-right text-sm font-semibold text-brand-black col-span-1">Baths</Label>
                                                        <Input
                                                            id="baths"
                                                            type="number"
                                                            placeholder="Min"
                                                            value={minBaths}
                                                            onChange={(e) => setMinBaths(e.target.value)}
                                                            className="col-span-3 h-9 bg-gray-50 border-brand-black/20 focus-visible:ring-accent"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="sqft" className="text-right text-sm font-semibold text-brand-black col-span-1">Sqft</Label>
                                                        <Input
                                                            id="sqft"
                                                            type="number"
                                                            placeholder="Min"
                                                            value={minSqft}
                                                            onChange={(e) => setMinSqft(e.target.value)}
                                                            className="col-span-3 h-9 bg-gray-50 border-brand-black/20 focus-visible:ring-accent"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>


                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={resetFilters}
                                className="w-full sm:w-auto text-brand-black/60 hover:text-brand-black hover:bg-transparent gap-2 font-medium"
                            >
                                <RotateCcw className="w-4 h-4" /> Reset All
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Listings Grid */}
                <section className="container mx-auto px-4 pb-24">
                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-accent animate-spin" />
                        </div>
                    ) : (
                        <>
                            {filteredListings.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredListings.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-brand-black/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                                        >
                                            {/* Image Container */}
                                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                                <div className="absolute top-4 left-4 z-10">
                                                    <Badge className={`
                                                        px-3 py-1 text-xs font-bold shadow-sm border-none
                                                        ${item.status === 'Active' ? 'bg-green-500 text-white' :
                                                            item.status === 'Pending' ? 'bg-amber-500 text-white' :
                                                                'bg-red-500 text-white'}
                                                    `}>
                                                        {item.status}
                                                    </Badge>
                                                </div>
                                                {item.imageUrl ? (
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.address}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-brand-black/60">
                                                        No Image Available
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-brand-black group-hover:text-accent transition-colors">
                                                            {formatPrice(item.price)}
                                                        </h3>
                                                        <p className="text-brand-black/70 text-sm flex items-center gap-1 mt-1">
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            {item.address}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Specs */}
                                                <div className="grid grid-cols-3 gap-2 py-4 border-t border-brand-black/10 mb-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="flex items-center gap-1 text-brand-black/60 mb-1">
                                                            <Bed className="w-4 h-4" />
                                                            <span className="text-xs font-semibold uppercase">Beds</span>
                                                        </div>
                                                        <span className="font-bold text-brand-black">{item.beds}</span>
                                                    </div>
                                                    <div className="flex flex-col items-center border-l border-brand-black/10">
                                                        <div className="flex items-center gap-1 text-brand-black/60 mb-1">
                                                            <Bath className="w-4 h-4" />
                                                            <span className="text-xs font-semibold uppercase">Baths</span>
                                                        </div>
                                                        <span className="font-bold text-brand-black">{item.baths}</span>
                                                    </div>
                                                    <div className="flex flex-col items-center border-l border-brand-black/10">
                                                        <div className="flex items-center gap-1 text-brand-black/60 mb-1">
                                                            <Ruler className="w-4 h-4" />
                                                            <span className="text-xs font-semibold uppercase">Sqft</span>
                                                        </div>
                                                        <span className="font-bold text-brand-black">{item.sqft}</span>
                                                    </div>
                                                </div>

                                                <p className="text-brand-black/80 text-sm line-clamp-2 mb-6 flex-grow">
                                                    {item.description}
                                                </p>

                                                <div className="mt-auto pt-4">
                                                    <Link to={`/listing/${item.id}`}>
                                                        <Button className="w-full rounded-xl font-bold glow-button">
                                                            View Details <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white rounded-3xl border border-brand-black/10 shadow-sm">
                                    <h3 className="text-xl font-bold text-brand-black mb-2">No Listings Found</h3>
                                    <p className="text-brand-black/70">Check back soon for new properties!</p>
                                </div>
                            )}
                        </>
                    )}
                </section>

                <QuestionsSection />
            </div>
            <Footer />
        </>
    );
};

export default Listing;

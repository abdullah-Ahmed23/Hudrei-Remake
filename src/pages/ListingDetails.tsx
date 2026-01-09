import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    MapPin, Bed, Bath, Ruler, ArrowLeft, Phone, Images, DollarSign,
    Home, Car, Calendar, Trees, Share2, Heart, MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";

interface ListingType {
    id: string;
    address: string;
    price: string | number;
    status: "Active" | "Pending" | "Sold";
    beds: number;
    baths: number;
    sqft: number;
    imageUrl: string;
    photosLink?: string;
    description: string;
    // New fields
    arv?: number;
    grossMargin?: number;
    rentalEstimate?: number;
    yearBuilt?: number;
    lotSize?: string;
    propertyType?: string;
    parking?: string;
    halfBaths?: number | string;
    city?: string; // For nearby filter logic
    zip?: string;
}

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState<ListingType | null>(null);
    const [nearbyListings, setNearbyListings] = useState<ListingType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/listings`);
                if (res.ok) {
                    const data: ListingType[] = await res.json();
                    const found = data.find(l => l.id.toString() === id);
                    if (found) {
                        setListing(found);
                        // Simple "Nearby" logic: take first 4 other active listings
                        setNearbyListings(data.filter(l => l.id.toString() !== id && l.status === 'Active').slice(0, 4));
                    } else {
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

        // Scroll to top when ID changes
        window.scrollTo(0, 0);
    }, [id]);

    const getPriceNumber = (price: string | number | undefined) => {
        if (!price) return 0;
        if (typeof price === 'number') return price;
        return parseInt(price.toString().replace(/[^0-9]/g, ""));
    };

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
                <h2 className="text-2xl font-bold text-brand-black mb-4">Listing Not Found</h2>
                <Link to="/listing">
                    <Button>Back to Listings</Button>
                </Link>
            </div>
        );
    }

    // Calculations / Placeholders
    const priceNum = getPriceNumber(listing.price);
    const arvNum = listing.arv || (priceNum * 1.5); // Placeholder logic if ARV missing
    const grossMarginNum = listing.grossMargin || (arvNum - priceNum - 15000); // Placeholder
    const rentalEst = listing.rentalEstimate || (priceNum * 0.012); // Placeholder

    return (
        <>
            <Helmet>
                <title>{listing.address} | HudREI Properties</title>
            </Helmet>
            <Header />

            <div className="min-h-screen bg-gray-50 pt-32 pb-20">

                {/* Navigation Breadcrumb */}
                <div className="container mx-auto px-4 mb-8">
                    <Link to="/listing" className="inline-flex items-center text-brand-black/70 hover:text-accent transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
                    </Link>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Hero Image - MOVED UP */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video"
                            >
                                {listing.imageUrl ? (
                                    <img src={listing.imageUrl} alt={listing.address} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-brand-black/60">No Image</div>
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

                            {/* Property Specs - MOVED UNDER PHOTO */}
                            <div className="py-4 border-b border-gray-200">
                                <div className="flex flex-wrap gap-8 items-center text-brand-black">
                                    <div className="flex items-center gap-2">
                                        <Bed className="w-5 h-5 text-brand-black/60" />
                                        <div className="flex flex-col leading-none">
                                            <span className="text-xs text-brand-black/60 font-semibold uppercase">Beds</span>
                                            <span className="font-bold text-lg">{listing.beds}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="w-5 h-5 text-brand-black/60" />
                                        <div className="flex flex-col leading-none">
                                            <span className="text-xs text-brand-black/60 font-semibold uppercase">Baths</span>
                                            <span className="font-bold text-lg">{listing.baths}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 flex justify-center text-brand-black/60">
                                            <span className="text-xs font-bold">1/2</span>
                                        </div>
                                        <div className="flex flex-col leading-none">
                                            <span className="text-xs text-brand-black/60 font-semibold uppercase">Half-Bath</span>
                                            <span className="font-bold text-lg">{listing.halfBaths || '-'}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Home className="w-5 h-5 text-brand-black/60" />
                                        <div className="flex flex-col leading-none">
                                            <span className="text-xs text-brand-black/60 font-semibold uppercase">Sq.Ft</span>
                                            <span className="font-bold text-lg">{listing.sqft}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Overview Section */}
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-black/5">
                                <h2 className="text-2xl font-bold text-brand-black mb-6">Overview</h2>

                                <div className="space-y-6 text-brand-black/80">
                                    <div>
                                        <p className="font-medium text-lg text-brand-black mb-1">{listing.address}</p>
                                    </div>

                                    {/* Description render with line breaks */}
                                    <div className="whitespace-pre-line leading-relaxed">
                                        {listing.description}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                        <div>
                                            <p className="text-xs font-bold text-brand-black/50 uppercase tracking-wider mb-1">Cash Asking Price</p>
                                            <p className="text-xl font-bold text-brand-black">{formatPrice(listing.price)} Cash or best offer</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-brand-black/50 uppercase tracking-wider mb-1">After Repair Value</p>
                                            <p className="text-xl font-bold text-brand-black">{formatPrice(arvNum)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-brand-black/50 uppercase tracking-wider mb-1">Rental Estimate</p>
                                            <p className="text-xl font-bold text-brand-black">{formatPrice(rentalEst)}</p>
                                            <p className="text-xs text-brand-black/60">Rent-O-Meter Average</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-black/5">
                                <h2 className="text-xl font-bold text-brand-black mb-6">Additional details</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-brand-black/60 mb-1">
                                            <Home className="w-4 h-4" />
                                            <span className="text-sm font-semibold">Type</span>
                                        </div>
                                        <p className="text-brand-black font-medium">{listing.propertyType || "Single-Family"}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-brand-black/60 mb-1">
                                            <Car className="w-4 h-4" />
                                            <span className="text-sm font-semibold">Parking</span>
                                        </div>
                                        <p className="text-brand-black font-medium">{listing.parking || "Detached Garage"}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-brand-black/60 mb-1">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-semibold">Built in</span>
                                        </div>
                                        <p className="text-brand-black font-medium">{listing.yearBuilt || "1976"}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-brand-black/60 mb-1">
                                            <Trees className="w-4 h-4" />
                                            <span className="text-sm font-semibold">Lot size</span>
                                        </div>
                                        <p className="text-brand-black font-medium">{listing.lotSize || "0.18 acres"}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 space-y-6">

                                {/* Price Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-black/10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <p className="text-brand-black/60 text-sm font-medium">Price</p>
                                            <h3 className="text-3xl font-extrabold text-brand-black">{formatPrice(listing.price)}</h3>
                                        </div>
                                        {/* Placeholder checkbox/icon from screenshot */}
                                        <div className="bg-blue-600 rounded-full p-1">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-brand-black/70">ARV</span>
                                            <span className="font-bold text-brand-black">{formatPrice(arvNum)}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm pt-3 border-t border-gray-100">
                                            <span className="text-brand-black/70">Gross margin</span>
                                            <span className="font-bold text-brand-black">{formatPrice(grossMarginNum)}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Link to="/partners/local-investors#investor-form">
                                            <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 shadow-md transition-all">
                                                Make offer
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Company Deals Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-black/10 text-center">
                                    <Link to="/listing" className="text-sm font-semibold text-blue-600 hover:underline block p-2">
                                        View all company deals ({nearbyListings.length > 0 ? nearbyListings.length : '2'})
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* And other deals / Nearby */}
                <section className="container mx-auto px-4 mt-20">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-3xl font-bold text-brand-black">And other deals</h2>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-brand-black/10 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-xl">Deals nearby</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {nearbyListings.length > 0 ? nearbyListings.map((item) => {
                                const itemArv = item.arv || (getPriceNumber(item.price) * 1.5);
                                return (
                                    <Link to={`/listing/${item.id}`} key={item.id} className="group">
                                        <div className="bg-white rounded-xl overflow-hidden border border-brand-black/10 hover:shadow-lg transition-all duration-300">
                                            <div className="relative h-48 bg-gray-100">
                                                <img src={item.imageUrl} alt={item.address} className="w-full h-full object-cover" />
                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    <Badge className="bg-[#3b82f6] text-white border-none text-[10px] font-bold px-2 py-0.5 rounded-sm">FOR SALE</Badge>
                                                    {/* Random % for demo */}
                                                    <Badge className="bg-[#84cc16] text-white border-none text-[10px] font-bold px-2 py-0.5 rounded-sm">51%</Badge>
                                                </div>
                                                <div className="absolute bottom-3 right-3">
                                                    <Badge variant="secondary" className="bg-white/90 text-brand-black text-[10px] font-bold px-2 py-0.5 backdrop-blur-sm">
                                                        5 days ago
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-lg font-extrabold text-brand-black">{formatPrice(item.price)}</span>
                                                    <span className="text-[10px] text-brand-black/60 font-medium">(ARV - {formatPrice(itemArv)})</span>
                                                </div>
                                                <p className="text-xs text-brand-black/70 mb-3 truncate">{item.address}</p>
                                                <div className="flex items-center gap-3 text-xs text-brand-black/60 font-medium">
                                                    <div className="flex items-center gap-1"><Bed className="w-3 h-3" /> {item.beds} Beds</div>
                                                    <div className="flex items-center gap-1"><Bath className="w-3 h-3" /> {item.baths} Baths</div>
                                                    <div className="flex items-center gap-1"><Ruler className="w-3 h-3" /> {item.sqft} sq.ft</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }) : (
                                <div className="col-span-4 text-center py-10 text-brand-black/50">
                                    No other nearby deals found.
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </div>

        </>
    );
};

export default ListingDetails;

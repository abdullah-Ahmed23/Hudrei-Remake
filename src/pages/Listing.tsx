import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionsSection from "@/components/QuestionsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, ArrowRight, Ruler, Loader2 } from "lucide-react";
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/listings");
                if (res.ok) {
                    const data = await res.json();
                    setListings(data);
                }
            } catch (error) {
                console.error("Failed to load listings:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchListings();
    }, []);

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
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Find Your Next
                            <span className="text-accent relative inline-block mx-2">
                                Home
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Browse our exclusive selection of properties. Whether you're a first-time buyer or looking for an investment, we have options for you.
                        </p>
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
                            {listings.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {listings.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
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
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                        No Image Available
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                                                            {item.price}
                                                        </h3>
                                                        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            {item.address}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Specs */}
                                                <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-100 mb-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="flex items-center gap-1 text-gray-400 mb-1">
                                                            <Bed className="w-4 h-4" />
                                                            <span className="text-xs font-semibold uppercase">Beds</span>
                                                        </div>
                                                        <span className="font-bold text-gray-800">{item.beds}</span>
                                                    </div>
                                                    <div className="flex flex-col items-center border-l border-gray-100">
                                                        <div className="flex items-center gap-1 text-gray-400 mb-1">
                                                            <Bath className="w-4 h-4" />
                                                            <span className="text-xs font-semibold uppercase">Baths</span>
                                                        </div>
                                                        <span className="font-bold text-gray-800">{item.baths}</span>
                                                    </div>
                                                    <div className="flex flex-col items-center border-l border-gray-100">
                                                        <div className="flex items-center gap-1 text-gray-400 mb-1">
                                                            <Ruler className="w-4 h-4" />
                                                            <span className="text-xs font-semibold uppercase">Sqft</span>
                                                        </div>
                                                        <span className="font-bold text-gray-800">{item.sqft}</span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
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
                                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Listings Found</h3>
                                    <p className="text-gray-500">Check back soon for new properties!</p>
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

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionsSection from "@/components/QuestionsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, ArrowRight, Home, DollarSign, Ruler } from "lucide-react";
import { motion } from "framer-motion";

// Mock Data for Listings
const listings = [
    {
        id: 1,
        address: "123 Maple Street",
        city: "Indianapolis",
        state: "IN",
        zip: "46202",
        price: 245000,
        beds: 3,
        baths: 2,
        sqft: 1850,
        status: "Active",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Beautifully renovated bungalow in a quiet neighborhood. New roof, HVAC, and modern kitchen."
    },
    {
        id: 2,
        address: "456 Oak Avenue",
        city: "Carmel",
        state: "IN",
        zip: "46032",
        price: 389000,
        beds: 4,
        baths: 3,
        sqft: 2400,
        status: "Pending",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Spacious family home with a large backyard and finished basement. Close to top-rated schools."
    },
    {
        id: 3,
        address: "789 Pine Lane",
        city: "Fishers",
        state: "IN",
        zip: "46037",
        price: 195000,
        beds: 2,
        baths: 1.5,
        sqft: 1200,
        status: "Active",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Perfect starter home or investment property. Turn-key condition with low maintenance landscaping."
    },
    {
        id: 4,
        address: "321 Cedar Drive",
        city: "Greenwood",
        state: "IN",
        zip: "46142",
        price: 310000,
        beds: 3,
        baths: 2.5,
        sqft: 2100,
        status: "Sold",
        image: "https://images.unsplash.com/photo-1600596542815-2495db9a72c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Recently sold! We buy and sell properties quickly. Contact us to find similar opportunities."
    },
    {
        id: 5,
        address: "555 Birch Blvd",
        city: "Noblesville",
        state: "IN",
        zip: "46060",
        price: 275000,
        beds: 3,
        baths: 2,
        sqft: 1950,
        status: "Active",
        image: "https://images.unsplash.com/photo-1576941089067-2de3c901e976?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Charming ranch style home with open concept living area and updated bathrooms."
    },
    {
        id: 6,
        address: "999 Elm Street",
        city: "Zionsville",
        state: "IN",
        zip: "46077",
        price: 450000,
        beds: 4,
        baths: 3.5,
        sqft: 3100,
        status: "Active",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Luxury estate with premium finishes, 3-car garage, and gourmet kitchen."
    }
];

const Listing = () => {
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

                {/* Filters Placeholder (Optional) */}
                {/* <section className="container mx-auto px-4 mb-12">
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                         <p className="text-gray-500 font-medium ml-2">Showing {listings.length} Properties</p>
                         <Button variant="outline" className="rounded-xl">Filter Listings</Button>
                     </div>
                </section> */}

                {/* Listings Grid */}
                <section className="container mx-auto px-4 pb-24">
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
                                <div className="relative h-64 overflow-hidden">
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
                                    <img
                                        src={item.image}
                                        alt={item.address}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                                                {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
                                            </h3>
                                            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {item.address}, {item.city}, {item.state}
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

                                    <Button className="w-full rounded-xl font-bold glow-button">
                                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <QuestionsSection />
            </div>
            <Footer />
        </>
    );
};

export default Listing;

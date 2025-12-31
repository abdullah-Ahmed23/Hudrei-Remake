import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Globe, Map } from "lucide-react";
import { motion } from "framer-motion";

const ServiceAreasSection = () => {
    const cities = [
        "Indianapolis", "Fort Wayne", "Evansville", "South Bend",
        "Carmel", "Fishers", "Bloomington", "Hammond", "Muncie", "Lafayette"
    ];

    const counties = [
        "Marion County", "Allen County", "Vanderburgh County", "St. Joseph County",
        "Hamilton County", "Lake County", "Tippecanoe County", "Delaware County",
        "Monroe County", "Porter County"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -ml-64 -mb-64" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
                            We Buy Houses <span className="text-accent relative inline-block">
                                Throughout Indiana
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            HudREI is proud to be a local Indiana leader. Whether your property is in a major metro or a quiet rural community, we provide fair, fast solutions for homeowners across the state.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
                    {/* Cities Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/40 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-gray-100 shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-700 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shadow-inner">
                                <Globe className="text-accent w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">Cities</h3>
                                <p className="text-gray-500 font-medium">Major metro areas we serve</p>
                            </div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {cities.map((city) => (
                                <motion.div key={city} variants={itemVariants}>
                                    <Link
                                        to={`/we-buy-houses/${city.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="inline-flex px-6 py-3 rounded-2xl text-base font-bold transition-all duration-300
                                                 bg-white text-gray-800 border border-gray-100
                                                 hover:bg-accent hover:text-white hover:border-accent 
                                                 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg hover:shadow-accent/20"
                                    >
                                        {city}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Counties Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/40 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-gray-100 shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-700 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                                <Map className="text-primary w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">Counties</h3>
                                <p className="text-gray-500 font-medium">Regional coverage across Indiana</p>
                            </div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {counties.map((county) => (
                                <motion.div key={county} variants={itemVariants}>
                                    <Link
                                        to={`/we-buy-houses/${county.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="inline-flex px-6 py-3 rounded-2xl text-base font-bold transition-all duration-300
                                                 bg-white text-gray-800 border border-gray-100
                                                 hover:bg-primary hover:text-white hover:border-primary 
                                                 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        {county}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-600 mb-10 text-xl font-medium max-w-3xl mx-auto">
                        Don't see your area listed? No worries. We buy houses in <span className="text-accent font-bold">all 92 Indiana counties</span>. Contact us today to see if we can help you.
                    </p>

                    <Button asChild size="lg" className="rounded-[2rem] px-12 py-9 text-2xl font-bold glow-button shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1.5 transition-all">
                        <Link to="/contact" className="flex items-center gap-3">
                            <MapPin className="w-6 h-6" />
                            See If We Buy in Your Area
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAreasSection;

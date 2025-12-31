import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Globe, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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

    const CardContent = ({ title, subtitle, items, type }: { title: string, subtitle: string, items: string[], type: 'city' | 'county' }) => (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className={cn(
                    "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner",
                    type === 'city' ? "bg-accent/10" : "bg-primary/10"
                )}>
                    {type === 'city' ? <Globe className="text-accent w-6 h-6 md:w-8 md:h-8" /> : <Map className="text-primary w-6 h-6 md:w-8 md:h-8" />}
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
                    <p className="text-sm md:text-base text-gray-500 font-medium">{subtitle}</p>
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 md:gap-3"
            >
                {items.map((item) => (
                    <motion.div key={item} variants={itemVariants}>
                        <Link
                            to={`/we-buy-houses/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className={cn(
                                "flex items-center justify-center text-center px-4 py-3 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-base font-bold transition-all duration-300 w-full md:w-auto",
                                "bg-white text-gray-800 border border-gray-100",
                                type === 'city'
                                    ? "hover:bg-accent hover:text-white hover:border-accent hover:shadow-accent/20"
                                    : "hover:bg-primary hover:text-white hover:border-primary hover:shadow-primary/20",
                                "hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg"
                            )}
                        >
                            {item}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[80px] md:blur-[100px] -mr-32 md:-mr-64 -mt-32 md:-mt-64" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -ml-32 md:-ml-64 -mb-32 md:-mb-64" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 px-2 md:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
                            We Buy Houses <span className="text-accent relative inline-block">
                                Throughout Indiana
                                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium px-2">
                            HudREI is proud to be a local Indiana leader. Whether your property is in a major metro or a quiet rural community, we provide fair, fast solutions for homeowners across the state.
                        </p>
                    </motion.div>
                </div>

                {/* Mobile Tabbed View */}
                <div className="block lg:hidden max-w-md mx-auto">
                    <Tabs defaultValue="cities" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100/50 p-1 rounded-2xl">
                            <TabsTrigger value="cities" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-accent data-[state=active]:shadow-sm py-3 font-bold">Cities</TabsTrigger>
                            <TabsTrigger value="counties" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 font-bold">Counties</TabsTrigger>
                        </TabsList>

                        <AnimatePresence mode="wait">
                            <TabsContent value="cities">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 border border-gray-100 shadow-xl"
                                >
                                    <CardContent title="Cities" subtitle="Major metro areas" items={cities} type="city" />
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="counties">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 border border-gray-100 shadow-xl"
                                >
                                    <CardContent title="Counties" subtitle="Regional coverage" items={counties} type="county" />
                                </motion.div>
                            </TabsContent>
                        </AnimatePresence>
                    </Tabs>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/40 backdrop-blur-md rounded-[3rem] p-12 border border-gray-100 shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-700"
                    >
                        <CardContent title="Cities" subtitle="Major metro areas we serve" items={cities} type="city" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/40 backdrop-blur-md rounded-[3rem] p-12 border border-gray-100 shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-700"
                    >
                        <CardContent title="Counties" subtitle="Regional coverage across Indiana" items={counties} type="county" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 md:mt-20 text-center"
                >
                    <p className="text-gray-600 mb-8 md:mb-10 text-lg md:text-xl font-medium max-w-3xl mx-auto px-4">
                        Don't see your area listed? No worries. We buy houses in <span className="text-accent font-bold">all 92 Indiana counties</span>. Contact us today to see if we can help you.
                    </p>

                    <Button asChild size="lg" className="rounded-2xl md:rounded-[2rem] px-8 py-7 md:px-12 md:py-9 text-lg md:text-2xl font-bold glow-button shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1.5 transition-all w-[90%] sm:w-auto">
                        <Link to="/contact" className="flex items-center justify-center gap-3">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                            See If We Buy in Your Area
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAreasSection;

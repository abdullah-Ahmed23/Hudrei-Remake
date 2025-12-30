import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const ServiceAreasSection = () => {
    const cities = [
        "Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel",
        "Fishers", "Bloomington", "Hammond", "Muncie", "Lafayette"
    ];

    const counties = [
        "Marion", "Allen", "Vanderburgh", "St. Joseph", "Hamilton",
        "Lake", "Tippecanoe", "Delaware", "Monroe", "Porter"
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-black">
                    We Buy Houses Throughout <span className="text-accent">Indiana</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
                    HudREI proudly serves homeowners across the state of Indiana. Our team of local real estate investors operates in major cities and counties including:
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center text-black justify-center gap-2">
                            <MapPin className="text-accent" /> Cities
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {cities.map((city) => (
                                <span key={city} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex text-black items-center justify-center gap-2">
                            <MapPin className="text-accent" /> Counties
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {counties.map((county) => (
                                <span key={county} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                                    {county}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 mb-8">
                    Whether you're in downtown Indianapolis or a rural community, we're here to help. As local Indiana investors, we understand the unique real estate market in your neighborhood.
                </p>

                <Button size="lg" className="rounded-full px-10">
                    <Link to="/contact">See If We Buy in Your Area</Link>
                </Button>
            </div>
        </section>
    );
};

export default ServiceAreasSection;

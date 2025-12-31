import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const TermsOfService = () => {
    return (
        <>
            <SEO
                title="Terms of Service | HudREI"
                description="The terms and conditions for using our website and services."
            />
            <main className="pt-32 pb-24 min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                        <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
                            <p>Last Updated: December 31, 2025</p>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                                <p>By accessing and using this website (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                                <p>HudREI provides real estate investment services, including but not limited to, purchasing residential properties for cash. Information provided on the Site is for informational purposes only.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accuracy of Information</h2>
                                <p>While we strive to provide accurate information, we do not warrant that property valuations or offers provided through the Site are final or binding until a formal contract is signed.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                                <p>Users agree to provide accurate and truthful information when submitting property details or contact requests. Fraudulent behavior will result in immediate termination of access to our services.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                                <p>In no event shall HudREI or its partners be liable for any damages arising out of the use or inability to use the materials on the Site.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
                                <p>These terms are governed by and construed in accordance with the laws of the State of Indiana.</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default TermsOfService;

import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy | HudREI"
                description="Our commitment to your privacy and data protection."
            />
            <main className="pt-32 pb-24 min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-black/10"
                    >
                        <h1 className="text-4xl font-bold text-brand-black mb-8">Privacy Policy</h1>
                        <div className="prose prose-slate max-w-none text-brand-black/80 space-y-6">
                            <p>Last Updated: December 31, 2025</p>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-black mb-4">1. Introduction</h2>
                                <p>Welcome to HudREI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-black mb-4">2. The Data We Collect</h2>
                                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Identity Data</strong> includes first name, last name.</li>
                                    <li><strong>Contact Data</strong> includes email address, telephone numbers, and property addresses.</li>
                                    <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, and platform used to access this website.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-black mb-4">3. How We Use Your Data</h2>
                                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to contact you regarding a property offer you requested, or to provide services you have engaged us for.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-black mb-4">4. Data Security</h2>
                                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-black mb-4">5. Contact Us</h2>
                                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at office@hudrei.com.</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicy;




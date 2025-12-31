import { Star, User, Quote, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import QuestionsSection from "@/components/QuestionsSection";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
    {
        name: "Greg M.",
        location: "Google Review",
        text: "I'm compelled to pass on our great experience with HudREI. The whole team at Hudrei was understanding and patient while we worked through a challenging family period. The professionalism was top notch.",
        stars: 5,
        tag: "Professionalism"
    },
    {
        name: "Badr Almalahi",
        location: "Google Review",
        text: "HudREI is an incredibly well-organized, results-driven real estate team. They are easy to work with, professional at every step, and communicate clearly throughout the process. Most importantly, they make sure every transaction is handled with integrity.",
        stars: 5,
        tag: "Results-Driven"
    },
    {
        name: "Gloria He",
        location: "Google Review",
        text: "HudREI made selling my home incredibly smooth. They handled every obstacle with professionalism and clear communication, always staying one step ahead. Their team was proactive, knowledgeable, and truly went above and beyond to make sure the sale closed on time.",
        stars: 5,
        tag: "Smooth Experience"
    },
    {
        name: "Holly Dooley",
        location: "Google Review",
        text: "We had an excellent experience with HUDREI. Communication was excellent. They met our expectations and actually made moving and selling our home after 30 years of living in a better experience than I could have imagined.",
        stars: 5,
        tag: "Exceptional Service"
    },
    {
        name: "David",
        location: "Google Review",
        text: "My experience with HudREI was a positive one for me. I enjoyed talking with the staff members that handled my transaction. We agreed on a fair price and did the signing of the Purchase agreement electronically. We closed on time without any issues.",
        stars: 5,
        tag: "Positive Experience"
    },
    {
        name: "Darien Sharpe",
        location: "Google Review",
        text: "HudREI truly redefines what it means to work with a real estate team. Their professionalism, market knowledge, and attention to detail made the entire process smooth and stress-free. They go above and beyond to deliver results.",
        stars: 5,
        tag: "Market Knowledge"
    },
    {
        name: "Edward Viet",
        location: "Google Review",
        text: "Everyone at HudREI was incredibly kind and supportive throughout the process of selling my dad’s home after he passed. They were professional, compassionate, and always willing to answer my questions.",
        stars: 5,
        tag: "Supportive Team"
    },
    {
        name: "Lee Contreras",
        location: "Google Review",
        text: "Sam, Owale, Summer, everyone was very professional and worked together to get to the end. This team is terrific and I want to do another deal with these guys right away.",
        stars: 5,
        tag: "Teamwork"
    },
    {
        name: "David Beshara",
        location: "Google Review",
        text: "Had the pleasure to work with this company. Very professional, responsive, and follow through with their words. Highly recommend 👌👌",
        stars: 5,
        tag: "Professional"
    },
    {
        name: "BVS Admin",
        location: "Google Review",
        text: "The Folks at HudREI really helped me in my time of need. They were very understanding, attentive and walked me through every step of the process A-Z to gave me clarity on who I am working with and made the entire process hassle free.",
        stars: 5,
        tag: "Hassle-Free"
    },
    {
        name: "Mike A.",
        location: "Google Review",
        text: "Great overall experience and the process was fast and easy. Would definitely recommend them if you don't want to deal with realtors.",
        stars: 5,
        tag: "Fast & Easy"
    },
    {
        name: "William Bradshaw Jr.",
        location: "Google Review",
        text: "Great buyers!!!!! They did everything they said they was going to do. And closed in timely manner! Wally and Jasmine, thank you!",
        stars: 5,
        tag: "Great Buyers"
    },
    {
        name: "Andrew Schober",
        location: "Google Review",
        text: "We sold and closed super fast and easy. Highly recommend their services to anyone looking to sell quickly.",
        stars: 5,
        tag: "Super Fast"
    },
    {
        name: "Dwayne Smith",
        location: "Google Review",
        text: "Been with these guys for sometime now and it's an amazing place to work with. They are consistently professional and reliable.",
        stars: 5,
        tag: "Reliable"
    },
    {
        name: "Ann Brown",
        location: "Google Review",
        text: "Great experience! Super friendly and helpful team totally recommend them to anyone needing a real estate solution.",
        stars: 5,
        tag: "Super Friendly"
    },
    {
        name: "Carolyn Simmons",
        location: "Google Review",
        text: "The team is a pleasure to deal with. They kept me informed and made sure I was comfortable throughout the transaction.",
        stars: 5,
        tag: "Pleasure to Deal With"
    },
    {
        name: "Susan Cortner",
        location: "Google Review",
        text: "They are easy to work with and conscientious of my time as well as the time of their clients. My invoices are paid promptly and everyone I speak with is kind and courteous.",
        stars: 5,
        tag: "Courteous"
    },
    {
        name: "Alphonso Wilhite",
        location: "Google Review",
        text: "We are very pleased with the experience we shared with the team. Both demonstrated a high level of professionalism and teamwork throughout the sale of our property. They communicated clearly and kept us informed.",
        stars: 5,
        tag: "High Level Professionalism"
    }
];

const Testimonials = () => {
    return (
        <>
            <SEO
                title="Reviews & Testimonials | What Indiana Homeowners Say | HudREI"
                description="Read real reviews from Indiana homeowners who sold their houses fast to HudREI. See how we help with foreclosure, inherited property, and more."
                canonical="https://hudrei.com/testimonials"
            />
            <Header />
            <main className="min-h-screen bg-gray-50 pt-32">
                {/* Hero section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
                            <Star className="w-4 h-4 fill-accent" />
                            <span>Rated 5/5 on Google Reviews</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            What Our <span className="text-accent">Clients Say</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                            We're proud to have a 5-star rating on Google. Here's what Indiana homeowners have to say about their experience working with HudREI to sell their homes fast for cash.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        {testimonial.tag}
                                    </span>
                                </div>

                                <div className="relative mb-6">
                                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/10" />
                                    <p className="text-gray-700 leading-relaxed relative z-10 italic">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <User className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conversion Section */}
                <section className="container mx-auto px-4 mt-24 mb-16">
                    <div className="bg-[#062f33] rounded-[2rem] p-10 md:p-16 text-white relative overflow-hidden text-center border border-white/5" data-aos="zoom-in">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to be our next success story?</h2>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                                Join hundreds of satisfied sellers who chose the simple way to sell their house in Indiana. No fees, no repairs, just results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="rounded-xl px-10 py-8 text-xl font-bold glow-button">
                                    <Link to="/contact">Get My Cash Offer Now <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                </Button>
                                <a href="tel:3177951990" className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all font-semibold">
                                    <MessageSquare className="w-5 h-5" />
                                    Talk to the Team
                                </a>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span>No Fees</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span>No Repairs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span>Fast Closing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <QuestionsSection />
            </main>

        </>
    );
};

export default Testimonials;

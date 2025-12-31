import { Helmet } from "react-helmet";
import { Phone, Mail, CheckCircle2, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionsSection from "@/components/QuestionsSection";
import hudReiLogo from "@/assets/hudrei-logo.png";
import contactbg from "@/assets/bg-contact.webp";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "@/components/FormField";

const contactSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email address is required"),
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    timeline: z.string().min(1, "Please select a timeline"),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must agree to be contacted",
    }),
});

type ContactFormData = z.infer<typeof contactSchema>;


const Contact = () => {
    const { toast } = useToast();
    const location = useLocation();
    const incoming = location.state as any;
    const formRef = useRef<HTMLDivElement | null>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: incoming?.fullName || "",
            phone: incoming?.phone || "",
            email: incoming?.email || "",
            streetAddress: incoming?.streetAddress || "",
            city: incoming?.city || "",
            state: incoming?.state || "",
            timeline: incoming?.timeline || "",
            consent: false,
        },
    });

    const streetAddress = watch("streetAddress");
    const [addressQuery, setAddressQuery] = useState(streetAddress || "");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);

    const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/EqS0XR2ZyBqz2ifHkESj/webhook-trigger/88f134a6-7042-414c-aa49-0e50824487c4";

    useEffect(() => {
        if (incoming && formRef.current) {
            formRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [incoming]);

    // Update query when internal state changes (e.g. from location)
    useEffect(() => {
        if (streetAddress && streetAddress !== addressQuery) {
            setAddressQuery(streetAddress);
        }
    }, [streetAddress]);

    const onSubmit = async (data: ContactFormData) => {
        try {
            await fetch(GHL_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    source: "HudREI Website",
                }),
            });

            toast({
                title: "Request Received!",
                description: "We'll contact you within 24 hours with your cash offer.",
            });

            reset();
            setAddressQuery("");
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again or call us directly.",
                variant: "destructive",
            });
        }
    };

    const steps = [
        {
            number: "1",
            text: "Tell us about your property. Call us at (317) 795-1990 or fill out our short form.",
        },
        {
            number: "2",
            text: "We'll connect with you fast. If your home fits our buying criteria, we'll set a quick appointment to learn your goals and explain how selling to us works.",
        },
        {
            number: "3",
            text: "Get a fair written offer. We'll present a straightforward, no-obligation cash offer.",
        },
        {
            number: "4",
            text: "Close on your timeline. We work with a local, reputable title company and put cash in your hands in as little as 2 weeks sometimes even sooner.",
        },
    ];

    const promises = [
        "As-Is Purchase – No repairs, cleaning, or showings required",
        "Fast Offers – Usually within 24 hour",
        "Flexible Closings – You choose the date that works best for you",
        "No Hidden Costs – We cover the closing fee",
    ];


    // 🔗 Get address from Hero
    useEffect(() => {
        if (location.state?.streetAddress) {
            setValue("streetAddress", location.state.streetAddress, { shouldValidate: true });
            setAddressQuery(location.state.streetAddress);

            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    }, [location.state, setValue]);

    const [isComparisonOpen, setIsComparisonOpen] = useState(false);

    const comparisonData = [
        { label: "Commissions / Fees:", agent: "6% on average is paid by you, the seller", hudrei: "NONE" },
        { label: "Who Pays Closing Costs?:", agent: "2% on average is paid by you, the seller", hudrei: "NONE – We pay all costs" },
        { label: "Inspection & Financing Contingency*:", agent: "Yes, sales can fall through", hudrei: "NONE" },
        { label: "Appraisal Needed:", agent: "Yes, the sale is often subject to appraisal", hudrei: "NONE – We make cash offers" },
        { label: "Average Days Until Sold:", agent: "+/- 91 Days", hudrei: "IMMEDIATE CASH OFFER" },
        { label: "Number of Showings:", agent: "It Depends", hudrei: "1 (Just Us)" },
        { label: "Closing Date:", agent: "30-60 +/- days after accepting buyers offer", hudrei: "The Date Of YOUR CHOICE" },
        { label: "Who Pays For Repairs?:", agent: "Negotiated During Inspection Period", hudrei: "NONE – We pay for all repairs" },
    ];



    return (
        <>
            <Helmet>
                <title>Contact HudREI | Get Your Cash Offer Today - We Buy Houses Indiana</title>
                <meta
                    name="description"
                    content="Ready to sell your house fast in Indiana? Contact HudREI for a fair cash offer within 24 hours. Call (317) 795-1990 or fill out our form."
                />
                <link rel="canonical" href="https://hudrei.com/contact" />
            </Helmet>
            <Header />
            <div className="min-h-screen bg-white">


                {/* Hero Section */}
                <section className="relative min-h-[500px] py-20 flex items-center overflow-hidden">
                    <div className=" inset-0  bg-cover bg-center" >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#012b3a]" />
                    </div>


                    <div className="container mx-auto px-4 py-20 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-white " data-aos="fade-right">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Contact HudREI: <span className="text-accent">Get Your</span> Cash Offer{" "}
                                    <span className="text-accent">Today</span>
                                </h1>
                                <p className="text-lg text-white/90 mb-4">
                                    You deserve peace of mind when making a big decision.
                                </p>
                                <p className="text-white/80 mb-4">
                                    Our job is to listen first, then guide you through every option so you can move
                                    forward with clarity and confidence.
                                </p>
                                <p className="text-white/80 mb-4">
                                    Fill out the form or give us a call. We're ready to answer your questions and help you explore your selling options in Indiana.
                                </p>

                            </div>

                            {/* Right - Direct Contact Card */}
                            <div
                                className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 animate-fade-in"
                                data-aos="fade-left"
                            >
                                <div className="text-center mb-6">
                                    <p className="text-white text-lg font-medium mb-2">Direct contact</p>
                                    <div className="">
                                        <img src={hudReiLogo} alt="HudREI" className=" w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center mb-4" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <a
                                        href="tel:3177951990"
                                        className="flex items-center justify-center gap-3 bg-primary/90 hover:bg-primary text-white py-3 px-6 rounded-lg transition-all"
                                    >
                                        <Phone className="w-5 h-5" />
                                        (317) 795-1990
                                    </a>
                                    <a
                                        href="mailto:office@hudrei.com"
                                        className="flex items-center justify-center gap-3 bg-gray-800/80 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-all"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Email Us Directly
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process & Form Section */}
                <section className="py-20 bg-white" >
                    <div className="container mx-auto px-4" >
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Left - Process */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" data-aos="fade-down">
                                    What's our process look like?
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" data-aos="zoom-in">
                                        Selling Your Indiana Home Made Simple
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-aos="zoom-in">
                                        Tired of the stress, repairs, or endless waiting that come with selling a
                                        house? At HudREI, our mission is to Reimagine how smart sellers today sell
                                        their home. We buy properties exactly as they are no matter the condition, no
                                        matter the location.
                                    </p>
                                    <p className="text-gray-600 mb-6" data-aos="zoom-in">
                                        You can trust us to handle everything quickly, respectfully, and without the
                                        usual headaches. Say goodbye to the burden of selling and hello to a simple,
                                        hassle-free experience.
                                    </p>
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-6" data-aos="fade-up">How It Works</h4>

                                <div className="space-y-6 mb-10" >
                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 items-start "
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                            data-aos="fade-up"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
                                                {step.number}
                                            </div>
                                            <p className="text-gray-700 font-medium pt-2">{step.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 pt-8 mb-8">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4" data-aos="fade-right">Our Promise</h4>
                                    <div className="space-y-3">
                                        {promises.map((promise, index) => (
                                            <div key={index} className="flex items-start gap-3" data-aos="fade-down">
                                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" data-aos="fade-left" />
                                                <span className="text-gray-700">{promise}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 italic mb-6">
                                    "Sometimes we can even have a check in your hand the very same day."
                                </p>

                                <div className="border-t border-gray-200 pt-6">
                                    <p className="text-gray-700">
                                        Take the first step now. Call{" "}
                                        <a href="tel:3177951990" className="text-accent font-semibold hover:underline">
                                            (317) 795-1990
                                        </a>{" "}
                                        or fill out the form to get your cash offer today.
                                    </p>
                                </div>
                            </div>

                            {/* Right - Comparison Card + Form */}
                            <div className="">
                                {/* Comparison Card */}
                                <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-8 text-white" data-aos="fade-right">
                                    <h3 className="text-2xl font-bold mb-4">Listing vs. Selling To Us</h3>
                                    <p className="text-white/90 mb-6">
                                        Which route is quicker?
                                        <br />
                                        Puts more cash in your pocket?
                                        <br />
                                        Has less hassle?
                                    </p>
                                    <Button
                                        variant="secondary"
                                        className="bg-white text-primary hover:bg-gray-100 font-semibold"
                                        onClick={() => setIsComparisonOpen(true)}
                                    >
                                        See The Difference here
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>


                                {/* Comparison Modal */}
                                <AnimatePresence>
                                    {isComparisonOpen && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 space-y-0  backdrop-blur-sm  z-50 flex items-center justify-center p-4"
                                            onClick={() => setIsComparisonOpen(false)}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                                className="bg-white rounded-2xl shadow-2xl  w-full max-h-[90vh] overflow-auto"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {/* Modal Header */}
                                                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                                    <h3 className="text-2xl font-bold text-gray-900">
                                                        Listing vs. Selling To HudREI
                                                    </h3>
                                                    <button
                                                        onClick={() => setIsComparisonOpen(false)}
                                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                                    >
                                                        <X className="w-6 h-6 text-gray-500" />
                                                    </button>
                                                </div>

                                                {/* Comparison Table */}
                                                <div className="p-6">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full">
                                                            <thead>
                                                                <tr className="border-b-2 border-gray-200">
                                                                    <th className="text-left py-4 px-4 font-bold text-gray-900"></th>
                                                                    <th className="text-left py-4 px-4 font-bold text-gray-700">
                                                                        Selling w/ An Agent
                                                                    </th>
                                                                    <th className="text-left py-4 px-4">
                                                                        <div className="flex flex-col items-start">
                                                                            <span className="text-sm text-gray-500 font-medium">SOLD To</span>
                                                                            <span className="text-2xl font-bold text-primary">HudREI</span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {comparisonData.map((row, index) => (
                                                                    <motion.tr
                                                                        key={index}
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: index * 0.05 }}
                                                                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                                                    >
                                                                        <td className="py-4 px-4 font-semibold text-gray-900">
                                                                            {row.label}
                                                                        </td>
                                                                        <td className="py-4 px-4 text-gray-600 italic">
                                                                            {row.agent}
                                                                        </td>
                                                                        <td className="py-4 px-4 text-primary font-medium">
                                                                            {row.hudrei}
                                                                        </td>
                                                                    </motion.tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    {/* CTA */}
                                                    <div className="mt-8 text-center">
                                                        <Button
                                                            onClick={() => setIsComparisonOpen(false)}
                                                            className="rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                                        >
                                                            Get My Cash Offer Now!
                                                        </Button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Contact Form */}
                                <div
                                    ref={formRef}
                                    className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mt-6 scroll-mt-12"
                                    data-aos="zoom-in"
                                >

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField label="Full Name" error={errors.fullName?.message} required>
                                            <Input
                                                {...register("fullName")}
                                                placeholder="Full Name"
                                                className="border-accent/30 focus:border-accent text-black bg-white"
                                            />
                                        </FormField>

                                        <FormField label="Phone" error={errors.phone?.message} required>
                                            <Input
                                                {...register("phone")}
                                                type="tel"
                                                placeholder="Phone"
                                                className="border-accent/30 focus:border-accent text-black bg-white"
                                            />
                                        </FormField>

                                        <FormField label="Email" error={errors.email?.message} required>
                                            <Input
                                                {...register("email")}
                                                type="email"
                                                placeholder="Email"
                                                className="border-accent/30 focus:border-accent text-black bg-white"
                                            />
                                        </FormField>

                                        <FormField label="Street Address" error={errors.streetAddress?.message} required>
                                            <div className="relative">
                                                <Input
                                                    {...register("streetAddress")}
                                                    ref={(e) => {
                                                        register("streetAddress").ref(e);
                                                        // @ts-ignore
                                                        addressInputRef.current = e;
                                                    }}
                                                    onChange={(e) => {
                                                        register("streetAddress").onChange(e);
                                                        setAddressQuery(e.target.value);
                                                    }}
                                                    placeholder="Street Address"
                                                    className="text-black bg-white border-accent/30 focus:border-accent"
                                                />
                                                <AddressAutocompletePortal
                                                    anchorRef={addressInputRef}
                                                    results={results}
                                                    onSelect={(val) => {
                                                        setValue("streetAddress", val, { shouldValidate: true });
                                                        setAddressQuery(val);
                                                        clearResults();
                                                    }}
                                                    onClose={clearResults}
                                                />
                                            </div>
                                        </FormField>

                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField label="City" error={errors.city?.message} required>
                                                <Input
                                                    {...register("city")}
                                                    placeholder="City"
                                                    className="border-accent/30 focus:border-accent text-black bg-white"
                                                />
                                            </FormField>
                                            <FormField label="State" error={errors.state?.message} required>
                                                <Input
                                                    {...register("state")}
                                                    placeholder="State"
                                                    className="border-accent/30 focus:border-accent text-black bg-white"
                                                />
                                            </FormField>
                                        </div>

                                        <FormField label="How Soon Do You Want To Sell?" error={errors.timeline?.message} required>
                                            <Controller
                                                name="timeline"
                                                control={control}
                                                render={({ field }) => (
                                                    <Select
                                                        value={field.value}
                                                        onValueChange={field.onChange}
                                                    >
                                                        <SelectTrigger className="w-full h-10 bg-white border-accent/30 focus:border-accent text-black">
                                                            <SelectValue placeholder="Select timeline" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="asap">As soon as possible</SelectItem>
                                                            <SelectItem value="30days">Within 30 days</SelectItem>
                                                            <SelectItem value="60days">Within 60-90 days</SelectItem>
                                                            <SelectItem value="JustExploring">Just Exploring</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </FormField>

                                        <div className="space-y-1">
                                            <div className="flex items-start gap-2 text-sm text-gray-500">
                                                <input
                                                    {...register("consent")}
                                                    type="checkbox"
                                                    className="mt-1 accent-accent"
                                                />
                                                <span>
                                                    Free offer, no pressure. Your info stays private. Submit to be contacted
                                                    opt out anytime.
                                                </span>
                                            </div>
                                            {errors.consent && (
                                                <p className="text-accent text-xs font-medium">{errors.consent.message}</p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full rounded-xl py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                        >
                                            {isSubmitting ? "Submitting..." : "Get My Offer Now!"}
                                        </Button>

                                        <div className="text-center text-sm text-gray-500">
                                            <a href="#" className="hover:underline">
                                                Privacy Policy
                                            </a>{" "}
                                            |{" "}
                                            <a href="#" className="hover:underline">
                                                Terms of Service
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <QuestionsSection />

            </div>

        </>
    );
};

export default Contact;

import { useState, useRef, useEffect } from "react";
import { Landmark, Zap, ShieldCheck, Check, Wallet, ChevronRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import QuestionsSection from "@/components/QuestionsSection";
import { motion, AnimatePresence } from "framer-motion";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "@/components/FormField";

const wholesalerSchema = z.object({
    formType: z.enum(["submit-deal", "join-list"]),
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email address is required"),
    // Deal specific
    address: z.string().optional(),
    price: z.string().optional(),
    arv: z.string().optional(),
    link: z.string().optional(),
    // List specific
    company: z.string().optional(),
    markets: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.formType === "submit-deal") {
        if (!data.address) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Property address is required", path: ["address"] });
        if (!data.price) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Asking price is required", path: ["price"] });
        if (!data.arv) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Estimated ARV is required", path: ["arv"] });
        if (!data.link) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Link to photos is required", path: ["link"] });
    } else {
        if (!data.company) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Company name is required", path: ["company"] });
        if (!data.markets) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Markets served is required", path: ["markets"] });
    }
});

type WholesalerFormData = z.infer<typeof wholesalerSchema>;

const Wholesalers = () => {
    const [submitted, setSubmitted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<WholesalerFormData>({
        resolver: zodResolver(wholesalerSchema),
        defaultValues: {
            formType: "submit-deal",
            name: "",
            phone: "",
            email: "",
            address: "",
            price: "",
            arv: "",
            link: "",
            company: "",
            markets: "",
        },
    });

    const formType = watch("formType");
    const addressValue = watch("address");
    const [addressQuery, setAddressQuery] = useState("");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);

    // Sync address query with form value
    useEffect(() => {
        if (addressValue !== undefined && addressValue !== addressQuery) {
            setAddressQuery(addressValue);
        }
    }, [addressValue]);

    const onSubmit = async (data: WholesalerFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Wholesaler Partner Data:", data);
        setSubmitted(true);
        reset({
            formType: data.formType,
            name: "",
            phone: "",
            email: "",
            address: "",
            price: "",
            arv: "",
            link: "",
            company: "",
            markets: "",
        });
        setAddressQuery("");
    };

    return (
        <>
            <SEO
                title="Wholesaler Partnerships | Sell Your Deals to HudREI"
                description="Need a reliable buyer for your wholesale deals? HudREI buys fast with cash. No daisy chains, just solid closings."
                canonical="https://hudrei.com/partners/wholesalers"
            />

            <main className="min-h-screen bg-white font-sans">
                {/* Split Hero */}
                <section className="relative pt-24 lg:pt-0 min-h-[90vh] flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062f33]/5 text-[#062f33] font-semibold text-sm mb-6 animate-fade-in" data-aos="fade-down">
                                <Landmark className="w-4 h-4" />
                                <span>Verified Cash Buyer // IN</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up">
                                Your Reliable <span className="text-[#062f33]">End Buyer</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Tired of Daisy chains and buyers who back out? HudREI is a legitimate cash buyer with proof of funds.
                                We look for win-win relationships with local wholesalers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Button asChild size="lg" className="rounded-xl px-8 py-7 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    <a href="#partner-form">Send Us A Deal</a>
                                </Button>
                                <Button asChild size="lg" className="rounded-xl px-8 py-7 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all bg-[#00767e] hover:bg-[#0b434a]">
                                    <a href="#criteria">View Buy Box</a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 bg-[#062f33] relative overflow-hidden order-1 lg:order-2 min-h-[40vh] lg:min-h-auto" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#062f33] to-[#041f22] opacity-90" />

                        <div className="relative h-full flex flex-col items-center justify-center text-white p-12 text-center">
                            <Wallet className="w-24 h-24 text-white/20 mb-8" data-aos="zoom-in" data-aos-delay="300" />
                            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="400">Funding & Closing Power</h2>
                            <p className="text-gray-300 max-w-md text-lg" data-aos="fade-up" data-aos-delay="500">
                                We protect your assignment fee. We buy in volume, fast and reliable.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pain vs Gain Grid */}
                <section id="criteria" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Wholesalers Choose Us</h2>
                            <p className="text-gray-600 text-lg">We solve the cash-flow and reliability problems.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">24h Decisions</h3>
                                <p className="text-gray-600">
                                    We analyze deals fast. You'll get a solid yes or no within 24 hours. No stringing along.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Proof Of Funds</h3>
                                <p className="text-gray-600">
                                    Verifiable cash. We close on your timeline, protecting your assignment fee and your reputation.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <Landmark className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Repeat Buyer</h3>
                                <p className="text-gray-600">
                                    We buy in volume. Bring us a good deal, and we'll be your go-to buyer for the long haul.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Form Section */}
                <section id="partner-form" className="py-24 bg-[#062f33] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                            {/* Form Context */}
                            <div className="md:w-1/2 pt-10" data-aos="fade-up">
                                <div className="inline-block p-3 rounded-2xl bg-white/10 mb-6">
                                    <Building className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold mb-6">Let's Do Business</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Choose how you'd like to partner with us below. Whether you have a deal now or want to join our buyers list.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                                        <p>Select "Submit A Deal" or "Join Buyers List"</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                                        <p>Enter details</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                                        <p>We review and respond ASAP</p>
                                    </div>
                                </div>
                            </div>

                            {/* The Form */}
                            <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 text-gray-900" data-aos="zoom-in-up">
                                {submitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <Check className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Information Received!</h3>
                                        <p className="text-gray-600 mb-8">We've got your info. Expect to hear from us shortly.</p>
                                        <Button onClick={() => setSubmitted(false)} variant="outline">Reset Form</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        {/* Toggle Type */}
                                        <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl mb-6 relative">
                                            <motion.div
                                                className="absolute top-1 bottom-1 bg-white shadow-sm rounded-lg"
                                                layoutId="form-bg"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                style={{
                                                    width: "calc(50% - 4px)",
                                                    left: formType === "submit-deal" ? "4px" : "calc(50%)"
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setValue("formType", "submit-deal");
                                                    clearResults();
                                                }}
                                                className={`relative z-10 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${formType === 'submit-deal' ? 'text-[#062f33]' : 'text-gray-500 hover:text-gray-700'}`}
                                            >
                                                Submit A Deal
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setValue("formType", "join-list");
                                                    clearResults();
                                                }}
                                                className={`relative z-10 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${formType === 'join-list' ? 'text-[#062f33]' : 'text-gray-500 hover:text-gray-700'}`}
                                            >
                                                Join Buyers List
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField label="Contact Name" error={errors.name?.message} required>
                                                <Input {...register("name")} placeholder="Name" className="bg-white border-accent/30 focus:border-accent text-black" />
                                            </FormField>
                                            <FormField label="Phone" error={errors.phone?.message} required>
                                                <Input {...register("phone")} placeholder="Phone" type="tel" className="bg-white border-accent/30 focus:border-accent text-black" />
                                            </FormField>
                                        </div>

                                        <FormField label="Email Address" error={errors.email?.message} required>
                                            <Input {...register("email")} placeholder="Email" type="email" className="bg-white border-accent/30 focus:border-accent text-black" />
                                        </FormField>

                                        <div className="overflow-hidden min-h-[220px]">
                                            <AnimatePresence mode="wait">
                                                {formType === "submit-deal" ? (
                                                    <motion.div
                                                        key="submit-deal"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 20 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-6"
                                                    >
                                                        <FormField label="Property Address" error={errors.address?.message} required>
                                                            <div className="relative">
                                                                <Input
                                                                    {...register("address")}
                                                                    ref={(e) => {
                                                                        register("address").ref(e);
                                                                        // @ts-ignore
                                                                        inputRef.current = e;
                                                                    }}
                                                                    onChange={(e) => {
                                                                        register("address").onChange(e);
                                                                        setAddressQuery(e.target.value);
                                                                    }}
                                                                    placeholder="123 Main St, Indianapolis"
                                                                    className="bg-white border-accent/30 focus:border-accent text-black"
                                                                />
                                                                <AddressAutocompletePortal
                                                                    anchorRef={inputRef}
                                                                    results={results}
                                                                    onSelect={(val) => {
                                                                        setValue("address", val, { shouldValidate: true });
                                                                        setAddressQuery(val);
                                                                        clearResults();
                                                                    }}
                                                                    onClose={clearResults}
                                                                />
                                                            </div>
                                                        </FormField>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <FormField label="Asking Price" error={errors.price?.message} required>
                                                                <Input {...register("price")} placeholder="$" className="bg-white border-accent/30 focus:border-accent text-black" />
                                                            </FormField>
                                                            <FormField label="Estimated ARV" error={errors.arv?.message} required>
                                                                <Input {...register("arv")} placeholder="$" className="bg-white border-accent/30 focus:border-accent text-black" />
                                                            </FormField>
                                                        </div>
                                                        <FormField label="Link to Photos (Dropbox/Drive)" error={errors.link?.message} required>
                                                            <Input {...register("link")} placeholder="https://..." className="bg-white border-accent/30 focus:border-accent text-black" />
                                                        </FormField>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="join-list"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-6"
                                                    >
                                                        <FormField label="Company Name" error={errors.company?.message} required>
                                                            <Input {...register("company")} placeholder="Your Wholesaling Co." className="bg-white border-accent/30 focus:border-accent text-black" />
                                                        </FormField>
                                                        <FormField label="Markets You Serve" error={errors.markets?.message} required>
                                                            <Input {...register("markets")} placeholder="e.g. Marion County, Fishers, etc." className="bg-white border-accent/30 focus:border-accent text-black" />
                                                        </FormField>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                            {isSubmitting ? "Processing..." : (
                                                <>
                                                    {formType === "submit-deal" ? "Send Deal Now" : "Join Network"} <ChevronRight className="w-4 h-4 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <QuestionsSection />
            </main>
        </>
    );
};

export default Wholesalers;

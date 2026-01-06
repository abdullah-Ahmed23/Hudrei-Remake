import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Check, Loader2, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import hudReiLogo from "@/assets/2.png";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// --- Schema Definition ---
const contactSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email address is required"),
    streetAddress: z.string().min(1, "Street Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    timeline: z.string().min(1, "Timeline is required"),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must agree to be contacted",
    }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Steps Configuration
const STEPS = [
    { id: "intro", title: "Welcome", field: "fullName" }, // Ask Name
    { id: "phone", title: "Contact Info", field: "phone" }, // Ask Phone
    { id: "email", title: "Email", field: "email" }, // Ask Email
    { id: "address", title: "Property", field: ["streetAddress", "city", "state"] }, // Ask Address elements
    { id: "timeline", title: "Timeline", field: "timeline" }, // Ask Timeline
    { id: "submit", title: "Review", field: "consent" }, // Review & Consent
];

const Contact = () => {
    const { toast } = useToast();
    const location = useLocation();

    // Setup Form
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            streetAddress: "",
            city: "",
            state: "IN", // Default state
            timeline: "",
            consent: false,
        },
    });

    const streetAddress = watch("streetAddress");
    const [currentStep, setCurrentStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    // Address Autocomplete Logic
    const [addressQuery, setAddressQuery] = useState("");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);
    const addressInputRef = useRef<HTMLInputElement>(null);

    // Sync address query with form
    useEffect(() => {
        if (streetAddress !== addressQuery) {
            setAddressQuery(streetAddress || "");
        }
    }, [streetAddress]);

    // 🔗 Auto-fill Logic from Home Page
    useEffect(() => {
        if (location.state?.streetAddress) {
            setValue("streetAddress", location.state.streetAddress);
            setAddressQuery(location.state.streetAddress);
            // Optional: You could auto-advance, but user might want to confirm details.
            // Let's just create a nice starting state.
        }
    }, [location.state, setValue]);

    // Navigation Handlers
    const nextStep = async () => {
        const fieldsToValidate = STEPS[currentStep].field;

        let isValid = false;
        if (Array.isArray(fieldsToValidate)) {
            isValid = await trigger(fieldsToValidate as any);
        } else {
            isValid = await trigger(fieldsToValidate as any);
        }

        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    // Submission Handler
    const onSubmit = async (data: ContactFormData) => {
        try {
            const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`;
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, source: "HudREI Website - Wizard" }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
            } else {
                throw new Error(result.error || "Submission failed");
            }
        } catch (error) {
            console.error(error);
            toast({
                title: "Something went wrong",
                description: "Please try again or call us directly.",
                variant: "destructive",
            });
        }
    };

    // Enter key support
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && currentStep < STEPS.length - 1) {
            e.preventDefault();
            nextStep();
        }
    };

    // --- Render Wizard Steps ---
    const renderStepContent = () => {
        switch (currentStep) {
            case 0: // Name
                return (
                    <div className="space-y-10 py-4">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#01313c]">Let's get started.</h2>
                            <p className="text-lg md:text-xl text-gray-400 font-medium">What is your full name?</p>
                        </div>
                        <div className="max-w-xl mx-auto">
                            <Input
                                {...register("fullName")}
                                autoFocus
                                placeholder="Type your full name..."
                                className="h-16 text-xl px-6 rounded-2xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all"
                            />
                            {errors.fullName && <p className="text-red-500 mt-3 text-center font-medium">{errors.fullName.message}</p>}
                        </div>
                    </div>
                );
            case 1: // Phone
                return (
                    <div className="space-y-10 py-4">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#01313c]">Nice to meet you!</h2>
                            <p className="text-lg md:text-xl text-gray-400 font-medium">What's the best number to reach you?</p>
                        </div>
                        <div className="max-w-xl mx-auto">
                            <Input
                                {...register("phone")}
                                autoFocus
                                type="tel"
                                placeholder="(555) 555-5555"
                                className="h-16 text-xl px-6 rounded-2xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all"
                            />
                            {errors.phone && <p className="text-red-500 mt-3 text-center font-medium">{errors.phone.message}</p>}
                        </div>
                    </div>
                );
            case 2: // Email
                return (
                    <div className="space-y-10 py-4">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#01313c]">Almost there.</h2>
                            <p className="text-lg md:text-xl text-gray-400 font-medium">What is your email address?</p>
                        </div>
                        <div className="max-w-xl mx-auto">
                            <Input
                                {...register("email")}
                                autoFocus
                                type="email"
                                placeholder="name@example.com"
                                className="h-16 text-xl px-6 rounded-2xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all"
                            />
                            {errors.email && <p className="text-red-500 mt-3 text-center font-medium">{errors.email.message}</p>}
                        </div>
                    </div>
                );
            case 3: // Address
                return (
                    <div className="space-y-12 py-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#01313c] tracking-tight">Property Details</h2>
                            <p className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight">Where is the house located?</p>
                        </div>
                        <div className="max-w-lg mx-auto space-y-4">
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
                                    className="h-16 text-lg px-6 rounded-xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all"
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
                                {errors.streetAddress && <p className="text-red-500 mt-1">{errors.streetAddress.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        {...register("city")}
                                        placeholder="City"
                                        className="h-16 text-lg px-6 rounded-xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all"
                                    />
                                    {errors.city && <p className="text-red-500 mt-1">{errors.city.message}</p>}
                                </div>
                                <div>
                                    <Input
                                        {...register("state")}
                                        placeholder="State"
                                        className="h-16 text-lg px-6 rounded-xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all"
                                    />
                                    {errors.state && <p className="text-red-500 mt-1">{errors.state.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 4: // Timeline
                return (
                    <div className="space-y-12 py-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#01313c] tracking-tight">One last thing.</h2>
                            <p className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight">How soon are you looking to sell?</p>
                        </div>
                        <div className="max-w-md mx-auto">
                            <Controller
                                name="timeline"
                                control={control}
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="h-16 text-lg px-6 rounded-2xl border-2 border-[#01313c]/40 focus-visible:ring-0 focus-visible:border-[#01313c] bg-white transition-all">
                                            <SelectValue placeholder="Select your timeline..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem className="text-white" value="asap">As soon as possible (1-2 weeks)</SelectItem>
                                            <SelectItem className="text-white" value="30days">Within 30 days</SelectItem>
                                            <SelectItem className="text-white" value="60days">Within 60-90 days</SelectItem>
                                            <SelectItem className="text-white" value="JustExploring">Just Exploring options</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.timeline && <p className="text-red-500 mt-2 text-center">{errors.timeline.message}</p>}
                        </div>
                    </div>
                );
            case 5: // Submit
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-3">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#01313c]">You're All Set!</h2>
                            <p className="text-lg md:text-xl text-gray-400 font-medium">Ready to get your cash offer?</p>
                        </div>

                        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border-2 border-brand-black/5 shadow-sm">
                            <div className="flex items-start gap-4">
                                <input
                                    {...register("consent")}
                                    type="checkbox"
                                    id="consent-check"
                                    className="mt-1 w-5 h-5 accent-[#01313c]"
                                />
                                <label htmlFor="consent-check" className="text-sm text-brand-black/60 cursor-pointer select-none leading-relaxed">
                                    I agree to be contacted by HudREI via phone, email, or SMS about my property. I can opt out at any time.
                                </label>
                            </div>
                            {errors.consent && <p className="text-red-500 mt-4 text-center font-medium">{errors.consent.message}</p>}

                            <Button
                                onClick={handleSubmit(onSubmit)}
                                disabled={isSubmitting}
                                className="w-full mt-8 rounded-2xl py-7 text-xl font-bold bg-[#01313c] text-white hover:bg-[#01313c]/90 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin w-7 h-7" /> : "Get My Cash Offer Now"}
                            </Button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact HudREI | Get Your Cash Offer Today</title>
                <meta name="description" content="Sell your house fast in Indiana. Get a fair cash offer from HudREI." />
            </Helmet>
            <div className="absolute top-6 left-6 z-50">
                <Link to="/">
                    <img src={hudReiLogo} alt="HudREI" className="h-12 w-auto" />
                </Link>
            </div>

            <div className="min-h-screen relative flex flex-col pt-20 bg-gray-50">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 overflow-hidden text-transparent">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col justify-center py-12">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-4 tracking-tight">
                            Contact HudREI: <br className="hidden md:block" />
                            Get Your <span className="text-accent">Cash Offer Today</span>
                        </h1>
                        <p className="text-brand-black/70 text-lg">It only takes 30 seconds to get started.</p>
                    </div>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto w-full text-center"
                        >
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Check className="w-12 h-12 text-green-600" />
                            </div>
                            <h2 className="text-4xl font-bold text-brand-black mb-4">Request Received!</h2>
                            <p className="text-xl text-brand-black/70 mb-8 leading-relaxed">
                                Thanks {watch("fullName").split(" ")[0]}! We've received your details and are already reviewing your property. A specialist will reach out to you within 24 hours.
                            </p>
                            <Button asChild className="rounded-xl px-8 py-4 text-lg">
                                <Link to="/">Return to Home</Link>
                            </Button>
                        </motion.div>
                    ) : (
                        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden max-w-2xl mx-auto w-full min-h-[500px] flex flex-col">
                            {/* Progress Bar */}
                            <div className="h-2 bg-gray-100 w-full rounded">
                                <div
                                    className="h-full bg-accent transition-all duration-500 ease-out"
                                    style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                                />
                            </div>

                            {/* Wizard Body */}
                            <div className="flex-grow p-8 md:p-12 flex flex-col justify-center" onKeyDown={handleKeyDown}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full"
                                    >
                                        {renderStepContent()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Footer / Navigation */}
                            <div className="p-8 md:p-12 bg-white flex justify-between items-center relative z-20">
                                {currentStep > 0 ? (
                                    <Button
                                        variant="ghost"
                                        onClick={prevStep}
                                        className="text-brand-black/60 hover:text-brand-black hover:bg-transparent px-0 font-bold"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" /> Back
                                    </Button>
                                ) : <div />}

                                {currentStep < STEPS.length - 1 && (
                                    <Button
                                        onClick={nextStep}
                                        className="rounded-xl px-10 py-7 text-lg font-bold bg-[#01313c] text-white hover:bg-[#01313c]/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                                    >
                                        Next Step <ChevronRight className="w-5 h-5" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contact;

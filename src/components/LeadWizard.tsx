import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    id: string;
    title: string;
    description: string;
    component: React.ReactNode;
    isValid?: boolean;
}

interface LeadWizardProps {
    steps: Step[];
    onComplete: () => void;
    isSubmitting?: boolean;
    submitted?: boolean;
    successMessage?: string;
    successTitle?: string;
    onReset?: () => void;
}

const LeadWizard: React.FC<LeadWizardProps> = ({
    steps,
    onComplete,
    isSubmitting = false,
    submitted = false,
    successMessage = "We've received your details and are already reviewing your request.",
    successTitle = "Request Received!",
    onReset
}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            onComplete();
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2.5rem] shadow-2xl p-12 max-w-2xl mx-auto w-full text-center border border-brand-black/5"
            >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-brand-black mb-4">{successTitle}</h2>
                <p className="text-xl text-brand-black/70 mb-8 leading-relaxed">
                    {successMessage}
                </p>
                <Button onClick={onReset} className="rounded-xl px-10 py-5 text-lg font-bold glow-button shadow-lg">
                    Start New Request
                </Button>
            </motion.div>
        );
    }

    const currentStepData = steps[currentStep];

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-brand-black/5 overflow-hidden max-w-2xl mx-auto w-full min-h-[500px] flex flex-col relative">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100 w-full relative z-20">
                <div
                    className="h-full bg-accent transition-all duration-700 ease-out"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
            </div>

            {/* Wizard Body */}
            <div className="flex-grow p-8 md:p-16 flex flex-col justify-center relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full space-y-6"
                    >
                        <div className="text-center space-y-3 mb-8">
                            <h2 className="text-3xl md:text-5xl font-black text-[#01313c] tracking-tight">
                                {currentStepData.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 font-medium">
                                {currentStepData.description}
                            </p>
                        </div>

                        <div className="w-full">
                            {currentStepData.component}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer / Navigation */}
            <div className="p-8 md:p-10 bg-gray-50/50 flex justify-between items-center relative z-20">
                {currentStep > 0 ? (
                    <Button
                        variant="ghost"
                        onClick={prevStep}
                        className="text-brand-black/60 hover:text-brand-black hover:bg-transparent px-0 font-bold"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" /> Back
                    </Button>
                ) : <div />}

                <Button
                    onClick={nextStep}
                    disabled={isSubmitting || (currentStepData.isValid === false)}
                    className={cn(
                        "rounded-xl px-8 py-7 text-lg font-bold transition-all duration-300",
                        "bg-[#01313c] text-white hover:bg-[#01313c]/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                        isSubmitting && "opacity-70 pointer-events-none"
                    )}
                >
                    {isSubmitting ? (
                        <Loader2 className="animate-spin w-6 h-6" />
                    ) : (
                        <>
                            {currentStep === steps.length - 1 ? "Complete" : "Next Step"}
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default LeadWizard;

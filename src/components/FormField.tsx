import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
    label?: string;
    error?: string;
    children: ReactNode;
    className?: string;
    required?: boolean;
}

const FormField = ({ label, error, children, className, required }: FormFieldProps) => {
    return (
        <div className={cn("space-y-2 w-full", className)}>
            {label && (
                <Label className="text-gray-700 font-medium">
                    {label} {required && <span className="text-accent">*</span>}
                </Label>
            )}

            <div className="relative">
                {children}
            </div>

            <AnimatePresence mode="wait">
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-accent text-sm mt-1.5 font-bold"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormField;

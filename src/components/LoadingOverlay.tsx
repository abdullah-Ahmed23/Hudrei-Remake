import { motion } from "framer-motion";
import logo from "@/assets/hudrei-logo.png";

const LoadingOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
            <div className="relative flex items-center justify-center">
                {/* Animated Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute h-40 w-40 rounded-full border-t-4 border-accent border-r-4 border-r-transparent border-b-4 border-b-transparent border-l-4 border-l-transparent"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute h-48 w-48 rounded-full border-b-4 border-accent/20 border-l-4 border-l-transparent border-t-4 border-t-transparent border-r-4 border-r-transparent"
                />

                {/* Logo Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 bg-white p-6 rounded-3xl shadow-2xl shadow-accent/10"
                >
                    <img
                        src={logo}
                        alt="HudREI Logo"
                        className="w-24 h-24 object-contain"
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-col items-center"
            >
                <p className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">
                    HudREI
                </p>
                <div className="mt-4 flex gap-1">
                    <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingOverlay;

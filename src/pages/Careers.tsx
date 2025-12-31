import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PhoneCall,
    Target,
    ClipboardCheck,
    Building2,
    FileCheck,
    Megaphone,
    Search,
    Send,
    ArrowRight,
    CheckCircle2,
    X,
    Upload,
    Mic,
    FileText,
    DollarSign,
    Globe,
    Phone,
    Users,
    Heart,
    Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import QuestionsSection from "@/components/QuestionsSection";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const careers = [
    {
        title: "Cold Caller",
        icon: Phone,
        desc: "Professional outreach to potential sellers. Requires excellent communication and persistence.",
    },
    {
        title: "Acquisitions Property Specialist",
        icon: Briefcase,
        desc: "Analyze properties, negotiate offers with sellers, and secure contracts aligned with company investment goals.",
    },
    {
        title: "Executive Office Assistant",
        icon: Users,
        desc: "Support daily operations, manage schedules, handle communications, and assist leadership with administrative tasks.",
    },
    {
        title: "Property Disposition Specialist",
        icon: Target,
        desc: "Manage the sale of acquired properties, coordinate with buyers, and maximize return on investments.",
    },
    {
        title: "Transaction Co-ordinator",
        icon: Heart,
        desc: "Oversee the closing process from contract to funding. Coordinate with title companies and attorneys.",
    },
    {
        title: "Marketing Developer",
        icon: Briefcase,
        desc: "Execute marketing strategies, manage digital presence, and generate high-quality leads for the acquisitions team.",
    },
];

const crmOptions = [
    "XenCall/ReadyMode",
    "CallTools",
    "Zoho",
    "Monday.Com",
    "Salesforce",
    "Pipedrive",
    "HubSpot",
    "REISift",
    "Podio",
    "Other"
];

const referralSources = [
    "Facebook",
    "LinkedIn",
    "Instagram",
    "YouTube",
    "TikTok",
    "X/Threads",
    "Indeed/Glassdoor",
    "Referral",
    "Other"
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const FileUploadZone = ({
    label,
    id,
    accept,
    icon: Icon,
    file,
    onFileChange
}: {
    label: string,
    id: string,
    accept?: string,
    icon: any,
    file: File | null,
    onFileChange: (file: File | null) => void
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {label} <span className="text-red-500">*</span>
            </Label>
            <div
                onClick={() => fileInputRef.current?.click()}
                className={`
                    relative group cursor-pointer
                    border-2 border-dashed rounded-2xl p-8
                    flex flex-col items-center justify-center gap-4
                    transition-all duration-300
                    ${file
                        ? 'border-accent bg-accent/5'
                        : 'border-gray-200 hover:border-accent hover:bg-gray-50'
                    }
                `}
            >
                <input
                    type="file"
                    id={id}
                    className="hidden"
                    ref={fileInputRef}
                    accept={accept}
                    onChange={(e) => onFileChange(e.target.files?.[0] || null)}
                />

                {file ? (
                    <div className="flex flex-col items-center gap-2 animate-in fade-in zoom-in duration-300">
                        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                            {file.name}
                        </p>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onFileChange(null);
                            }}
                            className="text-xs text-red-500 hover:underline flex items-center gap-1"
                        >
                            <X className="w-3 h-3" /> Remove file
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-7 h-7 text-gray-400 group-hover:text-accent transition-colors" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-semibold text-gray-900">Choose a file to upload</p>
                            <p className="text-xs text-gray-500 mt-1">or drag and drop here</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const CareersSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        country: "",
        position: "",
        attraction: "",
        experienceYears: "",
        salaryCurrency: "",
        salaryAmount: "",
        salaryWhy: "",
        hireWhy: "",
        referralSource: "",
        crmTools: [] as string[],
        timeTracking: "",
    });

    const [resume, setResume] = useState<File | null>(null);
    const [voiceNote, setVoiceNote] = useState<File | null>(null);

    const toggleCrmTool = (tool: string) => {
        setFormData(prev => ({
            ...prev,
            crmTools: prev.crmTools.includes(tool)
                ? prev.crmTools.filter(t => t !== tool)
                : [...prev.crmTools, tool]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!resume || !voiceNote) {
            toast.error("Missing Files", {
                description: "Please upload both your resume and voice recording."
            });
            return;
        }

        console.log("Full Application submitted:", { ...formData, resume, voiceNote });
        toast.success("Application Sent Successfully!", {
            description: "We'll review your application and media files and get back to you soon."
        });

        // Reset state
        setFormData({
            firstName: "", lastName: "", email: "", phone: "", gender: "", country: "",
            position: "", attraction: "", experienceYears: "", salaryCurrency: "",
            salaryAmount: "", salaryWhy: "", hireWhy: "", referralSource: "",
            crmTools: [], timeTracking: "",
        });
        setResume(null);
        setVoiceNote(null);
    };

    return (
        <>
            <SEO
                title="Careers at HudREI | Join Our Real Estate Team in Indiana"
                description="Looking for a career in real estate? Join HudREI, a rapidly growing local investment company. View our open positions and apply today."
                canonical="https://hudrei.com/careers"
            />
            <Header />
            <main className="min-h-screen bg-gray-50 pt-32">
                {/* Header */}
                <section className="container mx-auto px-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
                            <Search className="w-4 h-4" />
                            <span>We Are Hiring</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                            Build Your Future at <span className="text-accent">HudREI</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Join a fast-growing Indiana real estate investment company focused on transparency, innovation, and helping our community. We're looking for driven individuals to help us reimagine the home selling experience.
                        </p>
                    </motion.div>
                </section>

                {/* Open Roles Grid */}
                <section className="container mx-auto px-4 pb-32">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {careers.map((role, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="w-14 h-14 mb-8 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                    <role.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors">
                                    {role.title}
                                </h3>

                                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                                    {role.desc}
                                </p>

                                <Button
                                    variant="ghost"
                                    className="p-0 h-auto font-bold text-accent hover:text-primary group/btn flex items-center justify-start gap-2 hover:bg-transparent"
                                    onClick={() => {
                                        setFormData(prev => ({ ...prev, position: role.title }));
                                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    View Details & Apply
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Application Form Section */}
                <section id="application-form" className="container mx-auto px-4 pb-32">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-16 items-start">
                            {/* Info Side (2 cols) */}
                            <div className="lg:col-span-2" data-aos="fade-right">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                                    Apply To <span className="text-accent">Join HudREI</span>
                                </h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                            <Briefcase className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">Modern Culture</h4>
                                            <p className="text-sm text-gray-600">Strategic systems, automated workflows, and high-performance teams.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                            <Globe className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">Impactful Work</h4>
                                            <p className="text-sm text-gray-600">Help Indiana families move forward with confidence and integrity.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-8 bg-[#062f33] rounded-[2rem] text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                                    <p className="text-lg text-gray-200 italic border-l-4 border-accent pl-4 relative z-10">
                                        "We don't just invest in houses; we invest in people. If you're driven, ethical, and ready to learn, we want to hear from you."
                                    </p>
                                    <div className="mt-6 flex items-center gap-4 relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-white">H</div>
                                        <div>
                                            <p className="font-bold">HudREI Leadership</p>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest">Est. Quality</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Side (3 cols) */}
                            <div className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12" data-aos="fade-left">
                                <form onSubmit={handleSubmit} className="space-y-10">

                                    {/* Section 1: Personal */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">1</div>
                                            <h4 className="text-lg font-bold text-gray-900">Personal Information</h4>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="firstName"
                                                    required
                                                    className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl"
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="lastName"
                                                    required
                                                    className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl"
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number (with area code) <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="phone"
                                                    required
                                                    placeholder="+1 (xxx) xxx-xxxx"
                                                    className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="gender" className="text-sm font-semibold text-gray-700">Gender <span className="text-red-500">*</span></Label>
                                                <Select value={formData.gender} onValueChange={(v) => setFormData({ ...formData, gender: v })}>
                                                    <SelectTrigger className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl">
                                                        <SelectValue placeholder="Select gender" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Male">Male</SelectItem>
                                                        <SelectItem value="Female">Female</SelectItem>
                                                        <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="country" className="text-sm font-semibold text-gray-700">Country <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="country"
                                                    required
                                                    className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl"
                                                    value={formData.country}
                                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 2: Professional */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">2</div>
                                            <h4 className="text-lg font-bold text-gray-900">Professional Details</h4>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-sm font-semibold text-gray-700">Position of Interest <span className="text-red-500">*</span></Label>
                                                <Select value={formData.position} onValueChange={(v) => setFormData({ ...formData, position: v })}>
                                                    <SelectTrigger className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl">
                                                        <SelectValue placeholder="Select role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {careers.map(c => <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>)}
                                                        <SelectItem value="Other">Other Position</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-sm font-semibold text-gray-700">Years of Experience in Real Estate <span className="text-red-500">*</span></Label>
                                                <Select value={formData.experienceYears} onValueChange={(v) => setFormData({ ...formData, experienceYears: v })}>
                                                    <SelectTrigger className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl">
                                                        <SelectValue placeholder="Select experience" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="No previous experience">No previous experience</SelectItem>
                                                        <SelectItem value="1 Year">1 Year</SelectItem>
                                                        <SelectItem value="2 Years">2 Years</SelectItem>
                                                        <SelectItem value="3 Years">3 Years</SelectItem>
                                                        <SelectItem value="4 Years">4 Years</SelectItem>
                                                        <SelectItem value="5+ Years">5+ Years</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-sm font-semibold text-gray-700">Select CRM systems and tools you've used <span className="text-red-500">*</span></Label>
                                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 min-h-[100px] flex flex-wrap gap-2 items-start content-start">
                                                <AnimatePresence mode="popLayout">
                                                    {formData.crmTools.length === 0 && (
                                                        <p className="text-sm text-gray-400 italic py-2">No tools selected yet...</p>
                                                    )}
                                                    {formData.crmTools.map(tool => (
                                                        <motion.div
                                                            key={tool}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            className="flex items-center"
                                                        >
                                                            <Badge className="bg-accent text-white px-3 py-1.5 rounded-lg flex items-center gap-2 border-none shadow-sm">
                                                                {tool}
                                                                <X
                                                                    className="w-3.5 h-3.5 cursor-pointer hover:bg-white/20 rounded-full"
                                                                    onClick={() => toggleCrmTool(tool)}
                                                                />
                                                            </Badge>
                                                        </motion.div>
                                                    ))}
                                                </AnimatePresence>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {crmOptions.map(option => (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => toggleCrmTool(option)}
                                                        className={`
                                                            text-xs font-semibold px-3 py-1.5 rounded-full border transition-all
                                                            ${formData.crmTools.includes(option)
                                                                ? 'bg-accent/10 border-accent text-accent'
                                                                : 'bg-white border-gray-200 text-gray-500 hover:border-accent hover:text-accent'
                                                            }
                                                        `}
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 3: Expectations */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">3</div>
                                            <h4 className="text-lg font-bold text-gray-900">Expectations & Motivations</h4>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-sm font-semibold text-gray-700">Salary Currency <span className="text-red-500">*</span></Label>
                                                <Select value={formData.salaryCurrency} onValueChange={(v) => setFormData({ ...formData, salaryCurrency: v })}>
                                                    <SelectTrigger className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl">
                                                        <SelectValue placeholder="Currency" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="EGP">EGP</SelectItem>
                                                        <SelectItem value="USD">USD</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="salaryAmount" className="text-sm font-semibold text-gray-700">Expected Salary Amount <span className="text-red-500">*</span></Label>
                                                <div className="relative">
                                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                    <Input
                                                        id="salaryAmount"
                                                        required
                                                        placeholder="0.00"
                                                        className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl pl-10"
                                                        value={formData.salaryAmount}
                                                        onChange={(e) => setFormData({ ...formData, salaryAmount: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="salaryWhy" className="text-sm font-semibold text-gray-700">Why do you think we should pay you that much? <span className="text-red-500">*</span></Label>
                                            <Textarea
                                                id="salaryWhy"
                                                required
                                                placeholder="..."
                                                className="bg-white border-accent/20 focus:border-accent text-black min-h-[100px] rounded-xl resize-none"
                                                value={formData.salaryWhy}
                                                onChange={(e) => setFormData({ ...formData, salaryWhy: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="hireWhy" className="text-sm font-semibold text-gray-700">Why should we hire you? <span className="text-red-500">*</span></Label>
                                            <Textarea
                                                id="hireWhy"
                                                required
                                                placeholder="..."
                                                className="bg-white border-accent/20 focus:border-accent text-black min-h-[100px] rounded-xl resize-none"
                                                value={formData.hireWhy}
                                                onChange={(e) => setFormData({ ...formData, hireWhy: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="attraction" className="text-sm font-semibold text-gray-700">What attracted you to this role and our company? <span className="text-red-500">*</span></Label>
                                            <Textarea
                                                id="attraction"
                                                required
                                                placeholder="..."
                                                className="bg-white border-accent/20 focus:border-accent text-black min-h-[100px] rounded-xl resize-none"
                                                value={formData.attraction}
                                                onChange={(e) => setFormData({ ...formData, attraction: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-sm font-semibold text-gray-700">How did you know about HudREI? <span className="text-red-500">*</span></Label>
                                            <Select value={formData.referralSource} onValueChange={(v) => setFormData({ ...formData, referralSource: v })}>
                                                <SelectTrigger className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl">
                                                    <SelectValue placeholder="Select platform" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {referralSources.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Section 4: Compliance & Files */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">4</div>
                                            <h4 className="text-lg font-bold text-gray-900">Final Steps & Media</h4>
                                        </div>

                                        <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 space-y-4">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Please note that since you will be working on Dialer/ReadyMode you will be required to use a time tracking system which is mandatory for joining our company. We need to confirm that you understand this before we proceed.
                                            </p>
                                            <Select value={formData.timeTracking} onValueChange={(v) => setFormData({ ...formData, timeTracking: v })}>
                                                <SelectTrigger className="bg-white border-accent/20 focus:border-accent text-black h-12 rounded-xl">
                                                    <SelectValue placeholder="Choose an option..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="I understand that">I understand that</SelectItem>
                                                    <SelectItem value="I don't want to be on time tracking system">I don't want to be on time tracking system</SelectItem>
                                                    <SelectItem value="I have question about the time tracking system">I have question about the time tracking system</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-8">
                                            <FileUploadZone
                                                label="Please submit an updated resume"
                                                id="resume-upload"
                                                accept=".pdf,.doc,.docx"
                                                icon={FileText}
                                                file={resume}
                                                onFileChange={setResume}
                                            />
                                            <FileUploadZone
                                                label="Submit a Voice Recording introducing yourself"
                                                id="voice-upload"
                                                accept="audio/*"
                                                icon={Mic}
                                                file={voiceNote}
                                                onFileChange={setVoiceNote}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <Button
                                            type="submit"
                                            className="w-full rounded-2xl py-8 text-xl font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all"
                                        >
                                            Submit Application <Send className="w-6 h-6 ml-3" />
                                        </Button>
                                        <p className="text-center text-xs text-gray-400 mt-6">
                                            By submitting, you agree to being contacted regarding career opportunities. All information is handled with strict confidentiality.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <QuestionsSection />
            </main>

        </>
    );
};

export default CareersSection;

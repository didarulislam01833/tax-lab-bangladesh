'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
    ShieldCheck,
    Sparkles,
    Award,
    CheckCircle2,
    Briefcase,
    UserCheck,
    GraduationCap,
    Building2,
    ArrowRight,
    TrendingUp,
    Scale,
    FileCheck,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    FileText
} from 'lucide-react';

const bannerSlides = [
    {
        id: 1,
        badge: "TaxLab Bangladesh • Regulatory Excellence",
        title: "Navigating Tax, VAT & Corporate Advisory",
        highlight: "With Precision.",
        description: "Empowering organizations, tax practitioners, and corporate leaders with premier advisory and hands-on professional training under Bangladesh NBR regulations.",
        primaryCTA: { label: "Explore Our Services", href: "#services" },
        secondaryCTA: { label: "Meet Lead Advisor", href: "#profile" },
        cardBadge: "NBR Framework Compliant",
        cardTitle: "Compliance Standard",
        cardItems: [
            { icon: FileCheck, title: "Income Tax & VAT", sub: "Filing & Planning" },
            { icon: TrendingUp, title: "Mushak 4.3", sub: "Co-Efficient Filing" }
        ],
        cardFooter: {
            title: "Certified Advisory",
            sub: "Expert guidance for corporate RJSC & Trade Licensing."
        }
    },
    {
        id: 2,
        badge: "NBR Compliance & Training",
        title: "Master Practical VAT & Tax Operations",
        highlight: "For Your Business.",
        description: "Comprehensive e-learning programs covering Input-Output Co-efficient (4.3), e-GP Procurement, Commercial LC, and corporate Tax Return filing.",
        primaryCTA: { label: "View Training Modules", href: "#services" },
        secondaryCTA: { label: "Get Enrolled", href: "#services" },
        cardBadge: "Interactive E-Learning",
        cardTitle: "Professional Training",
        cardItems: [
            { icon: BookOpen, title: "e-GP Procurement", sub: "Tender Navigation" },
            { icon: FileText, title: "LC & Commercial", sub: "Import-Export Logistics" }
        ],
        cardFooter: {
            title: "Hands-on Modules",
            sub: "Build real-world corporate tax and VAT expertise."
        }
    },
    {
        id: 3,
        badge: "RJSC & Company Law",
        title: "End-to-End Corporate Legal Affairs",
        highlight: "& Trade Licensing.",
        description: "Full-spectrum consultation for company formation, share transfers, IRC/ERC, Fire & Environmental clearances, and credit ratings in Bangladesh.",
        primaryCTA: { label: "Corporate Services", href: "#services" },
        secondaryCTA: { label: "Contact Us", href: "#profile" },
        cardBadge: "Complete Legal Support",
        cardTitle: "RJSC & Trade Advisory",
        cardItems: [
            { icon: Building2, title: "RJSC Registration", sub: "Company Incorporation" },
            { icon: ShieldCheck, title: "Licensing Support", sub: "IRC, ERC, ISO & Fire" }
        ],
        cardFooter: {
            title: "Seamless Compliance",
            sub: "Complete solutions for domestic & foreign investors."
        }
    }
];

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

    const handlePrevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [handleNextSlide]);

    const activeSlide = bannerSlides[currentSlide];

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

            {/* Classy Animated Slider Banner Section */}
            <section className="relative py-28 lg:py-36 bg-[#0B1528] text-white overflow-hidden">
                {/* Background Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                {/* Dynamic Ambient Light Glowing Orbs */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
                <div className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[420px]">

                        {/* Slide Content */}
                        <div
                            className={`lg:col-span-7 space-y-8 text-center lg:text-left transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-inner">
                                <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
                                {activeSlide.badge}
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.15]">
                                {activeSlide.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                    {activeSlide.highlight}
                                </span>
                            </h1>

                            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                                {activeSlide.description}
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                                <a
                                    href={activeSlide.primaryCTA.href}
                                    className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2 group"
                                >
                                    {activeSlide.primaryCTA.label}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href={activeSlide.secondaryCTA.href}
                                    className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold rounded-xl text-sm transition-all duration-300"
                                >
                                    {activeSlide.secondaryCTA.label}
                                </a>
                            </div>
                        </div>

                        {/* Interactive Hero Glassmorphism Card */}
                        <div
                            className={`lg:col-span-5 relative flex justify-center transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}
                        >
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-3xl blur-2xl pointer-events-none" />

                                <div className="relative bg-slate-900/70 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                                                <Scale className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400 font-medium">{activeSlide.cardTitle}</p>
                                                <p className="text-sm font-bold text-white">{activeSlide.cardBadge}</p>
                                            </div>
                                        </div>
                                        <span className="flex h-3 w-3 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                        </span>
                                    </div>

                                    {/* Feature Cards Grid inside Banner */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {activeSlide.cardItems.map((item, idx) => {
                                            const IconComponent = item.icon;
                                            return (
                                                <div key={idx} className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/40 space-y-1">
                                                    <IconComponent className="w-5 h-5 text-emerald-400" />
                                                    <p className="text-xs font-bold text-slate-200 pt-1">{item.title}</p>
                                                    <p className="text-[11px] text-slate-400">{item.sub}</p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                                        <div>
                                            <p className="text-xs font-bold text-emerald-300">{activeSlide.cardFooter.title}</p>
                                            <p className="text-[11px] text-slate-300">{activeSlide.cardFooter.sub}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Slider Navigation & Indicators */}
                    <div className="flex items-center justify-between pt-12 border-t border-slate-800/60 mt-8">
                        {/* Slide Indicators */}
                        <div className="flex items-center gap-2">
                            {bannerSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (!isAnimating) {
                                            setIsAnimating(true);
                                            setCurrentSlide(index);
                                            setTimeout(() => setIsAnimating(false), 500);
                                        }
                                    }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-emerald-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrevSlide}
                                className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all duration-200"
                                aria-label="Previous Slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNextSlide}
                                className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all duration-200"
                                aria-label="Next Slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Specialized Services & Training Programs Section */}
            <section id="services" className="py-20 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-[#0c7844] rounded-full text-xs font-bold tracking-wider uppercase border border-emerald-200 shadow-sm animate-bounce">
                        <Sparkles className="w-4 h-4 text-emerald-600" /> What We Do
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                        Specialized Training Programs & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c7844] via-teal-600 to-[#11244e]">
                            Business Advisory Services
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Empowering professionals with practical knowledge while guiding corporate organizations toward complete regulatory compliance.
                    </p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-12 space-y-12 divide-y divide-slate-100">
                    {/* Training Programs */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-emerald-100 text-[#0c7844] rounded-xl">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                Professional Online Training Programs
                            </h3>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
                            We provide practical, hands-on e-learning modules designed to build corporate readiness, NBR compliance proficiency, and procedural expertise across essential finance sectors:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-2 text-sm text-slate-700 font-medium">
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                                <span><strong className="text-slate-900">VAT & TAX:</strong> Comprehensive NBR regulations & statutory rules.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                                <span><strong className="text-slate-900">LC & Commercial Management:</strong> Banking docs & import-export logistics.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                                <span><strong className="text-slate-900">e-GP Procurement:</strong> Government e-tender navigation & bidding process.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                                <span><strong className="text-slate-900">Income Tax Return Filing:</strong> Corporate & individual tax calculation strategies.</span>
                            </li>
                            <li className="flex items-start gap-2.5 md:col-span-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                                <span><strong className="text-slate-900">Input-Output Co-efficient (Mushak 4.3):</strong> Hands-on preparation of Mushak 4.3 declarations and cost structure computation.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Advisory Services */}
                    <div className="pt-10 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-blue-100 text-[#11244e] rounded-xl">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                Business, Tax & Regulatory Advisory
                            </h3>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
                            TaxLab Bangladesh delivers full-spectrum consultation for companies, foreign investors, and local ventures to maintain seamless compliance across various regulatory bodies:
                        </p>

                        <div className="space-y-4 pt-2 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="px-2.5 py-1 bg-slate-100 text-[#0c7844] font-bold text-xs rounded-md uppercase tracking-wider shrink-0 mt-0.5">Taxation</span>
                                <p className="text-slate-700"><strong className="text-slate-900">Income Tax & VAT Consultancy:</strong> Corporate & Individual Tax Planning, Compliance, Return Filing, VDS Management, Bookkeeping, and Co-Efficient Declarations.</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="px-2.5 py-1 bg-slate-100 text-[#0c7844] font-bold text-xs rounded-md uppercase tracking-wider shrink-0 mt-0.5">Corporate</span>
                                <p className="text-slate-700"><strong className="text-slate-900">RJSC & Company Affairs:</strong> Company Formation & Registration, Annual Returns, Share Transfer execution, Board Resolutions, and Winding Up support.</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="px-2.5 py-1 bg-slate-100 text-[#0c7844] font-bold text-xs rounded-md uppercase tracking-wider shrink-0 mt-0.5">Licensing</span>
                                <p className="text-slate-700"><strong className="text-slate-900">Trade Licenses & Certifications:</strong> End-to-end processing for IRC, ERC, Fire License, Environment Clearances, Factory Licenses, ISO Certification, and Credit Ratings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section id="profile" className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative group w-full max-w-sm">
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500" />

                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
                                    <Image
                                        src="/about-us.jpg"
                                        alt="Mr. Mohiuddin Bhuian"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl text-white border border-white/10 text-center">
                                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">10+ Years Experience</p>
                                        <p className="text-[11px] text-slate-300 mt-0.5">Corporate Tax & Legal Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-[#0c7844] font-semibold text-xs rounded-full">
                                    <UserCheck className="w-3.5 h-3.5" /> Founder & Lead Advisor
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                                    Mr. Md Mohiuddin Bhuiyan
                                </h2>
                                <p className="text-emerald-600 font-bold text-sm sm:text-base">
                                    CA (CC), PGDTM, ITP, VC
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                                    <span className="text-xs font-bold text-slate-800">NBR Enlisted Income Tax Lawyer</span>
                                </div>
                                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                                    <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                                    <span className="text-xs font-bold text-slate-800">NBR Enlisted VAT Consultant</span>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Professional Memberships</h4>
                                <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        Dhaka Taxes Bar Association
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        Bangladesh VAT Professional Forum
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        Bangladesh Company Law Practitioner Society
                                    </li>
                                </ul>
                            </div>

                            <div className="p-5 bg-gradient-to-r from-slate-900 to-[#11244e] text-white rounded-2xl space-y-2 shadow-lg">
                                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                                    <Briefcase className="w-4 h-4" /> Practical Expertise
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    Over <span className="text-white font-bold">10+ years of hands-on experience</span> collaborating directly with the {"country's"} leading Power Equipment Manufacturers, Electric & Electrical Industries and Garment Industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
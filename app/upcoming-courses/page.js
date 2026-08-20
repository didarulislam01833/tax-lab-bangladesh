'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Calendar,
    Users,
    CheckCircle2,
    ArrowRight,
    X,
    BookOpen,
    Sparkles,
    ChevronRight,
    Clock,
    ShieldCheck,
    Tag
} from 'lucide-react';

export default function UpcomingCourses() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showEnrollMessage, setShowEnrollMessage] = useState(false);

    const courses = [
        // ============= INCOME TAX (4 Courses) =============
        {
            id: 1,
            category: 'Income Tax',
            title: 'Comprehensive Guide to the Income Tax Act 2023',
            subtitle: 'Complete understanding of the Income Tax Act 2023 for professionals and practitioners.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Full Income Tax Act 2023 breakdown',
                'Key sections & definitions explained',
                'Tax calculation methods',
                'Practical case studies'
            ]
        },
        {
            id: 2,
            category: 'Income Tax',
            title: 'Income Tax Return Filing – Practical Masterclass',
            subtitle: 'Hands-on practical training for individual and corporate income tax return submission.',
            image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=900&auto=format&fit=crop',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Individual return filing (IT-11GA)',
                'Corporate tax return preparation',
                'Tax rebate & wealth reconciliation',
                'Investment proof documentation'
            ]
        },
        {
            id: 3,
            category: 'Income Tax',
            title: 'TDS (Tax Deduction at Source) – Rules & Compliance',
            subtitle: 'Master TDS rules, rates, deductions and compliance requirements for businesses.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'TDS rates & deduction rules',
                'TDS certificate issuance',
                'Filing TDS returns',
                'Penalty & interest provisions'
            ]
        },
        {
            id: 4,
            category: 'Income Tax',
            title: 'ITP (Income Tax Practitioner) Exam – Full Preparation Course',
            subtitle: 'Comprehensive preparation for the NBR Income Tax Practitioner licensing examination.',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Full NBR syllabus coverage',
                'Previous year question analysis',
                'Income Tax Act 2023 breakdown',
                'Viva-voce guidance & mock tests'
            ]
        },

        // ============= VAT (6 Courses) =============
        {
            id: 5,
            category: 'VAT',
            title: 'Value Added Tax & Supplementary Duty Act, 2012 – Comprehensive Overview',
            subtitle: 'Complete professional understanding of the VAT & SD Act 2012 from basics to advanced.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'VAT & SD Act 2012 overview',
                'Key sections & definitions',
                'Registration & compliance rules',
                'Practical case applications'
            ]
        },
        {
            id: 6,
            category: 'VAT',
            title: 'VAT Return Filing – Step-by-Step Guide',
            subtitle: 'Step-by-step professional training on monthly VAT return preparation and filing.',
            image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Mushak 9.1 return filing',
                'Input tax credit adjustments',
                'Filing deadlines & error fixes',
                'NBR online VAT portal guide'
            ]
        },
        {
            id: 7,
            category: 'VAT',
            title: 'VAT Consultant Exam – Preparation Course',
            subtitle: 'Targeted professional coaching for the NBR VAT Consultant licensing examination.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'VAT & SD Act 2012 deep dive',
                'Practical Mushak applications',
                'Model test series & solutions',
                'NBR viva guidance'
            ]
        },
        {
            id: 8,
            category: 'VAT',
            title: 'VDS (VAT Deduction at Source) – Complete Guide',
            subtitle: 'Complete practical training on VAT deduction at source rules and compliance procedures.',
            image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'VDS rules & rates',
                'Deduction procedures',
                'VDS certificate management',
                'Compliance & penalty avoidance'
            ]
        },
        {
            id: 9,
            category: 'VAT',
            title: 'Master class on Input-output co-efficient (Mushak 4.3)',
            subtitle: 'Practical guide to Mushak 4.3 declaration, calculation.',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Raw material cost calculation',
                'Mushak 4.3 form filing',
                'Wastage percentage rules',
                'Penalty avoidance during audits'
            ]
        },
        {
            id: 10,
            category: 'VAT',
            title: 'Practical Training on VAT Book Keeping',
            subtitle: 'Professional book keeping training for VAT compliance and accurate record maintenance.',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'VAT-compliant bookkeeping',
                'Purchase & sales records',
                'VAT reconciliation',
                'Audit-ready documentation'
            ]
        },

        // ============= EGP (e-Procurement) (1 Course) =============
        {
            id: 11,
            category: 'EGP (e-Procurement)',
            title: 'e-Procurement (EGP) – Complete Online Training',
            subtitle: 'Hands-on professional training on government electronic procurement operations.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'e-GP contractor registration',
                'Tender document preparation',
                'e-PG standard understanding',
                'Live mock tendering process'
            ]
        },

        // ============= CUSTOMS (2 Courses) =============
        {
            id: 12,
            category: 'Customs',
            title: 'Customs Valuation & HS Code Classification – Masterclass',
            subtitle: 'Professional training on customs valuation methods and accurate HS code classification.',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Customs valuation methods',
                'HS Code classification rules',
                'Bill of Entry preparation',
                'Customs clearance procedures'
            ]
        },
        {
            id: 13,
            category: 'Customs',
            title: 'LC & Commercial Management – Practical Course',
            subtitle: 'Practical training on LC, import-export operations and banking procedures.',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'L/C opening & document scrutiny',
                'Incoterms 2020 & IRC/ERC rules',
                'Customs clearance & Bill of Entry',
                'Bangladesh Bank forex guidelines'
            ]
        },

        // ============= LAND (1 Course) =============
        {
            id: 14,
            category: 'Land',
            title: 'Land Management – Mutation, Porcha & Records',
            subtitle: 'Complete practical training on land mutation, porcha, records and management procedures.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Land mutation process',
                'Porcha & record retrieval',
                'Land tax calculation',
                'Legal documentation'
            ]
        },

        // ============= LABOUR LAW (1 Course) =============
        {
            id: 15,
            category: 'Labour Law',
            title: 'Labour Law – HR Compliance & Practical Application',
            subtitle: 'Practical training on Bangladesh Labour Law, HR compliance and workplace regulations.',
            image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Bangladesh Labour Act overview',
                'HR compliance procedures',
                'Termination & benefits rules',
                'Maternity & workplace safety'
            ]
        },

        // ============= FINANCE ACT (1 Course) =============
        {
            id: 16,
            category: 'Finance Act',
            title: 'Finance Act – Analysis & Practical Implications',
            subtitle: 'Professional analysis of major direct and indirect tax amendments under the Finance Act.',
            image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Income Tax & VAT rate changes',
                'Corporate compliance impact',
                'Updated SROs & statutory laws',
                'Guidance for assessment year'
            ]
        }
    ];

    const filteredCourses =
        activeTab === 'all'
            ? courses
            : courses.filter((course) => course.category === activeTab);

    const handleEnrollClick = () => {
        setShowEnrollMessage(true);

        setTimeout(() => {
            setShowEnrollMessage(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-[#f6f8fb] text-slate-900">

            {/* =====================================================
                HERO / PAGE HEADER
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#0f2347] text-white">

                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">

                    <div className="max-w-3xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-4 h-4" />
                            Executive Development Programs
                        </div>

                        {/* Heading */}
                        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                            Professional Tax & VAT
                            <span className="block text-emerald-400">
                                Training Programs
                            </span>
                        </h1>

                        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Practical and professional programs designed for Tax
                            Practitioners, Accountants, Finance Executives,
                            Commercial Professionals and Business Owners.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
                FILTER AREA
            ===================================================== */}
            <section className="bg-white border-b border-slate-200 sticky top-0 z-30">

                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

                    <div className="py-4 flex gap-2 overflow-x-auto scrollbar-hide">

                        {[
                            { id: 'all', label: 'All Programs' },
                            { id: 'Income Tax', label: 'Income Tax' },
                            { id: 'VAT', label: 'VAT' },
                            { id: 'EGP (e-Procurement)', label: 'EGP (e-Procurement)' },
                            { id: 'Customs', label: 'Customs' },
                            { id: 'Land', label: 'Land' },
                            { id: 'Labour Law', label: 'Labour Law' },
                            { id: 'Finance Act', label: 'Finance Act' }
                        ].map((tab) => (

                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    shrink-0 px-4 py-2.5 rounded-lg
                                    text-xs font-bold
                                    transition-all duration-200
                                    border
                                    ${activeTab === tab.id
                                        ? 'bg-[#0f2347] text-white border-[#0f2347] shadow-md'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-700'
                                    }
                                `}
                            >
                                {tab.label}
                            </button>

                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
                COURSE GRID
            ===================================================== */}
            <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10">

                <div className="max-w-7xl mx-auto">

                    <div className="mb-8 flex items-end justify-between">

                        <div>
                            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                                Upcoming Programs
                            </p>

                            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#0f2347]">
                                Choose Your Training
                            </h2>
                        </div>

                        <div className="hidden sm:block text-xs font-medium text-slate-500">
                            {filteredCourses.length} Programs Available
                        </div>

                    </div>


                    {/* 4 CARDS PER ROW */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">

                        {filteredCourses.map((course) => (

                            <article
                                key={course.id}
                                className="
                                    group
                                    bg-white
                                    rounded-2xl
                                    border border-slate-200
                                    overflow-hidden
                                    flex flex-col
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:-translate-y-1
                                    hover:border-emerald-300
                                    transition-all duration-300
                                "
                            >

                                {/* IMAGE */}
                                <div className="relative h-40 overflow-hidden bg-slate-100">

                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="
                                            w-full h-full object-cover
                                            group-hover:scale-105
                                            transition-transform duration-500
                                        "
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                                    {/* Category */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2.5 py-1 rounded-md bg-white/95 text-[#0f2347] text-[9px] font-black uppercase tracking-wider shadow-sm">
                                            {course.category}
                                        </span>
                                    </div>

                                    {/* Status */}
                                    <div className="absolute bottom-3 left-3">

                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[9px] font-bold shadow-md">

                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />

                                            {course.status}

                                        </span>

                                    </div>

                                </div>


                                {/* CONTENT */}
                                <div className="p-4 flex flex-col flex-1">

                                    {/* TITLE */}
                                    <div>

                                        <h3 className="
                                            text-[15px]
                                            font-extrabold
                                            text-[#0f2347]
                                            leading-snug
                                            line-clamp-2
                                            group-hover:text-emerald-700
                                            transition-colors
                                        ">
                                            {course.title}
                                        </h3>

                                        <p className="
                                            mt-2
                                            text-[11px]
                                            text-slate-500
                                            leading-relaxed
                                            line-clamp-2
                                        ">
                                            {course.subtitle}
                                        </p>

                                    </div>


                                    {/* INFO */}
                                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">

                                        <div className="flex items-center justify-between text-[10px]">

                                            <span className="flex items-center gap-1.5 text-slate-500">
                                                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                                                Start Date
                                            </span>

                                            <span className="font-bold text-slate-800">
                                                TBA
                                            </span>

                                        </div>


                                        <div className="flex items-center justify-between text-[10px]">

                                            <span className="flex items-center gap-1.5 text-slate-500">
                                                <Users className="w-3.5 h-3.5 text-emerald-600" />
                                                Mode
                                            </span>

                                            <span className="font-bold text-slate-800 text-right max-w-[100px] truncate">
                                                {course.mode}
                                            </span>

                                        </div>

                                    </div>


                                    {/* BOTTOM */}
                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">

                                        <div>
                                            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                                                Course Fee
                                            </p>

                                            <p className="text-sm font-black text-emerald-700">
                                                {course.price}
                                            </p>
                                        </div>


                                        {/* SEE MORE */}
                                        <button
                                            onClick={() => setSelectedCourse(course)}
                                            className="
                                                inline-flex
                                                items-center
                                                gap-1.5
                                                px-3.5
                                                py-2
                                                rounded-lg
                                                bg-[#0f2347]
                                                hover:bg-emerald-600
                                                text-white
                                                text-[10px]
                                                font-bold
                                                transition-all
                                                duration-200
                                                shadow-sm
                                            "
                                        >
                                            See More
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </button>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                DETAILS MODAL
            ===================================================== */}
            {selectedCourse && (

                <div
                    className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        p-4
                        bg-slate-950/70
                        backdrop-blur-sm
                    "
                    onClick={() => setSelectedCourse(null)}
                >

                    <div
                        className="
                            relative
                            w-full max-w-xl
                            max-h-[90vh]
                            overflow-y-auto
                            bg-white
                            rounded-3xl
                            shadow-2xl
                            border border-slate-200
                        "
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* MODAL IMAGE */}
                        <div className="relative h-48 sm:h-56">

                            <img
                                src={selectedCourse.image}
                                alt={selectedCourse.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="
                                    absolute
                                    top-4 right-4
                                    w-9 h-9
                                    rounded-full
                                    bg-black/50
                                    hover:bg-black/80
                                    text-white
                                    flex items-center justify-center
                                    transition
                                "
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="absolute bottom-5 left-5 right-5">

                                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[9px] font-bold uppercase">
                                    {selectedCourse.category}
                                </span>

                                <h2 className="mt-2 text-xl sm:text-2xl font-black text-white leading-tight">
                                    {selectedCourse.title}
                                </h2>

                            </div>

                        </div>


                        {/* MODAL CONTENT */}
                        <div className="p-6 sm:p-7 space-y-6">

                            <p className="text-sm text-slate-600 leading-relaxed">
                                {selectedCourse.subtitle}
                            </p>


                            {/* INFO BOX */}
                            <div className="grid grid-cols-2 gap-3">

                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">

                                    <Calendar className="w-4 h-4 text-emerald-600 mb-2" />

                                    <p className="text-[10px] text-slate-400 uppercase font-bold">
                                        Start Date
                                    </p>

                                    <p className="text-sm font-bold text-[#0f2347] mt-1">
                                        To Be Announced
                                    </p>

                                </div>


                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">

                                    <Users className="w-4 h-4 text-emerald-600 mb-2" />

                                    <p className="text-[10px] text-slate-400 uppercase font-bold">
                                        Learning Mode
                                    </p>

                                    <p className="text-sm font-bold text-[#0f2347] mt-1">
                                        {selectedCourse.mode}
                                    </p>

                                </div>

                            </div>


                            {/* CURRICULUM */}
                            <div>

                                <div className="flex items-center gap-2 mb-4">

                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                        <BookOpen className="w-4 h-4 text-emerald-600" />
                                    </div>

                                    <h3 className="text-sm font-black text-[#0f2347]">
                                        What You Will Learn
                                    </h3>

                                </div>


                                <div className="space-y-3">

                                    {selectedCourse.features.map((feature, index) => (

                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >

                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />

                                            <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                                {feature}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* FEE + BUTTON */}
                            <div className="pt-5 border-t border-slate-200">

                                <div className="flex items-center justify-between gap-4">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                            Course Fee
                                        </p>

                                        <p className="text-xl font-black text-emerald-700">
                                            {selectedCourse.price}
                                        </p>

                                    </div>


                                    <button
                                        onClick={handleEnrollClick}
                                        className="
                                            px-5 py-3
                                            bg-[#0f2347]
                                            hover:bg-emerald-600
                                            text-white
                                            rounded-xl
                                            text-xs
                                            font-bold
                                            flex items-center gap-2
                                            transition
                                            shadow-lg
                                        "
                                    >
                                        Enroll Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>

                                </div>


                                {showEnrollMessage && (

                                    <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">

                                        <p className="text-emerald-700 font-bold text-xs">
                                            Enrollment Coming Soon!
                                        </p>

                                        <p className="text-emerald-600 text-[10px] mt-1">
                                            Please contact our course advisor for updates.
                                        </p>

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            )}


            {/* =====================================================
                CERTIFICATION BANNER
            ===================================================== */}
            <section className="pb-16 px-4 sm:px-8 lg:px-10">

                <div className="max-w-7xl mx-auto">

                    <div className="
                        relative
                        overflow-hidden
                        bg-[#0f2347]
                        rounded-3xl
                        p-7 sm:p-10
                        text-white
                        shadow-xl
                    ">

                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-7">

                            <div className="text-center md:text-left">

                                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">

                                    <ShieldCheck className="w-4 h-4" />

                                    Verified Certification

                                </div>

                                <h3 className="mt-2 text-xl sm:text-2xl font-black">
                                    Earn a Professional Certificate
                                </h3>

                                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                                    Participants who successfully complete the required
                                    assignments and assessment will receive a verified
                                    certificate from TaxLab Bangladesh.
                                </p>

                            </div>


                            <Link
                                href="/contact"
                                className="
                                    shrink-0
                                    px-6 py-3
                                    bg-emerald-500
                                    hover:bg-emerald-400
                                    text-[#071a35]
                                    rounded-xl
                                    text-xs
                                    font-black
                                    transition
                                    shadow-lg
                                "
                            >
                                Contact Course Advisor
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}
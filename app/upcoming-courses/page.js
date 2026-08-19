'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

    // Unsplash high-quality tax/finance/office placeholder images
    const courses = [
        {
            id: 1,
            category: 'exam',
            title: 'Income Tax Practitioner (ITP) Exam Prep',
            subtitle: 'Comprehensive prep for the NBR Income Tax Practitioner license exam.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
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
        {
            id: 2,
            category: 'exam',
            title: 'VAT Consultant Exam Preparation',
            subtitle: 'Targeted coaching to pass the NBR VAT Consultant licensing exam.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
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
            id: 3,
            category: 'customs',
            title: 'LC & Commercial Management',
            subtitle: 'Practical training on LC, import-export operations, & banking rules.',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
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
        {
            id: 4,
            category: 'commercial',
            title: 'e-GP Procurement Training',
            subtitle: 'Hands-on training on govt electronic procurement portal operations.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
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
        {
            id: 5,
            category: 'finance',
            title: 'Analysis of Finance Act, 2026',
            subtitle: 'Breakdown of new direct & indirect tax amendments under Finance Act 2026.',
            image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Income Tax & VAT rate changes',
                'Corporate compliance impact',
                'Updated SROs & statutory laws',
                'Guidance for 2026 assessment year'
            ]
        },
        {
            id: 6,
            category: 'taxation',
            title: 'Income Tax Return Filing',
            subtitle: 'Hands-on practical guide to personal and corporate return submission.',
            image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=800&auto=format&fit=crop',
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
            id: 7,
            category: 'vat',
            title: 'VAT Return Filing (Mushak 9.1)',
            subtitle: 'Step-by-step training on monthly VAT return preparation.',
            image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
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
            id: 8,
            category: 'vat',
            title: 'Input Output Co-efficient (4.3)',
            subtitle: 'Guide to Mushak 4.3 declaration, calculation, and NBR filing.',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: 'TBA',
            features: [
                'Raw material cost calculation',
                'Mushak 4.3 form filing',
                'Wastage percentage rules',
                'Penalty avoidance during audits'
            ]
        }
    ];

    const filteredCourses = activeTab === 'all'
        ? courses
        : courses.filter(c => c.category === activeTab);

    const handleEnrollClick = () => {
        setShowEnrollMessage(true);
        setTimeout(() => {
            setShowEnrollMessage(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans py-12">

            {/* Header Section */}
            <section className="pt-8 pb-10 px-6 sm:px-10 max-w-5xl mx-auto text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs font-semibold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Executive Development Programs
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    Practical NBR & Tax Training
                </h1>

                <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Interactive professional programs designed for Tax Practitioners, Accountants, and Finance Executives.
                </p>

                {/* Filter Navigation */}
                <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
                    {[
                        { id: 'all', label: 'All Workshops' },
                        { id: 'exam', label: 'ITP & VAT Exam' },
                        { id: 'taxation', label: 'Income Tax & TDS' },
                        { id: 'vat', label: 'VAT & VDS' },
                        { id: 'customs', label: 'LC & Customs' },
                        { id: 'commercial', label: 'e-GP Procurement' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${activeTab === tab.id
                                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* 10 Minute School Style Grid with Images */}
            <section className="pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div>
                                {/* Course Thumbnail Image */}
                                <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Category & Status Overlay Badges */}
                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                        <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white rounded-lg text-[10px] font-extrabold uppercase tracking-wider">
                                            {course.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-600 text-white shadow-md">
                                            <Clock className="w-3 h-3" /> {course.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-5 space-y-4">
                                    {/* Title & Subtitle */}
                                    <div>
                                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 leading-snug line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
                                            {course.subtitle}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div className="pt-3 space-y-2 border-t border-slate-100">
                                        {course.features.slice(0, 2).map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-slate-700 truncate">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                                <span className="truncate font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mode & Date */}
                                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                                        <div className="flex items-center justify-between text-[11px]">
                                            <span className="flex items-center gap-1.5 text-slate-600">
                                                <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Starts: <strong className="text-slate-900">TBA</strong>
                                            </span>
                                            <span className="flex items-center gap-1.5 text-slate-600">
                                                <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {course.mode}
                                            </span>
                                        </div>

                                        {/* Fee */}
                                        <div className="flex items-center justify-between pt-1">
                                            <span className="text-[11px] text-slate-500 font-medium">Course Fee:</span>
                                            <span className="text-sm font-extrabold text-emerald-600 flex items-center gap-1">
                                                <Tag className="w-3.5 h-3.5" />
                                                {course.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="p-5 pt-0">
                                <button
                                    onClick={() => setSelectedCourse(course)}
                                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <span>See Details & Curriculum</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Details Modal */}
            {selectedCourse && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedCourse(null)}
                >
                    <div
                        className="bg-white border border-slate-200 w-full max-w-lg rounded-3xl overflow-hidden space-y-6 relative shadow-2xl text-slate-900"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Image Header */}
                        <div className="relative w-full h-48 bg-slate-100">
                            <img
                                src={selectedCourse.image}
                                alt={selectedCourse.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-6 pt-0 space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                        {selectedCourse.category}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        {selectedCourse.status}
                                    </span>
                                </div>
                                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                                    {selectedCourse.title}
                                </h2>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    {selectedCourse.subtitle}
                                </p>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                                <div>
                                    <span className="text-slate-500 block text-[11px]">Learning Mode</span>
                                    <span className="text-slate-900 font-bold">{selectedCourse.mode}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-slate-500 block text-[11px]">Course Fee</span>
                                    <span className="text-base font-extrabold text-emerald-600">{selectedCourse.price}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-emerald-600" /> What You Will Learn
                                </h4>
                                <ul className="space-y-2.5">
                                    {selectedCourse.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-2 relative">
                                <button
                                    onClick={handleEnrollClick}
                                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-center text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                                >
                                    Enroll Now <ArrowRight className="w-4 h-4" />
                                </button>

                                {showEnrollMessage && (
                                    <div className="mt-3 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <p className="text-emerald-700 font-bold text-sm tracking-wide">
                                            Enrollment Coming Soon!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Certification Footer Banner */}
            <section className="pb-12 px-6 sm:px-10 max-w-7xl mx-auto">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                    <div className="space-y-1.5 text-center md:text-left">
                        <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
                            <ShieldCheck className="w-4 h-4" /> Verified Certification
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            Earn an Industry-Recognized Certificate
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
                            Upon successful completion of practical assignments & assessment, participants receive a verified certificate from TaxLab Bangladesh.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="shrink-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs transition shadow-md"
                    >
                        Contact Course Advisor
                    </Link>
                </div>
            </section>

        </main>
    );
}
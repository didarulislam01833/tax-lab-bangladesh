'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Calendar,
    Users,
    CheckCircle2,
    ArrowRight,
    Award,
    X,
    BookOpen,
    Info,
    Tag,
    Sparkles
} from 'lucide-react';

export default function UpcomingCourses() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            id: 1,
            category: 'exam',
            title: 'Income Tax Practitioner (ITP) Exam Prep',
            subtitle: 'Comprehensive prep for the NBR Income Tax Practitioner license exam.',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: '---',
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
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: '---',
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
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
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
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
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
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
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
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            price: '---',
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
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '----',
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
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
            features: [
                'Raw material cost calculation',
                'Mushak 4.3 form filing',
                'Wastage percentage rules',
                'Penalty avoidance during audits'
            ]
        },
        {
            id: 9,
            category: 'taxation',
            title: 'Tax Deduction at Source (TDS)',
            subtitle: 'Complete compliance management for withholding income tax deductions.',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
            features: [
                'Applicable TDS rates 2023/2026',
                'Monthly withholding return filing',
                'Issuance of TDS certificates',
                'Handling non-compliance notices'
            ]
        },
        {
            id: 10,
            category: 'vat',
            title: 'VAT Deduction at Source (VDS)',
            subtitle: 'Practical guide to VDS deduction, certificate issuance & deposit rules.',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
            features: [
                'VDS rate charts & exemptions',
                'Mushak 6.3 & 6.6 issuance',
                'Treasury challan deposit process',
                'VDS audit risk mitigation'
            ]
        },
        {
            id: 11,
            category: 'taxation',
            title: 'Income Tax Act 2023 Masterclass',
            subtitle: 'Mastery course covering all chapters and sections of Income Tax Law.',
            mode: 'Hybrid',
            status: 'Upcoming',
            price: '---',
            features: [
                'Key provisions of Tax Act 2023',
                'Heads of income calculations',
                'Tax audit, appeal & tribunal',
                'Corporate tax planning strategy'
            ]
        },
        {
            id: 12,
            category: 'vat',
            title: 'VAT & SD Act 2012 Guide',
            subtitle: 'Framework covering VAT registration, registers, and litigation.',
            mode: 'Hybrid',
            status: 'Upcoming',
            price: '---',
            features: [
                'VAT Act 2012 & Rules overview',
                'Mushak registers (6.1, 6.2, 6.3)',
                'Supplementary duty rules',
                'VAT audit & appellate process'
            ]
        },
        {
            id: 13,
            category: 'customs',
            title: 'Customs Valuation & HS Code',
            subtitle: 'Practical guide for commercial & supply chain professionals.',
            mode: 'Online (Live)',
            status: 'Upcoming',
            price: '---',
            features: [
                'HS Code & tariff schedules',
                'Assessable value calculation',
                'Bonded warehouse licensing',
                'Customs clearance procedures'
            ]
        }
    ];

    const filteredCourses = activeTab === 'all'
        ? courses
        : courses.filter(c => c.category === activeTab);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 relative font-sans overflow-hidden">

            {/* Soft Ambient Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

            {/* Header / Hero Section */}
            <section className="relative pt-16 pb-10 px-6 sm:px-10 max-w-5xl mx-auto text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Executive Development Programs
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Practical NBR & Tax Training
                </h1>

                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Interactive professional programs designed for Tax Practitioners, Accountants, and Finance Executives.
                </p>

                {/* Filter Tabs */}
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
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${activeTab === tab.id
                                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Course Cards Grid */}
            <section className="pb-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/40"
                        >
                            <div className="space-y-4">
                                {/* Category & Status Badges */}
                                <div className="flex items-center justify-between gap-2">
                                    <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded-md font-semibold uppercase tracking-wider text-[10px] border border-slate-700">
                                        {course.category}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        {course.status}
                                    </span>
                                </div>

                                {/* Title & Subtitle */}
                                <div>
                                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                                        {course.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed mt-2 line-clamp-2">
                                        {course.subtitle}
                                    </p>
                                </div>

                                {/* Details & Price */}
                                <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-400">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                            <span>Starts: <strong className="text-slate-200 font-semibold">TBA</strong></span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                            <span>{course.mode}</span>
                                        </div>
                                    </div>

                                    {/* Price Tag */}
                                    <div className="flex items-center justify-between pt-1">
                                        <span className="text-slate-400 text-[11px] font-medium">Fee:</span>
                                        <span className="text-base font-extrabold text-emerald-400 flex items-center gap-1">
                                            <Tag className="w-3.5 h-3.5 text-emerald-400" />
                                            {course.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-4 mt-4 border-t border-slate-800">
                                <button
                                    onClick={() => setSelectedCourse(course)}
                                    className="w-full py-2.5 bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-semibold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 border border-slate-700 group-hover:border-emerald-500"
                                >
                                    <Info className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950" /> See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Course Details Pop-up Modal */}
            {selectedCourse && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setSelectedCourse(null)}
                >
                    <div
                        className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl text-slate-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Modal Header */}
                        <div className="space-y-2 pr-6">
                            <div className="flex items-center gap-2">
                                <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[10px] font-semibold uppercase tracking-wider border border-slate-700">
                                    {selectedCourse.category}
                                </span>
                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {selectedCourse.status}
                                </span>
                            </div>
                            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                                {selectedCourse.title}
                            </h2>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                {selectedCourse.subtitle}
                            </p>
                        </div>

                        {/* Mode & Pricing Summary */}
                        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 text-xs">
                            <div>
                                <span className="text-slate-400 block text-[11px]">Learning Mode</span>
                                <span className="text-slate-200 font-bold">{selectedCourse.mode}</span>
                            </div>
                            <div className="text-right">
                                <span className="text-slate-400 block text-[11px]">Course Fee</span>
                                <span className="text-base font-extrabold text-emerald-400">{selectedCourse.price}</span>
                            </div>
                        </div>

                        {/* Highlights Section */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-emerald-400" /> Key Highlights
                            </h4>
                            <ul className="space-y-2.5">
                                {selectedCourse.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Single Action Button: Enroll Now */}
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-center text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                            >
                                Enroll Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Certification Banner */}
            <section className="pb-20 px-6 sm:px-10 max-w-7xl mx-auto">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="space-y-1.5 text-center md:text-left">
                        <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                            <Award className="w-4 h-4" /> Verified Certification
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                            Earn an Industry-Recognized Certificate
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                            Upon successful completion of practical assignments & assessment, participants receive a verified certificate from TaxLab Bangladesh.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition shadow-md"
                    >
                        Contact Course Advisor
                    </Link>
                </div>
            </section>

        </main>
    );
}
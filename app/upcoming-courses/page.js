'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    Users,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Award
} from 'lucide-react';

export default function UpcomingCourses() {
    const [activeTab, setActiveTab] = useState('all');

    const courses = [
        {
            id: 1,
            category: 'exam',
            title: 'Income Tax Practitioner (ITP) Exam Preparation',
            subtitle: 'Comprehensive preparation course for the NBR Income Tax Practitioner license examination.',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            features: [
                'Complete syllabus coverage according to NBR syllabus',
                'Previous years question analysis & mock tests',
                'Income Tax Act 2023 core sections breakdown',
                'Viva-voce guidance & exam techniques'
            ]
        },
        {
            id: 2,
            category: 'exam',
            title: 'VAT Consultant Exam Preparation',
            subtitle: 'Targeted coaching to pass the NBR VAT Consultant licensing examination.',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            features: [
                'VAT & SD Act 2012 and Rules 2016 thorough study',
                'Practical Mushak form applications for exam',
                'Model test series & solutions',
                'NBR board interview/viva guidance'
            ]
        },
        {
            id: 3,
            category: 'customs',
            title: 'LC & Commercial Management',
            subtitle: 'End-to-end practical training on Letter of Credit, import-export operations, and banking rules.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'L/C opening, amendment & document scrutiny',
                'Incoterms 2020 & IRC/ERC license process',
                'Customs clearance, Bill of Entry & CNF rules',
                'Foreign exchange regulation & Bangladesh Bank guidelines'
            ]
        },
        {
            id: 4,
            category: 'commercial',
            title: 'e-GP (e-Government Procurement) Training',
            subtitle: 'Practical hands-on training on government electronic procurement portal operations.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'e-GP contractor/supplier portal registration',
                'Tender document preparation & online submission',
                'e-PG (Standard Tender Document) understanding',
                'Live mock tendering & security deposit rules'
            ]
        },
        {
            id: 5,
            category: 'finance',
            title: 'Analysis of Finance Act, 2026',
            subtitle: 'In-depth breakdown of new direct and indirect tax amendments under Finance Act 2026.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'Key amendments in Income Tax & VAT rates',
                'Impact on corporate and individual compliance',
                'Updated SROs and statutory changes',
                'Practical guidance for the 2026 assessment year'
            ]
        },
        {
            id: 6,
            category: 'taxation',
            title: 'Income Tax Return Filing',
            subtitle: 'Hands-on practical guide to personal and corporate return submission.',
            mode: 'Online / Hybrid',
            status: 'Upcoming',
            features: [
                'Individual tax return filing (IT-11GA)',
                'Corporate tax return preparation',
                'Tax rebate calculations & investment proofs',
                'Reconciliation of wealth statements'
            ]
        },
        {
            id: 7,
            category: 'vat',
            title: 'VAT Return Filing',
            subtitle: 'Step-by-step training on monthly VAT return preparation (Mushak 9.1).',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'Practical Mushak 9.1 return preparation',
                'Input tax credit adjustments & rules',
                'Filing deadlines & error corrections',
                'Online NBR VAT portal operations'
            ]
        },
        {
            id: 8,
            category: 'vat',
            title: 'Input Output Co-efficient (Mushak-4.3)',
            subtitle: 'Comprehensive guide to declaration, calculation, and NBR submission.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'Raw material & processing cost calculations',
                'Mushak 4.3 form preparation & filing',
                'Wastage percentage determination',
                'Avoiding penalty during VAT audits'
            ]
        },
        {
            id: 9,
            category: 'taxation',
            title: 'Tax Deduction at Source (TDS)',
            subtitle: 'Complete compliance management for withholding income tax deductions.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'Applicable TDS rates under Income Tax Act 2023',
                'Monthly withholding tax return filing',
                'Issuance of TDS certificates',
                'Handling non-compliance notices'
            ]
        },
        {
            id: 10,
            category: 'vat',
            title: 'VAT Deduction at Source (VDS)',
            subtitle: 'Practical guide to VDS deduction, certificate issuance, and deposit rules.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'VDS rate charts & exemption list',
                'Mushak 6.3 and Mushak 6.6 issuance',
                'Treasury challan deposit process',
                'VDS audit risk mitigation'
            ]
        },
        {
            id: 11,
            category: 'taxation',
            title: 'Overall Income Tax Act 2023',
            subtitle: 'Mastery course covering all fundamental chapters and sections of Income Tax Law.',
            mode: 'Hybrid (Online + Physical)',
            status: 'Upcoming',
            features: [
                'Structure & key provisions of Tax Act 2023',
                'Head of income calculations',
                'Tax audit, appeal, and tribunal procedures',
                'Corporate tax planning & compliance'
            ]
        },
        {
            id: 12,
            category: 'vat',
            title: 'Overall Value Added Tax and Supplementary Duty Act, 2012',
            subtitle: 'End-to-end framework covering VAT registration, records, and litigation.',
            mode: 'Hybrid (Online + Physical)',
            status: 'Upcoming',
            features: [
                'VAT Act 2012 & Rules overview',
                'Mushak register maintenance (6.1, 6.2, 6.3)',
                'Supplementary duty provisions',
                'VAT audit & appellate process'
            ]
        },
        {
            id: 13,
            category: 'customs',
            title: 'Customs Valuation, HS Code & Import-Export Duty',
            subtitle: 'Practical guide for Commercial & Supply Chain Professionals.',
            mode: 'Online (Live Zoom)',
            status: 'Upcoming',
            features: [
                'HS Code classification & tariff schedule',
                'Assessable value calculation',
                'Bonded warehouse license & rules',
                'L/C & customs clearance procedures'
            ]
        }
    ];

    const filteredCourses = activeTab === 'all'
        ? courses
        : courses.filter(c => c.category === activeTab);

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 overflow-hidden relative">

            {/* Background Animated Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0c7844]/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
            <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#11244e]/40 rounded-full blur-[150px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold tracking-wide uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default">
                    <Sparkles className="w-4 h-4 text-emerald-400" /> Executive Training Programs
                </div>

                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                    Level Up Your Career with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                        Practical NBR & Tax Training
                    </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    Interactive upcoming workshops designed for Tax Practitioners, Corporate Accountants, Finance Managers, and Business Owners.
                </p>

                {/* Filter Tabs */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
                    {[
                        { id: 'all', label: 'All Workshops' },
                        { id: 'exam', label: 'ITP & VAT Exam' },
                        { id: 'taxation', label: 'Income Tax & TDS' },
                        { id: 'vat', label: 'VAT & VDS' },
                        { id: 'customs', label: 'LC, Customs & Trade' },
                        { id: 'commercial', label: 'e-GP & Procurement' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/50'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Course Cards Grid */}
            <section className="pb-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
                        >
                            {/* Card Header & Status Badge */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-slate-700/60 border border-slate-600/40 text-emerald-300 rounded-lg text-xs font-semibold uppercase tracking-wider">
                                        {course.category}
                                    </span>

                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                                        {course.status}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                    {course.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {course.subtitle}
                                </p>

                                {/* Course Metadata */}
                                <div className="space-y-2.5 pt-4 border-t border-slate-700/50 text-xs text-slate-300">
                                    <div className="flex items-center gap-2.5">
                                        <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Starts: <strong className="text-slate-400 font-normal">To be announced</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Schedule: <strong className="text-slate-400 font-normal">To be announced</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Format: <strong className="text-white">{course.mode}</strong></span>
                                    </div>
                                </div>

                                {/* Key Features List */}
                                <div className="space-y-2 pt-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Course Highlights:</p>
                                    {course.features.map((feat, index) => (
                                        <div key={index} className="flex items-start gap-2 text-xs text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="pt-8 mt-8 border-t border-slate-700/50 space-y-4">
                                <Link
                                    href="/contact"
                                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-center text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group-hover:gap-3"
                                >
                                    Get Notified <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Certification Guarantee Banner */}
            <section className="pb-24 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
                <div className="bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800 border border-slate-700/80 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    <div className="space-y-3 text-center md:text-left z-10">
                        <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm">
                            <Award className="w-5 h-5" /> Professional Certificate
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Earn an Industry-Recognized Certificate
                        </h3>
                        <p className="text-slate-400 text-sm max-w-2xl">
                            Upon successful completion of assignments and final assessment, participants will receive a verified certificate from TaxLab Bangladesh.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="z-10 shrink-0 px-8 py-4 bg-slate-900 hover:bg-slate-950 text-white border border-slate-700 font-bold rounded-2xl transition hover:scale-105"
                    >
                        Contact Course Advisor
                    </Link>
                </div>
            </section>

        </main>
    );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Calculator,
    FileText,
    BookOpen,
    CheckCircle2,
    ArrowRight,
    Download,
    Sparkles,
    ShieldCheck,
    Search
} from 'lucide-react';

export default function IncomeTax() {
    const [searchQuery, setSearchQuery] = useState('');

    const sroList = [
        {
            id: 1,
            title: 'Income Tax Act 2023 - Complete Act Overview',
            category: 'Act & Law',
            date: '2023 / Updated 2026',
            description: 'Comprehensive guidelines and legal provisions under the revised Income Tax Act 2023.',
            link: '/income-tax/sro'
        },
        {
            id: 2,
            title: 'Withholding Tax (TDS) Rates & Deduction Rules',
            category: 'Tax Deduction',
            date: 'Fiscal Year 2025-26',
            description: 'Updated rate charts for Tax Deducted at Source (TDS) for corporate transactions and individual payments.',
            link: '/income-tax/sro'
        },
        {
            id: 3,
            title: 'Individual Tax Return Preparation Form (IT-11GA)',
            category: 'Return Filing',
            date: 'Assessment Year 2025-26',
            description: 'Step-by-step guide to filing personal income tax returns online and offline in Bangladesh.',
            link: '/income-tax/sro'
        },
        {
            id: 4,
            title: 'SRO on Allowable Tax Rebates & Investments',
            category: 'SRO & Circulars',
            date: 'Latest NBR SRO',
            description: 'Eligible investment sectors for securing maximum tax rebate for individual taxpayers.',
            link: '/income-tax/sro'
        }
    ];

    const filteredSros = sroList.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white">
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0c7844]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> Income Tax Act 2023 & NBR Advisory
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                        Comprehensive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Income Tax Solutions
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                        Stay compliant with Bangladesh NBR income tax regulations, latest circulars, withholding tax deductions, and individual/corporate return filing guidelines.
                    </p>

                    {/* Quick Search Bar */}
                    <div className="max-w-xl mx-auto pt-4">
                        <div className="relative">
                            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search SROs, Tax Circulars, or Return Guides..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/80 border border-slate-700 rounded-2xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-400 transition"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Services Overview */}
            <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
                        <div className="w-12 h-12 bg-emerald-50 text-[#0c7844] rounded-2xl flex items-center justify-center">
                            <Calculator className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Personal Tax Filing</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Assistance for salaried individuals, business owners, and non-resident Bangladeshis in tax calculation and IT-11GA return filing.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
                        <div className="w-12 h-12 bg-blue-50 text-[#11244e] rounded-2xl flex items-center justify-center">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Corporate Assessment</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            End-to-end corporate tax assessment, allowable expenses optimization, tax audit handling, and NBR dispute resolution.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
                        <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">TDS & Withholding Tax</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Monthly withholding tax return submission, TDS certificate management, and compliance checks under Section 163.
                        </p>
                    </div>

                </div>
            </section>

            {/* SRO & Resource Documents List */}
            <section className="py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
                        <div className="space-y-2">
                            <span className="text-xs font-bold text-[#0c7844] uppercase tracking-wider">Resource Center</span>
                            <h2 className="text-3xl font-extrabold text-slate-900">Income Tax Circulars & SROs</h2>
                        </div>
                        <p className="text-slate-500 text-sm">Showing verified documents & guidance notes</p>
                    </div>

                    <div className="space-y-4">
                        {filteredSros.length > 0 ? (
                            filteredSros.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                                >
                                    <div className="space-y-2 max-w-3xl">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-md text-xs font-bold uppercase">
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-slate-400">{item.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.description}</p>
                                    </div>

                                    <Link
                                        href={item.link}
                                        className="px-5 py-2.5 bg-[#11244e] hover:bg-[#0c7844] text-white font-semibold rounded-xl text-xs transition flex items-center gap-2 shrink-0"
                                    >
                                        View Document <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-500 text-center py-8 text-sm">No documents found matching your search.</p>
                        )}
                    </div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="bg-gradient-to-r from-[#11244e] to-[#0c7844] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                        <div className="space-y-3 text-center md:text-left">
                            <h3 className="text-3xl font-extrabold">Need Custom Income Tax Consultancy?</h3>
                            <p className="text-slate-200 text-sm">Schedule a direct discussion with our certified Tax Practitioners.</p>
                        </div>

                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-slate-950 hover:bg-emerald-400 font-bold rounded-2xl transition shadow-lg shrink-0 flex items-center gap-2"
                        >
                            Book Advisory Session <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
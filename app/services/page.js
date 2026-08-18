'use client';

import Link from 'next/link';
import {
    Calculator,
    FileCheck2,
    Scale,
    Building2,
    ShieldCheck,
    Users,
    TrendingUp,
    Award,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    FileText,
    HandshakeIcon,
    Globe
} from 'lucide-react';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">

            {/* Page Header */}
            <section className="py-20 bg-[#11244e] text-white">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black mb-4">Our Comprehensive Services</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        End-to-end tax, VAT, customs, and legal advisory solutions for businesses of all sizes in Bangladesh.
                    </p>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Service 1: Income Tax */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition group">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-emerald-50 text-[#0c7844] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#0c7844] group-hover:text-white transition">
                                <Calculator className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Income Tax Advisory</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        Individual Tax Return Filing (IT-11GA)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        Corporate Tax Assessment & Planning
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        Withholding Tax (TDS) Management
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        NBR Dispute Resolution & Appeals
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        Tax Audit Representation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 2: VAT & VDS */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition group">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-blue-50 text-[#11244e] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#11244e] group-hover:text-white transition">
                                <FileCheck2 className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">VAT & VDS Consultancy</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        VAT Registration & Deregistration
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        Monthly Mushak 9.1 Return Filing
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        Mushak 4.3 Input-Output Coefficient
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        VAT Deduction at Source (VDS) Compliance
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        VAT Audit & Assessment Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 3: Customs & Trade */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition group">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-700 group-hover:text-white transition">
                                <Scale className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Customs & Trade Law</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                        HS Code Classification
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                        Customs Valuation & Duty Calculation
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                        Import-Export Documentation
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                        Bonded Warehouse License Support
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                        LC Vetting & Trade Compliance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 4: Corporate Legal */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition group">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-purple-700 group-hover:text-white transition">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Corporate Legal Advisory</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                        Company Formation & Registration
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                        Board Resolution & Minutes Drafting
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                        Contract Vetting & Agreement Drafting
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                        Compliance with Bangladesh Labor Law
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                        Corporate Governance Advisory
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-[#11244e] to-[#0c7844] rounded-3xl p-8 sm:p-12 text-center text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need a Customized Solution?</h3>
                    <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                        Every business is unique. We provide tailored advisory services to meet your specific needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#11244e] font-bold rounded-2xl transition hover:scale-105 shadow-lg"
                    >
                        Schedule a Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
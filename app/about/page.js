'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    ShieldCheck,
    Target,
    Eye,
    Sparkles,
    Award,
    CheckCircle2,
    Briefcase,
    UserCheck
} from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white overflow-hidden">
                <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#0c7844]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-emerald-400" /> About TaxLab Bangladesh
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                        Empowering Compliance & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Financial Excellence
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                        TaxLab Bangladesh is a premier advisory and training platform specializing in Income Tax, VAT, Customs, and Corporate Legal Affairs under Bangladesh NBR regulations.
                    </p>
                </div>
            </section>



            {/* Profile Section: Mr. Mohiuddin Bhuian */}
            <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                    {/* Decorative Subtle Accent */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Side: Photo with Styling & Hover Effects */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative group w-full max-w-sm">
                                {/* Glow Border Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500" />

                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
                                    {/* Updated Image Path */}
                                    <Image
                                        src="/about-us.jpg"
                                        alt="Mr. Mohiuddin Bhuian"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Floating Badge on Image */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl text-white border border-white/10 text-center">
                                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">10+ Years Experience</p>
                                        <p className="text-[11px] text-slate-300 mt-0.5">Corporate Tax & Legal Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content Details */}
                        <div className="lg:col-span-7 space-y-6">

                            <div className="space-y-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-[#0c7844] font-semibold text-xs rounded-full">
                                    <UserCheck className="w-3.5 h-3.5" /> Founder & Lead Advisor
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                                    Mr. Mohiuddin Bhuian
                                </h2>
                                <p className="text-emerald-600 font-bold text-sm sm:text-base">
                                    CA (CC), PGDTM, ITP, VC
                                </p>
                            </div>

                            {/* Enlisted Badges */}
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

                            {/* Memberships */}
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

                            {/* Practical Experience Highlights */}
                            <div className="p-5 bg-gradient-to-r from-slate-900 to-[#11244e] text-white rounded-2xl space-y-2 shadow-lg">
                                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                                    <Briefcase className="w-4 h-4" /> Practical Expertise
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    Over <span className="text-white font-bold">10+ years of hands-on experience</span> working with country-leading Garments factories, Electric & Electrical companies, and Power Equipment manufacturers.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
'use client';

import Link from 'next/link';
import {
    ShieldCheck,
    Target,
    Eye,
    Users,
    ArrowRight,
    Sparkles,
    BookOpenCheck
} from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white overflow-hidden">
                {/* Background Glow Effects */}
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

            {/* Mission & Vision Cards */}
            <section className="py-20 -mt-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <div className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 space-y-4">
                        <div className="w-14 h-14 bg-emerald-50 text-[#0c7844] rounded-2xl flex items-center justify-center">
                            <Target className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            To simplify complex tax laws for corporate institutions, businesses, and individual taxpayers across Bangladesh through accurate guidance, seamless return filing, and practical executive training.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 space-y-4">
                        <div className="w-14 h-14 bg-blue-50 text-[#11244e] rounded-2xl flex items-center justify-center">
                            <Eye className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            To build a nation of informed taxpayers and skilled tax practitioners by providing real-time NBR regulatory updates, advanced corporate consultancy, and industry-focused professional development.
                        </p>
                    </div>

                </div>
            </section>

            {/* Why We Stand Out */}
            <section className="py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">

                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Why TaxLab Bangladesh Stands Out
                        </h2>
                        <p className="text-slate-600">
                            Combining hands-on corporate tax expertise with interactive learning resources.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                            <ShieldCheck className="w-10 h-10 text-[#0c7844]" />
                            <h4 className="text-xl font-bold text-slate-900">NBR Regulation Experts</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Directly guided by Income Tax Practitioners (ITP), Chartered Accountants, and Advocates with years of litigation experience.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                            <BookOpenCheck className="w-10 h-10 text-[#11244e]" />
                            <h4 className="text-xl font-bold text-slate-900">Practical Case Studies</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We go beyond textbook theories by offering real Mushak forms, Tax IT-11GA return filing, and VDS calculations.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                            <Users className="w-10 h-10 text-teal-600" />
                            <h4 className="text-xl font-bold text-slate-900">Client & Learner Centric</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Dedicated support for corporate compliance audits, tax planning, and career guidance for young professionals.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="bg-gradient-to-r from-[#11244e] to-[#0c7844] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                        <div className="space-y-3 text-center md:text-left">
                            <h3 className="text-3xl font-extrabold">Need Professional Tax or VAT Assistance?</h3>
                            <p className="text-slate-200 text-sm">Get in touch with our team of consultants for personalized tax planning and return filing.</p>
                        </div>

                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-slate-950 hover:bg-emerald-400 font-bold rounded-2xl transition shadow-lg shrink-0 flex items-center gap-2"
                        >
                            Contact Us <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B192C] text-slate-400 border-t border-slate-800 text-sm font-sans relative overflow-hidden">
            {/* Top Decorative Border Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

            {/* Main Footer Content */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    {/* Brand & About Column */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-inner">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-white text-2xl font-black tracking-tight">
                                TaxLab <span className="text-emerald-400">Bangladesh</span>
                            </h3>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            Empowering corporate professionals, business owners, and tax practitioners across Bangladesh through specialized Income Tax, VAT, Customs, and Corporate Legal Compliance advisory & training.
                        </p>

                        {/* Gorgeous Social & Direct Action Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/8801960226722"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-semibold text-xs transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-950/50 backdrop-blur-md group"
                            >
                                <MessageCircle className="w-4 h-4 fill-emerald-400/20 text-emerald-400 group-hover:scale-110 transition-transform" />
                                <span>WhatsApp Us</span>
                            </a>

                            {/* Facebook Button */}
                            <a
                                href="https://www.facebook.com/share/1BBBLBUJuR/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Page"
                                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-950/50 backdrop-blur-md group"
                            >
                                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li>
                                <Link href="/" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming-courses" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                                    Training Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                                    Advisory Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services & Advisory */}
                    <div className="space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">Expertise</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li className="text-slate-400 hover:text-slate-200 transition">Income Tax</li>
                            <li className="text-slate-400 hover:text-slate-200 transition">Value Added Tax (VAT)</li>
                            <li className="text-slate-400 hover:text-slate-200 transition">Customs & Bond</li>
                            <li className="text-slate-400 hover:text-slate-200 transition">Company Affairs</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">Office Address</h4>
                        <ul className="space-y-3 text-xs">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    House-01, Road-16, Sector -07, Uttara, Dhaka-1230
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                                <a href="tel:01960226722" className="hover:text-emerald-400 transition font-medium">
                                    01960-226722
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                                <a href="mailto:taxlabbangladesh@gmail.com" className="hover:text-emerald-400 transition break-all">
                                    taxlabbangladesh@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Sub-Footer Bar */}
            <div className="border-t border-slate-800/80 bg-slate-950/50 py-6 text-xs">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">

                    {/* Copyright Notice */}
                    <div className="text-center md:text-left">
                        <p>© {currentYear} <span className="text-slate-200 font-semibold">TaxLab Bangladesh</span> <span className='text-amber-300 font-bold'>An enterprise of Bhuiyan & Associates.</span> All rights reserved.</p>
                    </div>

                    {/* Developer Credit */}
                    <div className="flex items-center gap-1.5 text-slate-400 text-center md:text-right">
                        <span>Developed by</span>
                        <a
                            href="tel:01833353363"
                            className="font-semibold text-slate-300 hover:text-emerald-400 transition underline underline-offset-4 decoration-slate-700 hover:decoration-emerald-400 flex items-center gap-1"
                            title="Call Eye Catcher Brand & Web Co."
                        >
                            Eye Catcher Brand & Web Co.
                            <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                        <span className="text-slate-400 font-mono text-[11px]">(01833-353363)</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
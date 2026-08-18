'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [taxDropdown, setTaxDropdown] = useState(false);
    const [vatDropdown, setVatDropdown] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="TaxLab Bangladesh Logo"
                            width={48}
                            height={48}
                            className="object-contain"
                            priority
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tight text-[#11244e] leading-none">
                                TaxLab
                            </span>
                            <span className="text-sm font-bold text-[#0c7844] tracking-wide">
                                Bangladesh
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm tracking-wide">

                        {/* Home */}
                        <Link href="/" className="hover:text-[#0c7844] transition">
                            Home
                        </Link>

                        {/* Income Tax Dropdown */}
                        <div
                            className="relative group py-6 cursor-pointer"
                            onMouseEnter={() => setTaxDropdown(true)}
                            onMouseLeave={() => setTaxDropdown(false)}
                        >
                            <div className="flex items-center gap-1 hover:text-[#0c7844] transition">
                                <span>Income Tax</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>

                            {taxDropdown && (
                                <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                                    <Link href="/income-tax/sro" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-[#0c7844] transition">
                                        SRO & Notifications
                                    </Link>
                                    <Link href="/income-tax/acts-rules" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-[#0c7844] transition">
                                        Income Tax Act & Rules
                                    </Link>
                                    <Link href="/income-tax/calculator" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-[#0c7844] transition">
                                        Tax Calculator & Forms
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* VAT Dropdown */}
                        <div
                            className="relative group py-6 cursor-pointer"
                            onMouseEnter={() => setVatDropdown(true)}
                            onMouseLeave={() => setVatDropdown(false)}
                        >
                            <div className="flex items-center gap-1 hover:text-[#0c7844] transition">
                                <span>VAT</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>

                            {vatDropdown && (
                                <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                                    <Link href="/vat/sro" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-[#0c7844] transition">
                                        VAT SRO & Orders
                                    </Link>
                                    <Link href="/vat/act-2012" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-[#0c7844] transition">
                                        VAT Act 2012 & Rules
                                    </Link>
                                    <Link href="/vat/rates-forms" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-[#0c7844] transition">
                                        VAT Rates & Forms
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Upcoming Courses */}
                        <Link href="/upcoming-courses" className="hover:text-[#0c7844] transition">
                            Upcoming Courses
                        </Link>

                        {/* About Us */}
                        <Link href="/about" className="hover:text-[#0c7844] transition">
                            About Us
                        </Link>

                        {/* Contact Us */}
                        <Link href="/contact" className="hover:text-[#0c7844] transition">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Action Button (Desktop) */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-[#11244e] hover:bg-[#0c7844] text-white font-medium text-sm rounded-full transition shadow-sm"
                        >
                            Get Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-700 hover:text-[#0c7844] focus:outline-none p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-100 space-y-3">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:text-[#0c7844] hover:bg-slate-50"
                        >
                            Home
                        </Link>

                        {/* Income Tax Links for Mobile */}
                        <div className="space-y-1 pl-3 border-l-2 border-[#0c7844] my-2">
                            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Income Tax</span>
                            <Link href="/income-tax/sro" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1.5 text-sm text-slate-600 hover:text-[#0c7844]">SRO & Notifications</Link>
                            <Link href="/income-tax/acts-rules" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1.5 text-sm text-slate-600 hover:text-[#0c7844]">Income Tax Act & Rules</Link>
                        </div>

                        {/* VAT Links for Mobile */}
                        <div className="space-y-1 pl-3 border-l-2 border-[#0c7844] my-2">
                            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">VAT</span>
                            <Link href="/vat/sro" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1.5 text-sm text-slate-600 hover:text-[#0c7844]">VAT SRO & Orders</Link>
                            <Link href="/vat/act-2012" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1.5 text-sm text-slate-600 hover:text-[#0c7844]">VAT Act 2012 & Rules</Link>
                        </div>

                        <Link
                            href="/upcoming-courses"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:text-[#0c7844] hover:bg-slate-50"
                        >
                            Upcoming Courses
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:text-[#0c7844] hover:bg-slate-50"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:text-[#0c7844] hover:bg-slate-50"
                        >
                            Contact Us
                        </Link>
                    </div>
                )}

            </div>
        </header>
    );
}
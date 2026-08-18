'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 group">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                            <Image
                                src="/logo.png"
                                alt="TaxLab Bangladesh Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#11244e] leading-none group-hover:text-[#0c7844] transition">
                                Tax<span className="text-[#0c7844] group-hover:text-[#11244e] transition">Lab</span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mt-0.5">
                                Bangladesh
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">

                        {/* Home */}
                        <Link
                            href="/"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Home
                        </Link>

                        {/* Upcoming Courses */}
                        <Link
                            href="/upcoming-courses"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Upcoming Courses
                        </Link>

                        {/* Consultancy & Advisory Service - Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('consultancy')}
                                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition flex items-center gap-1 ${openDropdown === 'consultancy'
                                    ? 'text-[#0c7844] bg-emerald-50'
                                    : 'text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50'
                                    }`}
                            >
                                Consultancy & Advisory Service
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'consultancy' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === 'consultancy' && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                                    <Link href="/services/income-tax" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200">
                                            <svg className="w-4 h-4 text-[#0c7844]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-6 3v-3m-6 3h18M5 17h14M5 7h14M5 7v10M19 7v10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Income Tax Advisory</p>
                                            <p className="text-xs text-slate-500">Corporate & Individual Tax Planning</p>
                                        </div>
                                    </Link>
                                    <Link href="/services/vat" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">VAT & VDS Consultancy</p>
                                            <p className="text-xs text-slate-500">Mushak, Registration & Compliance</p>
                                        </div>
                                    </Link>
                                    <Link href="/services/customs" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Customs & Trade Law</p>
                                            <p className="text-xs text-slate-500">Import-Export & HS Code</p>
                                        </div>
                                    </Link>
                                    <Link href="/services/corporate" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Corporate Legal Advisory</p>
                                            <p className="text-xs text-slate-500">Company Formation & Compliance</p>
                                        </div>
                                    </Link>
                                    <div className="border-t border-slate-100 my-1"></div>
                                    <Link href="/services" className="flex items-center justify-between px-4 py-3 hover:bg-emerald-50 transition group">
                                        <span className="text-sm font-semibold text-[#0c7844]">View All Services</span>
                                        <svg className="w-4 h-4 text-[#0c7844] group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Income Tax Act - Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('incometax')}
                                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition flex items-center gap-1 ${openDropdown === 'incometax'
                                    ? 'text-[#0c7844] bg-emerald-50'
                                    : 'text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50'
                                    }`}
                            >
                                Income Tax Act
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'incometax' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === 'incometax' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                                    <Link href="/income-tax/overview" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Overview</p>
                                            <p className="text-xs text-slate-500">Key Provisions & Updates</p>
                                        </div>
                                    </Link>
                                    <Link href="/income-tax/filing" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Return Filing</p>
                                            <p className="text-xs text-slate-500">IT-11GA & Corporate Returns</p>
                                        </div>
                                    </Link>
                                    <Link href="/income-tax/tds" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">TDS Management</p>
                                            <p className="text-xs text-slate-500">Withholding Tax Compliance</p>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* VAT Act - Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('vat')}
                                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition flex items-center gap-1 ${openDropdown === 'vat'
                                    ? 'text-[#0c7844] bg-emerald-50'
                                    : 'text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50'
                                    }`}
                            >
                                VAT Act
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'vat' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === 'vat' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                                    <Link href="/vat/overview" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Overview</p>
                                            <p className="text-xs text-slate-500">VAT Act 2012 Key Points</p>
                                        </div>
                                    </Link>
                                    <Link href="/vat/registration" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Registration</p>
                                            <p className="text-xs text-slate-500">VAT Registration Process</p>
                                        </div>
                                    </Link>
                                    <Link href="/vat/mushak" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Mushak Management</p>
                                            <p className="text-xs text-slate-500">Mushak 9.1 & 4.3 Filing</p>
                                        </div>
                                    </Link>
                                    <Link href="/vat/vds" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition">
                                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">VDS Compliance</p>
                                            <p className="text-xs text-slate-500">VAT Deduction at Source</p>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Blog */}
                        <Link
                            href="/blog"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Blog
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            className="ml-2 px-6 py-2.5 bg-[#0c7844] text-white text-sm font-bold rounded-xl hover:bg-emerald-600 transition shadow-md hover:shadow-lg"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-slate-600 hover:text-[#0c7844] rounded-lg hover:bg-emerald-50 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 sm:px-6 max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col space-y-1">

                        <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Home
                        </Link>

                        <Link href="/upcoming-courses" className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Upcoming Courses
                        </Link>

                        {/* Mobile Consultancy Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-consultancy')}
                                className="w-full flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl"
                            >
                                <span>Consultancy & Advisory Service</span>
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-consultancy' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'mobile-consultancy' && (
                                <div className="ml-4 space-y-1 border-l-2 border-emerald-200 pl-4">
                                    <Link href="/services/income-tax" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Income Tax Advisory
                                    </Link>
                                    <Link href="/services/vat" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        VAT & VDS Consultancy
                                    </Link>
                                    <Link href="/services/customs" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Customs & Trade Law
                                    </Link>
                                    <Link href="/services/corporate" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Corporate Legal Advisory
                                    </Link>
                                    <Link href="/services" className="block text-sm font-semibold text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        View All Services →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Income Tax Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-incometax')}
                                className="w-full flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl"
                            >
                                <span>Income Tax Act</span>
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-incometax' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'mobile-incometax' && (
                                <div className="ml-4 space-y-1 border-l-2 border-emerald-200 pl-4">
                                    <Link href="/income-tax/overview" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Overview
                                    </Link>
                                    <Link href="/income-tax/filing" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Return Filing
                                    </Link>
                                    <Link href="/income-tax/tds" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        TDS Management
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile VAT Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-vat')}
                                className="w-full flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl"
                            >
                                <span>VAT Act</span>
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-vat' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'mobile-vat' && (
                                <div className="ml-4 space-y-1 border-l-2 border-emerald-200 pl-4">
                                    <Link href="/vat/overview" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Overview
                                    </Link>
                                    <Link href="/vat/registration" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Registration
                                    </Link>
                                    <Link href="/vat/mushak" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Mushak Management
                                    </Link>
                                    <Link href="/vat/vds" className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        VDS Compliance
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Blog
                        </Link>

                        <Link href="/contact" className="mt-2 px-6 py-3 bg-[#0c7844] text-white text-sm font-bold rounded-xl text-center hover:bg-emerald-600 transition shadow-md">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
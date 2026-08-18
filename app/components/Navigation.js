'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        if (openDropdown === menu) {
            setOpenDropdown(null);
            setOpenSubDropdown(null);
        } else {
            setOpenDropdown(menu);
            setOpenSubDropdown(null);
        }
    };

    const toggleSubDropdown = (submenu, e) => {
        if (e) e.stopPropagation();
        setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
    };

    const closeAll = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    };

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">

                    {/* Logo */}
                    <Link href="/" onClick={closeAll} className="flex items-center gap-3 shrink-0 group">
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
                        <Link
                            href="/"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/upcoming-courses"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Upcoming Courses
                        </Link>

                        {/* Consultancy Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('consultancy')}
                                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition flex items-center gap-1 ${openDropdown === 'consultancy'
                                        ? 'text-[#0c7844] bg-emerald-50'
                                        : 'text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50'
                                    }`}
                            >
                                Consultancy Services
                                <svg
                                    className={`w-4 h-4 transition-transform ${openDropdown === 'consultancy' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === 'consultancy' && (
                                <div className="absolute top-full left-0 mt-2 w-[22rem] bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                                    <Link href="/services/income-tax" onClick={closeAll} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-[#0c7844]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-6 3v-3m-6 3h18M5 17h14M5 7h14M5 7v10M19 7v10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Income Tax Consultancy</p>
                                            <p className="text-xs text-slate-500">Corporate & Individual Tax Planning & Return Filing</p>
                                        </div>
                                    </Link>

                                    <Link href="/services/vat" onClick={closeAll} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">VAT Consultancy</p>
                                            <p className="text-xs text-slate-500">VAT Compliance, Return Filing, Book Keeping & Co-Efficient Declaration</p>
                                        </div>
                                    </Link>

                                    <Link href="/services/rjsc" onClick={closeAll} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">RJSC & Company Affairs</p>
                                            <p className="text-xs text-slate-500">Registration, Return Filing, Share Transfer & Winding Up</p>
                                        </div>
                                    </Link>

                                    <Link href="/services/corporate" onClick={closeAll} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-[#0c7844]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">BIDA & Related Services</p>
                                            <p className="text-xs text-slate-500">Setup, Visas, Logistics, Finance & Compliance</p>
                                        </div>
                                    </Link>

                                    <Link href="/services/trade-license" onClick={closeAll} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Licenses & Certificates</p>
                                            <p className="text-xs text-slate-500">IRC, ERC, Trade, Fire, Factory & ISO Licenses</p>
                                        </div>
                                    </Link>

                                    <Link href="/services/other" onClick={closeAll} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition group">
                                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-[#0c7844]">Other Services</p>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Act & Rules Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('act-rules')}
                                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition flex items-center gap-1 ${openDropdown === 'act-rules'
                                        ? 'text-[#0c7844] bg-emerald-50'
                                        : 'text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50'
                                    }`}
                            >
                                Act & Rules
                                <svg
                                    className={`w-4 h-4 transition-transform ${openDropdown === 'act-rules' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === 'act-rules' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                                    {/* Income Tax Nested */}
                                    <div className="relative group/sub">
                                        <button
                                            onClick={(e) => toggleSubDropdown('income-tax', e)}
                                            className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#0c7844] hover:bg-emerald-50 transition"
                                        >
                                            <span>Income Tax</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        <div className="hidden group-hover/sub:block absolute left-full top-0 ml-1 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2">
                                            <Link href="/act-rules/income-tax/act" onClick={closeAll} className="block px-4 py-2 text-sm text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition">
                                                Act
                                            </Link>
                                            <Link href="/act-rules/income-tax/sro" onClick={closeAll} className="block px-4 py-2 text-sm text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition">
                                                SRO
                                            </Link>
                                        </div>
                                    </div>

                                    {/* VAT Nested */}
                                    <div className="relative group/sub">
                                        <button
                                            onClick={(e) => toggleSubDropdown('vat', e)}
                                            className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#0c7844] hover:bg-emerald-50 transition"
                                        >
                                            <span>VAT</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        <div className="hidden group-hover/sub:block absolute left-full top-0 ml-1 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2">
                                            <Link href="/act-rules/vat/act" onClick={closeAll} className="block px-4 py-2 text-sm text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition">
                                                Act
                                            </Link>
                                            <Link href="/act-rules/vat/sro" onClick={closeAll} className="block px-4 py-2 text-sm text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition">
                                                SRO
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Customs */}
                                    <Link href="/act-rules/customs" onClick={closeAll} className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#0c7844] hover:bg-emerald-50 transition">
                                        Customs
                                    </Link>

                                    {/* Labor Law */}
                                    <Link href="/act-rules/labor-law" onClick={closeAll} className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#0c7844] hover:bg-emerald-50 transition">
                                        Labor Law
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/gallery"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/about-us"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/blog"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition"
                        >
                            Blog
                        </Link>

                        {/* Shop Link with Inline Shopping Cart SVG */}
                        <Link
                            href="/shop"
                            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 rounded-xl transition flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4 text-slate-600 group-hover:text-[#0c7844]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>Shop</span>
                        </Link>

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
                        aria-label="Toggle Menu"
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
                        <Link href="/" onClick={closeAll} className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Home
                        </Link>

                        <Link href="/upcoming-courses" onClick={closeAll} className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Upcoming Courses
                        </Link>

                        {/* Mobile Consultancy Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-consultancy')}
                                className="w-full flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl"
                            >
                                <span>Consultancy Services</span>
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-consultancy' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'mobile-consultancy' && (
                                <div className="ml-4 space-y-1 border-l-2 border-emerald-200 pl-4">
                                    <Link href="/services/income-tax" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Income Tax Advisory
                                    </Link>
                                    <Link href="/services/vat" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        VAT Consultancy
                                    </Link>
                                    <Link href="/services/rjsc" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        RJSC & Company Affairs
                                    </Link>
                                    <Link href="/services/corporate" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        BIDA & Related Services
                                    </Link>
                                    <Link href="/services/trade-license" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Trade License & Other Licenses
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Act & Rules Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-act-rules')}
                                className="w-full flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl"
                            >
                                <span>Act & Rules</span>
                                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-act-rules' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'mobile-act-rules' && (
                                <div className="ml-4 space-y-1 border-l-2 border-emerald-200 pl-4">
                                    {/* Mobile Income Tax */}
                                    <div>
                                        <button
                                            onClick={(e) => toggleSubDropdown('mobile-income-tax', e)}
                                            className="w-full flex items-center justify-between text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition"
                                        >
                                            <span>Income Tax</span>
                                            <svg className={`w-3.5 h-3.5 transition-transform ${openSubDropdown === 'mobile-income-tax' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openSubDropdown === 'mobile-income-tax' && (
                                            <div className="ml-4 space-y-1 border-l-2 border-emerald-100 pl-4">
                                                <Link href="/act-rules/income-tax/act" onClick={closeAll} className="block text-xs text-slate-600 hover:text-[#0c7844] py-1.5 px-3 rounded-lg transition">
                                                    Act
                                                </Link>
                                                <Link href="/act-rules/income-tax/sro" onClick={closeAll} className="block text-xs text-slate-600 hover:text-[#0c7844] py-1.5 px-3 rounded-lg transition">
                                                    SRO
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile VAT */}
                                    <div>
                                        <button
                                            onClick={(e) => toggleSubDropdown('mobile-vat', e)}
                                            className="w-full flex items-center justify-between text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition"
                                        >
                                            <span>VAT</span>
                                            <svg className={`w-3.5 h-3.5 transition-transform ${openSubDropdown === 'mobile-vat' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openSubDropdown === 'mobile-vat' && (
                                            <div className="ml-4 space-y-1 border-l-2 border-emerald-100 pl-4">
                                                <Link href="/act-rules/vat/act" onClick={closeAll} className="block text-xs text-slate-600 hover:text-[#0c7844] py-1.5 px-3 rounded-lg transition">
                                                    Act
                                                </Link>
                                                <Link href="/act-rules/vat/sro" onClick={closeAll} className="block text-xs text-slate-600 hover:text-[#0c7844] py-1.5 px-3 rounded-lg transition">
                                                    SRO
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    <Link href="/act-rules/customs" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Customs
                                    </Link>
                                    <Link href="/act-rules/labor-law" onClick={closeAll} className="block text-sm text-slate-600 hover:text-[#0c7844] py-2 px-4 hover:bg-emerald-50 rounded-xl transition">
                                        Labor Law
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/gallery" onClick={closeAll} className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Gallery
                        </Link>
                        <Link href="/about-us" onClick={closeAll} className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            About Us
                        </Link>
                        <Link href="/blog" onClick={closeAll} className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl">
                            Blog
                        </Link>

                        <Link href="/shop" onClick={closeAll} className="text-sm font-semibold text-slate-600 hover:text-[#0c7844] hover:bg-emerald-50 transition py-3 px-4 rounded-xl flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>Shop</span>
                        </Link>

                        <Link href="/contact" onClick={closeAll} className="mt-2 px-6 py-3 bg-[#0c7844] text-white text-sm font-bold rounded-xl text-center hover:bg-emerald-600 transition shadow-md">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
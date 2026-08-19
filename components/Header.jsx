'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    ShoppingBag,
    User,
    Briefcase,
    FileText,
    Building2,
    Globe,
    Award,
    MoreHorizontal,
    BookOpen,
    Home,
    Phone,
    Images,
    Newspaper,
    Scale,
} from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
    const [mobileSubDropdown, setMobileSubDropdown] = useState(null);

    const toggleMobileDropdown = (key) => {
        setMobileActiveDropdown(
            mobileActiveDropdown === key ? null : key
        );
        setMobileSubDropdown(null);
    };

    const toggleMobileSubDropdown = (key) => {
        setMobileSubDropdown(
            mobileSubDropdown === key ? null : key
        );
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileActiveDropdown(null);
        setMobileSubDropdown(null);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">

            {/* Top Accent Line */}
            <div className="h-[3px] bg-gradient-to-r from-[#11244e] via-[#0c7844] to-[#d99b22]" />

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= DESKTOP / MAIN HEADER ================= */}
                <div className="flex items-center justify-between min-h-[86px] gap-6">

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        className="flex items-center gap-3.5 shrink-0 group"
                    >
                        {/* Logo Box */}
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />

                            <Image
                                src="/logo.png"
                                alt="TaxLab Bangladesh Logo"
                                width={68}
                                height={68}
                                priority
                                className="relative w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Brand Text */}
                        <div className="flex flex-col justify-center leading-none">
                            <span className="text-[25px] sm:text-[28px] font-black tracking-[-0.04em] text-[#11244e]">
                                Tax<span className="text-[#0c7844]">Lab</span>
                            </span>

                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="h-[2px] w-5 bg-[#d99b22] rounded-full" />
                                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#9a6a13] tracking-[0.18em] uppercase">
                                    Bangladesh
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-[13px] xl:text-[14px] text-slate-700">

                        {/* HOME */}
                        <Link
                            href="/"
                            className="group relative flex items-center gap-1.5 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition-all duration-200"
                        >
                            <Home className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] transition" />
                            <span>Home</span>
                        </Link>

                        {/* UPCOMING COURSES */}
                        <Link
                            href="/upcoming-courses"
                            className="group relative flex items-center gap-1.5 px-3 py-3 rounded-xl hover:bg-emerald-50 hover:text-[#0c7844] transition-all duration-200"
                        >
                            <BookOpen className="w-4 h-4 text-emerald-600" />
                            <span>Upcoming Courses</span>
                        </Link>

                        {/* ================= CONSULTANCY ================= */}
                        <div className="relative group">

                            <button
                                type="button"
                                className="flex items-center gap-1.5 px-3 py-7 rounded-xl hover:text-[#11244e] transition-all duration-200"
                            >
                                <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844]" />
                                <span>Consultancy Services</span>
                                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                            </button>

                            {/* Dropdown */}
                            <div className="absolute top-[82px] left-1/2 -translate-x-1/2 w-[450px] bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] p-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">

                                <div className="px-3 py-2 mb-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600">
                                        Professional Services
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Business, Tax & Regulatory Advisory
                                    </p>
                                </div>

                                {/* Income Tax */}
                                <Link
                                    href="/services/income-tax"
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 group/item transition"
                                >
                                    <div className="p-2.5 bg-blue-50 text-blue-800 rounded-xl group-hover/item:bg-blue-900 group-hover/item:text-white transition">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900">
                                            Income Tax Consultancy
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            Corporate & Individual Tax Planning, Compliance & Return Filing
                                        </div>
                                    </div>
                                </Link>

                                {/* VAT */}
                                <Link
                                    href="/services/vat"
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50 group/item transition"
                                >
                                    <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl group-hover/item:bg-amber-500 group-hover/item:text-white transition">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-amber-700">
                                            VAT Consultancy
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            VAT Compliance, Return Filing, Book Keeping & Co-Efficient Declaration
                                        </div>
                                    </div>
                                </Link>

                                {/* RJSC */}
                                <Link
                                    href="/services/rjsc"
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 group/item transition"
                                >
                                    <div className="p-2.5 bg-indigo-50 text-indigo-800 rounded-xl group-hover/item:bg-indigo-900 group-hover/item:text-white transition">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            RJSC & Company Affairs
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            Registration, Return Filing, Share Transfer & Winding Up
                                        </div>
                                    </div>
                                </Link>

                                {/* BIDA */}
                                <Link
                                    href="/services/bida"
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50 group/item transition"
                                >
                                    <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl group-hover/item:bg-emerald-800 group-hover/item:text-white transition">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            BIDA & Related Services
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            Setup, Registration, Visa, Employment, Operations & Compliance
                                        </div>
                                    </div>
                                </Link>

                                {/* Licenses */}
                                <Link
                                    href="/services/licenses"
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 group/item transition"
                                >
                                    <div className="p-2.5 bg-purple-50 text-purple-800 rounded-xl group-hover/item:bg-purple-900 group-hover/item:text-white transition">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            Licenses & Certificates
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            IRC, ERC, Trade License, Fire, Environment, Factory, ISO & More
                                        </div>
                                    </div>
                                </Link>

                                {/* Others */}
                                <Link
                                    href="/services/others"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 group/item transition"
                                >
                                    <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl group-hover/item:bg-slate-900 group-hover/item:text-white transition">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </div>
                                    <div className="font-bold text-slate-900">
                                        Other Services
                                    </div>
                                </Link>

                            </div>
                        </div>

                        {/* ================= ACT & RULES ================= */}
                        <div className="relative group">

                            <button
                                type="button"
                                className="flex items-center gap-1.5 px-3 py-7 rounded-xl hover:text-[#11244e] transition"
                            >
                                <Scale className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844]" />
                                <span>Act & Rules</span>
                                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
                            </button>

                            <div className="absolute top-[82px] left-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">

                                {/* Income Tax */}
                                <div className="relative group/sub">

                                    <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 hover:text-[#11244e] cursor-pointer">
                                        <span className="font-semibold">
                                            Income Tax
                                        </span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>

                                    <div className="absolute top-0 left-full ml-1 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">

                                        <Link
                                            href="/act-rules/income-tax/act-2023"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            Income Tax Act, 2023
                                        </Link>

                                        <Link
                                            href="/act-rules/income-tax/tds-rules-2026"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            TDS Rules, 2026
                                        </Link>

                                        <Link
                                            href="/act-rules/income-tax/sro"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            SROs
                                        </Link>

                                    </div>
                                </div>

                                {/* VAT */}
                                <div className="relative group/sub">

                                    <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 hover:text-[#11244e] cursor-pointer">
                                        <span className="font-semibold">
                                            VAT
                                        </span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>

                                    <div className="absolute top-0 left-full ml-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">

                                        <Link
                                            href="/act-rules/vat/act-2012"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            VAT Act, 2012
                                        </Link>

                                        <Link
                                            href="/act-rules/vat/rules-2016"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            VAT Rules, 2016
                                        </Link>

                                        <Link
                                            href="/act-rules/vat/forms"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            Forms
                                        </Link>

                                        <Link
                                            href="/act-rules/vat/sro"
                                            className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-blue-900"
                                        >
                                            SROs
                                        </Link>

                                    </div>
                                </div>

                                <Link
                                    href="/act-rules/customs"
                                    className="block px-4 py-3 font-semibold hover:bg-slate-50 hover:text-blue-900"
                                >
                                    Customs
                                </Link>

                                <Link
                                    href="/act-rules/labor-law"
                                    className="block px-4 py-3 font-semibold hover:bg-slate-50 hover:text-blue-900"
                                >
                                    Labor Law
                                </Link>

                            </div>
                        </div>

                        {/* GALLERY */}
                        <Link
                            href="/gallery"
                            className="group flex items-center gap-1.5 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Images className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844]" />
                            Gallery
                        </Link>

                        {/* ABOUT */}
                        <Link
                            href="/about"
                            className="group flex items-center gap-1.5 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844]" />
                            About Us
                        </Link>

                        {/* BLOG */}
                        <Link
                            href="/blog"
                            className="group flex items-center gap-1.5 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844]" />
                            Blog
                        </Link>

                        {/* SHOP */}
                        <Link
                            href="/shop"
                            className="flex items-center gap-1.5 px-3 py-3 rounded-xl bg-slate-50 text-[#11244e] hover:bg-amber-50 hover:text-amber-700 transition font-bold"
                        >
                            <ShoppingBag className="w-4 h-4 text-amber-500" />
                            Shop
                        </Link>

                        {/* CONTACT */}
                        <Link
                            href="/contact"
                            className="group flex items-center gap-1.5 px-3 py-3 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Phone className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844]" />
                            Contact
                        </Link>

                    </nav>

                    {/* ================= DASHBOARD ================= */}
                    <div className="hidden lg:flex items-center shrink-0">

                        <Link
                            href="/dashboard"
                            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#0c7844] hover:bg-emerald-50 transition-all duration-200 shadow-sm"
                        >
                            <div className="w-8 h-8 rounded-lg bg-[#11244e] text-white flex items-center justify-center group-hover:bg-[#0c7844] transition">
                                <User className="w-4 h-4" />
                            </div>

                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                    Account
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    Dashboard
                                </p>
                            </div>
                        </Link>

                    </div>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition shadow-sm"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                </div>

                {/* ================= MOBILE MENU ================= */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-slate-100 py-4 max-h-[calc(100vh-90px)] overflow-y-auto">

                        <div className="space-y-1">

                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Home className="w-5 h-5 text-[#0c7844]" />
                                Home
                            </Link>

                            <Link
                                href="/upcoming-courses"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-emerald-50"
                            >
                                <BookOpen className="w-5 h-5 text-emerald-600" />
                                Upcoming Courses
                            </Link>

                            {/* MOBILE CONSULTANCY */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => toggleMobileDropdown('services')}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    <span className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-blue-700" />
                                        Consultancy Services
                                    </span>

                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'services'
                                                ? 'rotate-180'
                                                : ''
                                            }`}
                                    />
                                </button>

                                {mobileActiveDropdown === 'services' && (
                                    <div className="ml-5 pl-4 border-l-2 border-emerald-500 space-y-1 py-2">

                                        <Link
                                            href="/services/income-tax"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-semibold"
                                        >
                                            Income Tax Consultancy
                                        </Link>

                                        <Link
                                            href="/services/vat"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-semibold"
                                        >
                                            VAT Consultancy
                                        </Link>

                                        <Link
                                            href="/services/rjsc"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-semibold"
                                        >
                                            RJSC & Company Affairs
                                        </Link>

                                        <Link
                                            href="/services/bida"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-semibold"
                                        >
                                            BIDA & Related Services
                                        </Link>

                                        <Link
                                            href="/services/licenses"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-semibold"
                                        >
                                            Licenses & Certificates
                                        </Link>

                                        <Link
                                            href="/services/others"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-semibold"
                                        >
                                            Other Services
                                        </Link>

                                    </div>
                                )}
                            </div>

                            {/* MOBILE ACT & RULES */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => toggleMobileDropdown('act-rules')}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    <span className="flex items-center gap-3">
                                        <Scale className="w-5 h-5 text-amber-600" />
                                        Act & Rules
                                    </span>

                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'act-rules'
                                                ? 'rotate-180'
                                                : ''
                                            }`}
                                    />
                                </button>

                                {mobileActiveDropdown === 'act-rules' && (
                                    <div className="ml-5 pl-4 border-l-2 border-amber-500 space-y-2 py-2">

                                        {/* Income Tax */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => toggleMobileSubDropdown('tax')}
                                                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold"
                                            >
                                                Income Tax
                                                <ChevronDown
                                                    className={`w-3.5 h-3.5 transition-transform ${mobileSubDropdown === 'tax'
                                                            ? 'rotate-180'
                                                            : ''
                                                        }`}
                                                />
                                            </button>

                                            {mobileSubDropdown === 'tax' && (
                                                <div className="pl-4 space-y-1 text-xs text-slate-600">
                                                    <Link
                                                        href="/act-rules/income-tax/act-2023"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        Income Tax Act, 2023
                                                    </Link>

                                                    <Link
                                                        href="/act-rules/income-tax/tds-rules-2026"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        TDS Rules, 2026
                                                    </Link>

                                                    <Link
                                                        href="/act-rules/income-tax/sro"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        SROs
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* VAT */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => toggleMobileSubDropdown('vat')}
                                                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold"
                                            >
                                                VAT
                                                <ChevronDown
                                                    className={`w-3.5 h-3.5 transition-transform ${mobileSubDropdown === 'vat'
                                                            ? 'rotate-180'
                                                            : ''
                                                        }`}
                                                />
                                            </button>

                                            {mobileSubDropdown === 'vat' && (
                                                <div className="pl-4 space-y-1 text-xs text-slate-600">

                                                    <Link
                                                        href="/act-rules/vat/act-2012"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        VAT Act, 2012
                                                    </Link>

                                                    <Link
                                                        href="/act-rules/vat/rules-2016"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        VAT Rules, 2016
                                                    </Link>

                                                    <Link
                                                        href="/act-rules/vat/forms"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        Forms
                                                    </Link>

                                                    <Link
                                                        href="/act-rules/vat/sro"
                                                        onClick={closeMobileMenu}
                                                        className="block py-2"
                                                    >
                                                        SROs
                                                    </Link>

                                                </div>
                                            )}
                                        </div>

                                        <Link
                                            href="/act-rules/customs"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-bold"
                                        >
                                            Customs
                                        </Link>

                                        <Link
                                            href="/act-rules/labor-law"
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-2.5 text-sm font-bold"
                                        >
                                            Labor Law
                                        </Link>

                                    </div>
                                )}
                            </div>

                            {/* Remaining Mobile Links */}

                            <Link
                                href="/gallery"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Images className="w-5 h-5 text-purple-600" />
                                Gallery
                            </Link>

                            <Link
                                href="/about"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Building2 className="w-5 h-5 text-blue-700" />
                                About Us
                            </Link>

                            <Link
                                href="/blog"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Newspaper className="w-5 h-5 text-indigo-600" />
                                Blog
                            </Link>

                            <Link
                                href="/shop"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-[#11244e] hover:bg-amber-50"
                            >
                                <ShoppingBag className="w-5 h-5 text-amber-500" />
                                Shop
                            </Link>

                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Phone className="w-5 h-5 text-emerald-600" />
                                Contact
                            </Link>

                            {/* Dashboard */}
                            <div className="pt-3 mt-2 border-t border-slate-100">

                                <Link
                                    href="/dashboard"
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#11244e] text-white font-bold"
                                >
                                    <User className="w-5 h-5" />
                                    Dashboard
                                </Link>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </header>
    );
}
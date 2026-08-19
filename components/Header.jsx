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
    Laptop,
} from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

    const toggleMobileDropdown = (key) => {
        setMobileActiveDropdown(
            mobileActiveDropdown === key ? null : key
        );
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileActiveDropdown(null);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">

            {/* Top Accent Line */}
            <div className="h-[3px] bg-gradient-to-r from-[#11244e] via-[#0c7844] to-[#d99b22]" />

            <div className="max-w-[1536px] mx-auto px-3 sm:px-4 lg:px-6">

                {/* ================= DESKTOP / MAIN HEADER ================= */}
                <div className="flex items-center justify-between min-h-[86px] gap-2 lg:gap-4">

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 shrink-0 group"
                    >
                        {/* Logo Box */}
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />

                            <Image
                                src="/logo.png"
                                alt="TaxLab Bangladesh Logo"
                                width={60}
                                height={60}
                                priority
                                className="relative w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Brand Text */}
                        <div className="flex flex-col justify-center leading-none">
                            <span className="text-[22px] sm:text-[25px] font-black tracking-[-0.04em] text-[#11244e]">
                                Tax<span className="text-[#0c7844]">Lab</span>
                            </span>

                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="h-[2px] w-4 bg-[#d99b22] rounded-full" />
                                <span className="text-[8px] sm:text-[9px] font-extrabold text-[#9a6a13] tracking-[0.18em] uppercase">
                                    Bangladesh
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 font-semibold text-[13px] xl:text-[14px] text-slate-700 whitespace-nowrap">

                        {/* 1. HOME */}
                        <Link
                            href="/"
                            className="group relative flex items-center gap-1 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition-all duration-200"
                        >
                            <Home className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] transition shrink-0" />
                            <span>Home</span>
                        </Link>

                        {/* 2. ABOUT US */}
                        <Link
                            href="/about"
                            className="group flex items-center gap-1 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] shrink-0" />
                            <span>About Us</span>
                        </Link>

                        {/* 3. CONSULTANCY (ALL DROPDOWN LINKS GO TO CONTACT) */}
                        <div className="relative group">
                            <Link
                                href="/contact"
                                className="flex items-center gap-1 px-2.5 py-7 rounded-xl hover:text-[#11244e] transition-all duration-200"
                            >
                                <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] shrink-0" />
                                <span>Consultancy</span>
                                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
                            </Link>

                            {/* Dropdown */}
                            <div className="absolute top-[82px] left-1/2 -translate-x-1/2 w-[420px] bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] p-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 whitespace-normal">
                                <Link href="/contact" className="block px-3 py-2 mb-1 hover:bg-slate-50 rounded-xl transition">
                                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600">
                                        Professional Services
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Business, Tax & Regulatory Advisory
                                    </p>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 group/item transition"
                                >
                                    <div className="p-2 bg-blue-50 text-blue-800 rounded-xl group-hover/item:bg-blue-900 group-hover/item:text-white transition shrink-0">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 text-sm">
                                            Income Tax Consultancy
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                            Corporate & Individual Tax Planning, Compliance & Return Filing
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50 group/item transition"
                                >
                                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl group-hover/item:bg-amber-500 group-hover/item:text-white transition shrink-0">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-amber-700 text-sm">
                                            VAT Consultancy
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                            VAT Compliance, Return Filing, Book Keeping & Co-Efficient Declaration
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50 group/item transition"
                                >
                                    <div className="p-2 bg-indigo-50 text-indigo-800 rounded-xl group-hover/item:bg-indigo-900 group-hover/item:text-white transition shrink-0">
                                        <Building2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">
                                            RJSC & Company Affairs
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                            Registration, Return Filing, Share Transfer & Winding Up
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 group/item transition"
                                >
                                    <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl group-hover/item:bg-emerald-800 group-hover/item:text-white transition shrink-0">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">
                                            BIDA & Related Services
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                            Setup & Registration, Visas & Employment, Operations & Logistics, Finance & Compliance & Support & Access
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 group/item transition"
                                >
                                    <div className="p-2 bg-purple-50 text-purple-800 rounded-xl group-hover/item:bg-purple-900 group-hover/item:text-white transition shrink-0">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">
                                            Licenses & Certificates
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                            IRC, ERC, trade License, Fire License, Environment License, Factory License, ISO Certificate, Credit Rating & other licenses and Certificates
                                        </div>
                                    </div>
                                </Link>


                                {/* Sofware Service */}


                                <Link
                                    href="/contact"
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 group/item transition"
                                >
                                    <div className="p-2 bg-purple-50 text-purple-800 rounded-xl group-hover/item:bg-purple-900 group-hover/item:text-white transition shrink-0">
                                        <Laptop className="w-4 h-4" /> {/* <--- Add icon here */}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">
                                            Software Services
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                            POS Software, Accounting Software, VAT Software
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 group/item transition"
                                >
                                    <div className="p-2 bg-slate-100 text-slate-600 rounded-xl group-hover/item:bg-slate-900 group-hover/item:text-white transition shrink-0">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </div>
                                    <div className="font-bold text-slate-900 text-sm">
                                        Other Services
                                    </div>
                                </Link>


                            </div>
                        </div>

                        {/* 4. COURSES */}
                        <Link
                            href="/upcoming-courses"
                            className="group relative flex items-center gap-1 px-2.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-[#0c7844] transition-all duration-200"
                        >
                            <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Courses</span>
                        </Link>

                        {/* 5. ACT & RULES */}
                        <div className="relative group">
                            <Link
                                href="/contact"
                                className="flex items-center gap-1 px-2.5 py-7 rounded-xl hover:text-[#11244e] transition"
                            >
                                <Scale className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] shrink-0" />
                                <span>Act & Rules</span>
                                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform shrink-0" />
                            </Link>

                            <div className="absolute top-[82px] left-0 w-60 bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 whitespace-normal">
                                <div className="relative group/sub">
                                    <Link href="/contact" className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 hover:text-[#11244e] cursor-pointer">
                                        <span className="font-semibold text-sm">Income Tax</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                    <div className="absolute top-0 left-full ml-1 w-60 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">Income Tax Act, 2023</Link>
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">TDS Rules, 2026</Link>
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">SROs</Link>
                                    </div>
                                </div>

                                <div className="relative group/sub">
                                    <Link href="/contact" className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 hover:text-[#11244e] cursor-pointer">
                                        <span className="font-semibold text-sm">VAT</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                    <div className="absolute top-0 left-full ml-1 w-60 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">VAT Act, 2012</Link>
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">VAT Rules, 2016</Link>
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">Forms</Link>
                                        <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-blue-900">SROs</Link>
                                    </div>
                                </div>

                                <Link href="/contact" className="block px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 hover:text-blue-900">Customs</Link>
                                <Link href="/contact" className="block px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 hover:text-blue-900">Labor Law</Link>
                            </div>
                        </div>

                        {/* 6. GALLERY */}
                        <Link
                            href="/gallery"
                            className="group flex items-center gap-1 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Images className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] shrink-0" />
                            <span>Gallery</span>
                        </Link>

                        {/* 7. BLOG */}
                        <Link
                            href="/blog"
                            className="group flex items-center gap-1 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] shrink-0" />
                            <span>Blog</span>
                        </Link>

                        {/* 8. SHOP */}
                        <Link
                            href="/shop"
                            className="flex items-center gap-1 px-2.5 py-2.5 rounded-xl bg-slate-50 text-[#11244e] hover:bg-amber-50 hover:text-amber-700 transition font-bold"
                        >
                            <ShoppingBag className="w-4 h-4 text-amber-500 shrink-0" />
                            <span>Shop</span>
                        </Link>

                        {/* 9. CONTACT */}
                        <Link
                            href="/contact"
                            className="group flex items-center gap-1 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#11244e] transition"
                        >
                            <Phone className="w-4 h-4 text-slate-400 group-hover:text-[#0c7844] shrink-0" />
                            <span>Contact</span>
                        </Link>

                    </nav>

                    {/* ================= ACCOUNT / DASHBOARD (RIGHT SIDE) ================= */}
                    <div className="hidden lg:flex items-center shrink-0">
                        <Link
                            href="/dashboard"
                            className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:border-[#0c7844] hover:bg-emerald-50 transition-all duration-200 shadow-sm"
                        >
                            <div className="w-7 h-7 rounded-lg bg-[#11244e] text-white flex items-center justify-center group-hover:bg-[#0c7844] transition shrink-0">
                                <User className="w-3.5 h-3.5" />
                            </div>

                            <div className="text-left">
                                <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-none">
                                    Account
                                </p>
                                <p className="text-xs font-bold text-slate-800 leading-tight mt-0.5">
                                    Dashboard
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition shadow-sm"
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
                                href="/about"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Building2 className="w-5 h-5 text-slate-500" />
                                About Us
                            </Link>

                            <div>
                                <button
                                    type="button"
                                    onClick={() => toggleMobileDropdown('services')}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    <span className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-blue-700" />
                                        Consultancy
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'services' ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {mobileActiveDropdown === 'services' && (
                                    <div className="ml-5 pl-4 border-l-2 border-emerald-500 space-y-1 py-2">
                                        <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Income Tax Consultancy</Link>
                                        <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">VAT Consultancy</Link>
                                        <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">RJSC & Company Affairs</Link>
                                        <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">BIDA Services</Link>
                                        <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Licenses & Certificates</Link>
                                        <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Other Services</Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/upcoming-courses"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-emerald-50"
                            >
                                <BookOpen className="w-5 h-5 text-emerald-600" />
                                Courses
                            </Link>

                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Scale className="w-5 h-5 text-slate-500" />
                                Act & Rules
                            </Link>

                            <Link
                                href="/gallery"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Images className="w-5 h-5 text-slate-500" />
                                Gallery
                            </Link>

                            <Link
                                href="/blog"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Newspaper className="w-5 h-5 text-slate-500" />
                                Blog
                            </Link>

                            <Link
                                href="/shop"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-amber-50"
                            >
                                <ShoppingBag className="w-5 h-5 text-amber-500" />
                                Shop
                            </Link>

                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Phone className="w-5 h-5 text-slate-500" />
                                Contact
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
}
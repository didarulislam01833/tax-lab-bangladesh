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
    MoreHorizontal
} from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
    const [mobileSubDropdown, setMobileSubDropdown] = useState(null);

    const toggleMobileDropdown = (key) => {
        setMobileActiveDropdown(mobileActiveDropdown === key ? null : key);
        setMobileSubDropdown(null);
    };

    const toggleMobileSubDropdown = (key) => {
        setMobileSubDropdown(mobileSubDropdown === key ? null : key);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <Image
                            src="/logo.png"
                            alt="TaxLab Bangladesh Logo"
                            width={46}
                            height={46}
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                                Tax<span className="text-blue-900">Lab</span>
                            </span>
                            <span className="text-[10px] font-bold text-amber-600 tracking-wider uppercase mt-1">
                                Bangladesh
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-semibold text-slate-700 text-sm">

                        {/* Home */}
                        <Link href="/" className="hover:text-blue-900 transition-colors py-2">
                            Home
                        </Link>

                        {/* Upcoming Courses */}
                        <Link href="/upcoming-courses" className="hover:text-blue-900 transition-colors py-2">
                            Upcoming Courses
                        </Link>

                        {/* Consultancy Services Mega Dropdown */}
                        <div className="relative group py-6">
                            <button className="flex items-center gap-1 hover:text-blue-900 transition-colors py-2">
                                <span>Consultancy Services</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                            </button>

                            <div className="absolute top-full -left-20 w-[420px] bg-white border border-slate-100 rounded-2xl shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform group-hover:translate-y-0 translate-y-2 grid grid-cols-1 gap-1">

                                <Link href="/services/income-tax" className="p-3 hover:bg-slate-50 rounded-xl transition flex items-start gap-3 group/item">
                                    <div className="p-2 bg-blue-50 text-blue-900 rounded-lg group-hover/item:bg-blue-900 group-hover/item:text-white transition">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 transition">Income Tax Consultancy</div>
                                        <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">Corporate & Individual Tax Planning & Return Filing</div>
                                    </div>
                                </Link>

                                <Link href="/services/vat" className="p-3 hover:bg-slate-50 rounded-xl transition flex items-start gap-3 group/item">
                                    <div className="p-2 bg-amber-50 text-amber-600 rounded-lg group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 transition">VAT Consultancy</div>
                                        <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">VAT Compliance, Return Filing, Book Keeping & Co-Efficient Declaration</div>
                                    </div>
                                </Link>

                                <Link href="/services/rjsc" className="p-3 hover:bg-slate-50 rounded-xl transition flex items-start gap-3 group/item">
                                    <div className="p-2 bg-indigo-50 text-indigo-900 rounded-lg group-hover/item:bg-indigo-900 group-hover/item:text-white transition">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 transition">RJSC & Company Affairs</div>
                                        <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">Registration, Return Filing, Share Transfer & Winding Up</div>
                                    </div>
                                </Link>

                                <Link href="/services/bida" className="p-3 hover:bg-slate-50 rounded-xl transition flex items-start gap-3 group/item">
                                    <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg group-hover/item:bg-emerald-800 group-hover/item:text-white transition">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 transition">BIDA & Related Services</div>
                                        <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">Setup & Registration, Visas & Employment, Operations & Logistics, Finance & Compliance & Support & Access</div>
                                    </div>
                                </Link>

                                <Link href="/services/licenses" className="p-3 hover:bg-slate-50 rounded-xl transition flex items-start gap-3 group/item">
                                    <div className="p-2 bg-purple-50 text-purple-900 rounded-lg group-hover/item:bg-purple-900 group-hover/item:text-white transition">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 transition">Licenses & Certificates</div>
                                        <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">IRC, ERC, trade License, Fire License, Environment License, Factory License, ISO Certificate, Credit Rating & other licenses and Certificates</div>
                                    </div>
                                </Link>

                                <Link href="/services/others" className="p-3 hover:bg-slate-50 rounded-xl transition flex items-start gap-3 group/item">
                                    <div className="p-2 bg-slate-100 text-slate-700 rounded-lg group-hover/item:bg-slate-900 group-hover/item:text-white transition">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </div>
                                    <div className="self-center">
                                        <div className="font-bold text-slate-900 group-hover/item:text-blue-900 transition">Other Services</div>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        {/* Act & Rules Nested Multi-level Dropdown */}
                        <div className="relative group py-6">
                            <button className="flex items-center gap-1 hover:text-blue-900 transition-colors py-2">
                                <span>Act & Rules</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                            </button>

                            <div className="absolute top-full left-0 w-60 bg-white border border-slate-100 rounded-2xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform group-hover:translate-y-0 translate-y-2">

                                {/* Nested Income Tax Sub-menu */}
                                <div className="relative group/sub">
                                    <div className="flex items-center justify-between px-5 py-2.5 hover:bg-slate-50 hover:text-blue-900 cursor-pointer transition">
                                        <span>Income Tax</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    <div className="absolute top-0 left-full w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl py-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ml-1">
                                        <Link href="/act-rules/income-tax/act-2023" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">Income Tax Act, 2023</Link>
                                        <Link href="/act-rules/income-tax/tds-rules-2026" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">TDS Rules, 2026</Link>
                                        <Link href="/act-rules/income-tax/sro" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">SROs</Link>
                                    </div>
                                </div>

                                {/* Nested VAT Sub-menu */}
                                <div className="relative group/sub">
                                    <div className="flex items-center justify-between px-5 py-2.5 hover:bg-slate-50 hover:text-blue-900 cursor-pointer transition">
                                        <span>VAT</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    <div className="absolute top-0 left-full w-72 bg-white border border-slate-100 rounded-2xl shadow-2xl py-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ml-1">
                                        <Link href="/act-rules/vat/act-2012" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">Value Added Tax & Supplementary Duty Act, 2012</Link>
                                        <Link href="/act-rules/vat/rules-2016" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">Value Added Tax & Supplementary Duty Rules, 2016</Link>
                                        <Link href="/act-rules/vat/forms" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">Forms</Link>
                                        <Link href="/act-rules/vat/sro" className="block px-5 py-2 hover:bg-slate-50 hover:text-blue-900">SROs</Link>
                                    </div>
                                </div>

                                <Link href="/act-rules/customs" className="block px-5 py-2.5 hover:bg-slate-50 hover:text-blue-900 transition">
                                    Customs
                                </Link>

                                <Link href="/act-rules/labor-law" className="block px-5 py-2.5 hover:bg-slate-50 hover:text-blue-900 transition">
                                    Labor Law
                                </Link>

                            </div>
                        </div>

                        {/* Gallery */}
                        <Link href="/gallery" className="hover:text-blue-900 transition-colors py-2">
                            Gallery
                        </Link>

                        {/* About Us */}
                        <Link href="/about" className="hover:text-blue-900 transition-colors py-2">
                            About Us
                        </Link>

                        {/* Blog */}
                        <Link href="/blog" className="hover:text-blue-900 transition-colors py-2">
                            Blog
                        </Link>

                        {/* Shop (Nice Icon) */}
                        <Link href="/shop" className="flex items-center gap-1.5 text-blue-900 hover:text-amber-600 font-bold transition-colors py-2">
                            <ShoppingBag className="w-4 h-4 text-amber-500" />
                            <span>Shop</span>
                        </Link>

                        {/* Contact */}
                        <Link href="/contact" className="hover:text-blue-900 transition-colors py-2">
                            Contact
                        </Link>

                    </nav>

                    {/* Right Action Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-blue-900 font-semibold text-sm rounded-xl transition"
                        >
                            <User className="w-4 h-4" />
                            <span>Dashboard</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Navigation Accordion */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-slate-100 space-y-2 max-h-[80vh] overflow-y-auto">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 font-semibold text-slate-700">Home</Link>
                        <Link href="/upcoming-courses" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 font-semibold text-slate-700">Upcoming Courses</Link>

                        {/* Consultancy Services Mobile Accordion */}
                        <div>
                            <button onClick={() => toggleMobileDropdown('services')} className="w-full flex items-center justify-between px-4 py-2 font-semibold text-slate-700">
                                <span>Consultancy Services</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'services' ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileActiveDropdown === 'services' && (
                                <div className="pl-6 space-y-2 my-2 border-l-2 border-blue-900 ml-4">
                                    <Link href="/services/income-tax" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">Income Tax Consultancy</Link>
                                    <Link href="/services/vat" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">VAT Consultancy</Link>
                                    <Link href="/services/rjsc" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">RJSC & Company Affairs</Link>
                                    <Link href="/services/bida" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">BIDA & Related Services</Link>
                                    <Link href="/services/licenses" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">Licenses & Certificates</Link>
                                    <Link href="/services/others" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">Other Services</Link>
                                </div>
                            )}
                        </div>

                        {/* Act & Rules Mobile Accordion */}
                        <div>
                            <button onClick={() => toggleMobileDropdown('act-rules')} className="w-full flex items-center justify-between px-4 py-2 font-semibold text-slate-700">
                                <span>Act & Rules</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveDropdown === 'act-rules' ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileActiveDropdown === 'act-rules' && (
                                <div className="pl-6 space-y-2 my-2 border-l-2 border-amber-500 ml-4">

                                    {/* Income Tax Sub Mobile */}
                                    <div>
                                        <button onClick={() => toggleMobileSubDropdown('tax')} className="w-full flex items-center justify-between text-sm font-bold text-slate-800">
                                            <span>Income Tax</span>
                                            <ChevronDown className="w-3 h-3" />
                                        </button>
                                        {mobileSubDropdown === 'tax' && (
                                            <div className="pl-4 space-y-1 mt-1 text-xs text-slate-600">
                                                <Link href="/act-rules/income-tax/act-2023" onClick={() => setMobileMenuOpen(false)} className="block py-1">Income Tax Act, 2023</Link>
                                                <Link href="/act-rules/income-tax/tds-rules-2026" onClick={() => setMobileMenuOpen(false)} className="block py-1">TDS Rules, 2026</Link>
                                                <Link href="/act-rules/income-tax/sro" onClick={() => setMobileMenuOpen(false)} className="block py-1">SROs</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* VAT Sub Mobile */}
                                    <div>
                                        <button onClick={() => toggleMobileSubDropdown('vat')} className="w-full flex items-center justify-between text-sm font-bold text-slate-800">
                                            <span>VAT</span>
                                            <ChevronDown className="w-3 h-3" />
                                        </button>
                                        {mobileSubDropdown === 'vat' && (
                                            <div className="pl-4 space-y-1 mt-1 text-xs text-slate-600">
                                                <Link href="/act-rules/vat/act-2012" onClick={() => setMobileMenuOpen(false)} className="block py-1">VAT Act, 2012</Link>
                                                <Link href="/act-rules/vat/rules-2016" onClick={() => setMobileMenuOpen(false)} className="block py-1">VAT Rules, 2016</Link>
                                                <Link href="/act-rules/vat/forms" onClick={() => setMobileMenuOpen(false)} className="block py-1">Forms</Link>
                                                <Link href="/act-rules/vat/sro" onClick={() => setMobileMenuOpen(false)} className="block py-1">SROs</Link>
                                            </div>
                                        )}
                                    </div>

                                    <Link href="/act-rules/customs" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">Customs</Link>
                                    <Link href="/act-rules/labor-law" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800">Labor Law</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 font-semibold text-slate-700">Gallery</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 font-semibold text-slate-700">About Us</Link>
                        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 font-semibold text-slate-700">Blog</Link>
                        <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-4 py-2 font-bold text-blue-900">
                            <ShoppingBag className="w-4 h-4 text-amber-500" />
                            <span>Shop</span>
                        </Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 font-semibold text-slate-700">Contact</Link>
                    </div>
                )}

            </div>
        </header>
    );
}
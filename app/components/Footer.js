'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#11244e] text-white py-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="TaxLab Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black">Tax<span className="text-[#0c7844]">Lab</span></h4>
                                <p className="text-slate-400 text-xs">Bangladesh</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm">Premier Tax, VAT & Legal Advisory Firm in Bangladesh</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold mb-4 text-white">Quick Links</h5>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/income-tax" className="hover:text-white transition">Income Tax</Link></li>
                            <li><Link href="/vat" className="hover:text-white transition">VAT</Link></li>
                            <li><Link href="/upcoming-courses" className="hover:text-white transition">Upcoming Courses</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h5 className="font-bold mb-4 text-white">Our Services</h5>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/income-tax" className="hover:text-white transition">Income Tax Advisory</Link></li>
                            <li><Link href="/vat" className="hover:text-white transition">VAT & VDS Consultancy</Link></li>
                            <li><Link href="/customs" className="hover:text-white transition">Customs & Trade Law</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">All Services →</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="font-bold mb-4 text-white">Get in Touch</h5>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Dhaka, Bangladesh
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@taxlabbd.com
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +880 17XX-XXXXXX
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} TaxLab Bangladesh. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
import React from 'react';

export default function Header() {
    return (
        <header className="w-full font-sans shadow-sm">
            <div className="bg-[#0B192C] text-white text-xs py-2 px-6 flex flex-wrap justify-between items-center">
                <div>
                    <span>📞 Mobile: 01960-226722 | 01726-415551</span>
                    <span className="ml-4 hidden md:inline">✉️ Email: taxlabbangladesh@gmail.com</span>
                </div>
                <div>
                    <span className="bg-emerald-600 px-2 py-0.5 rounded text-[11px] font-semibold">Tax Lawyer</span>
                </div>
            </div>

            <nav className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#1E3E62] rounded-full flex items-center justify-center text-white font-bold text-xl shadow">
                        TL
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight leading-none">TaxLab</h1>
                        <span className="text-xs text-[#008B8B] font-medium tracking-wider">BANGLADESH</span>
                    </div>
                </div>

                <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    <li className="hover:text-[#008B8B] cursor-pointer transition">Home</li>
                    <li className="hover:text-[#008B8B] cursor-pointer transition">Training Subjects</li>
                    <li className="hover:text-[#008B8B] cursor-pointer transition">About Us</li>
                    <li className="hover:text-[#008B8B] cursor-pointer transition">Contact</li>
                </ul>

                <button className="bg-[#1E3E62] hover:bg-[#0B192C] text-white text-sm px-5 py-2.5 rounded-lg shadow font-medium transition">
                    Enroll Now
                </button>
            </nav>
        </header>
    );
}
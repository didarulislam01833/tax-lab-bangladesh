import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#0B192C] text-gray-400 py-10 px-6 border-t border-gray-800 text-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-white text-lg font-bold">TaxLab Bangladesh</h3>
                    <p className="text-xs mt-1">Empowering professionals through corporate legal & tax training.</p>
                </div>
                <div className="text-center md:text-right">
                    <p>Contact: 01960-226722 | 01726-415551</p>
                    <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()} TaxLab Bangladesh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
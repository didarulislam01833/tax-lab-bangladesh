import React from 'react';

const subjects = [
    {
        title: "VAT (Value Added Tax)",
        code: "VAT",
        desc: "Complete practical guide on VAT registration, return submission, and compliance management.",
        icon: "📊"
    },
    {
        title: "Income Tax",
        code: "TAX",
        desc: "In-depth training on corporate and individual tax assessment, return preparation, and law.",
        icon: "📝"
    },
    {
        title: "RJSC Compliance",
        code: "RJSC",
        desc: "Company formation, annual return filing, and corporate legal compliance with RJSC.",
        icon: "📜"
    },
    {
        title: "Customs & Bond",
        code: "C&B",
        desc: "Comprehensive insights into import-export customs clearance and bond licensing operations.",
        icon: "🚢"
    }
];

export default function Subjects() {
    return (
        <section className="py-20 bg-[#F4F6F9] px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900">Training Subjects</h2>
                    <p className="text-gray-600 mt-2">Master the core pillars of corporate law and taxation in Bangladesh</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {subjects.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <span className="text-xs font-bold text-[#008B8B] tracking-widest uppercase">{item.code}</span>
                            <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
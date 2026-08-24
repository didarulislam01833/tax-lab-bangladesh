'use client';

import { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Sparkles,
    CheckCircle2,
    Loader2,
    AlertCircle
} from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        category: 'Consultancy Service',
        message: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Send data to FormSubmit.co
            const formSubmitData = new FormData();
            formSubmitData.append('_subject', `New Contact Inquiry: ${formData.category}`);
            formSubmitData.append('_replyto', formData.email || 'taxlabbangladesh@gmail.com');
            formSubmitData.append('_template', 'table');
            formSubmitData.append('Full Name', formData.fullName);
            formSubmitData.append('Phone', formData.phone);
            formSubmitData.append('Email', formData.email || 'N/A');
            formSubmitData.append('Category', formData.category);
            formSubmitData.append('Message', formData.message);

            const response = await fetch('https://formsubmit.co/ajax/taxlabbangladesh@gmail.com', {
                method: 'POST',
                body: formSubmitData,
            });

            const result = await response.json();

            if (result.success === 'true' || result.success === true) {
                setSubmitted(true);
                setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    category: 'Consultancy Service',
                    message: ''
                });
                setTimeout(() => setSubmitted(false), 10000);
            } else {
                setSubmitError('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Submit Error:', error);
            setSubmitError('Network error. Please check your internet connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

            {/* Hero Header */}
            <section className="relative py-20 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white">
                <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#0c7844]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-emerald-400" /> Get in Touch
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
                        Let&apos;s Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Tax & VAT Needs</span>
                    </h1>
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                        Have questions regarding Tax Return Filing, VAT Compliance, or Training Programs? Reach out to our advisory team.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Contact Details */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-extrabold text-slate-900">TaxLab Bangladesh</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Our consultancy desk is open for individual tax returns, corporate VAT management, and customs advisory.
                            </p>
                        </div>

                        <div className="space-y-6">

                            {/* Address */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition">
                                <div className="w-12 h-12 bg-emerald-50 text-[#0c7844] rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 text-base">Office Address</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        House-01, Road-16, Sector-07, Uttara, Dhaka-1230
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition">
                                <div className="w-12 h-12 bg-blue-50 text-[#11244e] rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 text-base">Phone & WhatsApp</h4>
                                    <p className="text-slate-600 text-sm">+880 1960226722</p>
                                    <p className="text-xs text-slate-400">Available Mon - Sat (9:00 AM - 8:00 PM)</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition">
                                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 text-base">Email Us</h4>

                                    <p className="text-slate-600 text-sm">taxlabbangladesh@gmail.com</p>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition">
                                <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 text-base">Working Hours</h4>
                                    <p className="text-slate-600 text-sm">Saturday – Thursday: 9:30 AM – 7:00 PM</p>
                                    <p className="text-slate-400 text-xs">Friday: Closed (Online Consultation by Appointment)</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl relative">

                        {submitted ? (
                            <div className="py-16 text-center space-y-4">
                                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                                <p className="text-slate-600 max-w-md mx-auto text-sm">
                                    Thank you for reaching out. One of our consultants will contact you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h3>
                                    <p className="text-slate-600 text-sm">Fill out the form below and we will respond promptly.</p>
                                </div>

                                {submitError && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                        <p className="text-sm text-red-700">{submitError}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="e.g. Tanvir Ahmed"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0c7844] focus:ring-2 focus:ring-[#0c7844]/20 transition text-sm"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+880 1711-000000"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0c7844] focus:ring-2 focus:ring-[#0c7844]/20 transition text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0c7844] focus:ring-2 focus:ring-[#0c7844]/20 transition text-sm"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Inquiry Category</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0c7844] focus:ring-2 focus:ring-[#0c7844]/20 transition text-sm text-slate-700 bg-white"
                                        >
                                            <option value="Consultancy Service">Consultancy Service</option>
                                            <option value="Training">Training</option>
                                            <option value="Income Tax">Income Tax</option>
                                            <option value="VAT">VAT</option>
                                            <option value="Customs">Customs</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message / Details *</label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Briefly describe your requirements or inquiry..."
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0c7844] focus:ring-2 focus:ring-[#0c7844]/20 transition text-sm resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#11244e] hover:bg-[#0c7844] disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl transition duration-300 shadow-lg flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" /> Submit Inquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        )}

                    </div>

                </div>
            </section>

        </main>
    );
}
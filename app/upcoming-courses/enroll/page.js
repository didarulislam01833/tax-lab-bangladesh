'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft,
    User,
    Mail,
    Phone,
    CreditCard,
    MessageSquare,
    BookOpen,
    CheckCircle2,
    Loader2,
    AlertCircle,
    Building2,
    Wallet
} from 'lucide-react';

function EnrollForm() {
    const searchParams = useSearchParams();
    const courseName = searchParams.get('course') || 'Individual Income Tax Return Filling';

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        courseName: courseName,
        bkashAccountNumber: '',
        bkashTrxID: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = 'Name must be at least 3 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^01[0-9]{9}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
            newErrors.phone = 'Please enter a valid Bangladeshi phone number (01XXXXXXXXX)';
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }

        if (!formData.bkashAccountNumber.trim()) {
            newErrors.bkashAccountNumber = 'Bkash account number is required';
        } else if (!/^01[0-9]{9}$/.test(formData.bkashAccountNumber.replace(/[-\s]/g, ''))) {
            newErrors.bkashAccountNumber = 'Please enter a valid Bkash account number (01XXXXXXXXX)';
        }

        if (!formData.bkashTrxID.trim()) {
            newErrors.bkashTrxID = 'Bkash Transaction ID is required';
        }

        return newErrors;
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        try {
            // Send data to FormSubmit.co
            const formSubmitData = new FormData();
            formSubmitData.append('_subject', `New Course Enrollment: ${formData.courseName}`);
            formSubmitData.append('_replyto', formData.email);
            formSubmitData.append('_template', 'table');
            formSubmitData.append('Full Name', formData.fullName);
            formSubmitData.append('Email', formData.email);
            formSubmitData.append('Phone', formData.phone);
            formSubmitData.append('Company Name', formData.companyName);
            formSubmitData.append('Course Name', formData.courseName);
            formSubmitData.append('Bkash Account Number', formData.bkashAccountNumber);
            formSubmitData.append('Bkash Transaction ID', formData.bkashTrxID);
            formSubmitData.append('Message', formData.message || 'N/A');

            const response = await fetch('https://formsubmit.co/ajax/taxlabbangladesh@gmail.com', {
                method: 'POST',
                body: formSubmitData,
            });

            const result = await response.json();

            if (result.success === 'true' || result.success === true) {
                setSubmitSuccess(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    courseName: courseName,
                    bkashAccountNumber: '',
                    bkashTrxID: '',
                    message: ''
                });
            } else {
                setSubmitError('Failed to submit. Please try again.');
            }
        } catch (error) {
            console.error('Submit Error:', error);
            setSubmitError('Network error. Please check your internet connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f6f8fb] text-slate-900">

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#0f2347] text-white">

                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">

                    {/* Back Button */}
                    <Link
                        href="/upcoming-courses"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Courses
                    </Link>

                    <div className="max-w-3xl">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                            <BookOpen className="w-4 h-4" />
                            Course Enrollment
                        </div>

                        {/* Heading */}
                        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                            Enroll in Your Course
                        </h1>

                        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                            Complete the form below to secure your seat. Our team will
                            contact you with course details and payment confirmation.
                        </p>

                    </div>

                </div>
            </section>

            {/* =====================================================
                ENROLLMENT FORM SECTION
            ===================================================== */}
            <section className="py-10 sm:py-14 px-4 sm:px-8 lg:px-10">

                <div className="max-w-3xl mx-auto">

                    {/* Success Message */}
                    {submitSuccess && (
                        <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-emerald-800 text-lg">
                                        Enrollment Submitted Successfully!
                                    </h3>
                                    <p className="text-sm text-emerald-700 mt-1">
                                        Thank you for your enrollment. Our team will verify your
                                        Bkash payment and contact you soon with course details.
                                    </p>
                                    <button
                                        onClick={() => setSubmitSuccess(false)}
                                        className="mt-3 text-sm font-bold text-emerald-700 hover:text-emerald-800 underline"
                                    >
                                        Enroll Another Student
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {submitError && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                <p className="text-sm text-red-700">{submitError}</p>
                            </div>
                        </div>
                    )}

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

                        {/* Form Header */}
                        <div className="p-6 bg-gradient-to-r from-[#0f2347] to-[#1a3a6b] text-white">
                            <h2 className="text-lg font-bold">Student Information</h2>
                            <p className="text-xs text-slate-300 mt-1">
                                All fields marked with * are required
                            </p>
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">

                            {/* Course Name (Auto-filled) */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Course Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600" />
                                    <input
                                        type="text"
                                        name="courseName"
                                        value={formData.courseName}
                                        disabled
                                        className="
                                            w-full pl-10 pr-4 py-3
                                            bg-slate-50
                                            border border-slate-200
                                            rounded-xl
                                            text-sm font-medium text-slate-700
                                            cursor-not-allowed
                                        "
                                    />
                                </div>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter student's full name"
                                        className={`
                                            w-full pl-10 pr-4 py-3
                                            border rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            ${errors.fullName
                                                ? 'border-red-300 focus:ring-red-200 bg-red-50'
                                                : 'border-slate-300 focus:ring-emerald-200 focus:border-emerald-400'
                                            }
                                        `}
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        className={`
                                            w-full pl-10 pr-4 py-3
                                            border rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            ${errors.email
                                                ? 'border-red-300 focus:ring-red-200 bg-red-50'
                                                : 'border-slate-300 focus:ring-emerald-200 focus:border-emerald-400'
                                            }
                                        `}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="01XXXXXXXXX"
                                        className={`
                                            w-full pl-10 pr-4 py-3
                                            border rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            ${errors.phone
                                                ? 'border-red-300 focus:ring-red-200 bg-red-50'
                                                : 'border-slate-300 focus:ring-emerald-200 focus:border-emerald-400'
                                            }
                                        `}
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Enter company or organization name"
                                        className={`
                                            w-full pl-10 pr-4 py-3
                                            border rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            ${errors.companyName
                                                ? 'border-red-300 focus:ring-red-200 bg-red-50'
                                                : 'border-slate-300 focus:ring-emerald-200 focus:border-emerald-400'
                                            }
                                        `}
                                    />
                                </div>
                                {errors.companyName && (
                                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.companyName}
                                    </p>
                                )}
                            </div>

                            {/* Bkash Account Number */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Bkash Account Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="tel"
                                        name="bkashAccountNumber"
                                        value={formData.bkashAccountNumber}
                                        onChange={handleChange}
                                        placeholder="01XXXXXXXXX"
                                        className={`
                                            w-full pl-10 pr-4 py-3
                                            border rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            ${errors.bkashAccountNumber
                                                ? 'border-red-300 focus:ring-red-200 bg-red-50'
                                                : 'border-slate-300 focus:ring-emerald-200 focus:border-emerald-400'
                                            }
                                        `}
                                    />
                                </div>
                                {errors.bkashAccountNumber && (
                                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.bkashAccountNumber}
                                    </p>
                                )}
                            </div>

                            {/* Bkash Transaction ID */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Bkash Transaction ID <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="bkashTrxID"
                                        value={formData.bkashTrxID}
                                        onChange={handleChange}
                                        placeholder="Enter Bkash Transaction ID"
                                        className={`
                                            w-full pl-10 pr-4 py-3
                                            border rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            ${errors.bkashTrxID
                                                ? 'border-red-300 focus:ring-red-200 bg-red-50'
                                                : 'border-slate-300 focus:ring-emerald-200 focus:border-emerald-400'
                                            }
                                        `}
                                    />
                                </div>
                                {errors.bkashTrxID && (
                                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.bkashTrxID}
                                    </p>
                                )}
                            </div>

                            {/* Message (Optional) */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Message / Special Note <span className="text-slate-400">(Optional)</span>
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Any special requirements or questions..."
                                        rows="4"
                                        className="
                                            w-full pl-10 pr-4 py-3
                                            border border-slate-300
                                            rounded-xl
                                            text-sm
                                            transition-all
                                            focus:outline-none focus:ring-2
                                            focus:ring-emerald-200 focus:border-emerald-400
                                            resize-none
                                        "
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    w-full py-4
                                    bg-[#0f2347]
                                    hover:bg-emerald-600
                                    disabled:bg-slate-400
                                    disabled:cursor-not-allowed
                                    text-white
                                    rounded-xl
                                    text-sm font-bold
                                    transition-all
                                    flex items-center justify-center gap-2
                                    shadow-lg
                                "
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Enrollment'
                                )}
                            </button>

                        </form>

                    </div>

                    {/* Help Note */}
                    <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                        <p className="text-xs text-amber-800 leading-relaxed">
                            <strong>Note:</strong> After submitting, our team will verify your
                            Bkash payment within 24 hours. You will receive a confirmation
                            email with course access details.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default function EnrollPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#f6f8fb]">
                <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
            </div>
        }>
            <EnrollForm />
        </Suspense>
    );
}
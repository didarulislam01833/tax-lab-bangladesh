import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

// Root level components import (using @ alias)
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'TaxLab Bangladesh - Premier Tax, VAT & Legal Advisory',
    description: 'Expert Income Tax, VAT, Customs and Corporate Legal advisory services in Bangladesh.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-slate-50 text-slate-900 antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
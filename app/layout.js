import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

// Import the client components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
    title: 'TaxLab Bangladesh - Premier Tax, VAT & Legal Advisory',
    description: 'Expert Income Tax, VAT, Customs and Corporate Legal advisory services in Bangladesh.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
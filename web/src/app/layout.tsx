import type { Metadata } from 'next';
import { Raleway, Work_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tsohle Digital and Systems Solutions',
    template: '%s | Tsohle Digital',
  },
  description:
    'We engineer operational systems that eliminate the hidden cost of manual work. CRM/ERP, fintech infrastructure, AI-augmented operations — built for South African businesses.',
  keywords: [
    'systems engineering South Africa',
    'CRM ERP South Africa',
    'business automation South Africa',
    'fintech platform South Africa',
    'SMME software South Africa',
    'operational systems',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Tsohle Digital and Systems Solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${workSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-dark text-text-primary font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

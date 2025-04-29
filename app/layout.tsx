import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// It's recommended to store your GA ID in an environment variable
// const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gaId = 'G-XXXXXXXXXX'; // Replace with your actual Google Analytics Measurement ID

export const metadata: Metadata = {
    // Basic metadata
    title: {
        default: 'Greysky Digital | MVP Development for Founders',
        template: '%s | Greysky Digital'
    },
    description:
        'Greysky helps founders build fully functional MVPs to market quickly. No BS, no bloat, just results.',

    // Keywords
    keywords: [
        'MVP development',
        'startup development',
        'technical agency',
        'rapid prototyping',
        'web development',
        'app development',
        'full stack web development'
    ],

    // Canonical URL
    metadataBase: new URL('https://greysky.io'),

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-video-preview': -1,
            'max-snippet': -1
        }
    },

    // Open Graph
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://greysky.io',
        title: 'Greysky Digital | MVP Development for Founders',
        description:
            'Ship your MVP while your competition is still in meetings. We build what you actually need right now.',
        siteName: 'Greysky Digital',
        images: [
            {
                url: '/og-image.jpg', // You'll need to create this image
                width: 1200,
                height: 630,
                alt: 'Greysky Digital - MVP Development Agency'
            }
        ]
    },

    // Twitter
    twitter: {
        card: 'summary_large_image',
        title: 'Greysky Digital | MVP Development for Founders',
        description:
            'Ship your MVP while your competition is still in meetings. We build what you actually need right now.',
        // images: ['/twitter-image.jpg'], // You'll need to create this image
        creator: '@greyskyio', // Replace with your Twitter handle
        site: '@greyskyio' // Replace with your Twitter handle
    },

    // Verification
    verification: {
        google: 'your-google-verification-code' // Replace with your Google verification code
    },

    // App information
    applicationName: 'Greysky Digital',
    authors: [{ name: 'Greysky Digital', url: 'https://greysky.io' }],
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    creator: 'Greysky Digital',
    publisher: 'Greysky Digital',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={inter.className}>
                {children}
                {gaId && <GoogleAnalytics gaId={gaId} />}
            </body>
        </html>
    );
}

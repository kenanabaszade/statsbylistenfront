'use client'; // For client-side code

import { Merriweather, Work_Sans } from 'next/font/google';
import Footer from '@/components/shared/Footer';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { usePathname, useRouter } from 'next/navigation';
import { colors } from '@/data/config/colors.js';
import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

const displayFont = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-display',
});

const baseFont = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
  weight: ['400', '700'],
});

const globalColors = colors;
const style: string[] = [];

Object.keys(globalColors).forEach((variant) => {
  Object.keys(globalColors[variant]).forEach((color) => {
    const value = globalColors[variant][color];
    style.push(`--${variant}-${color}: ${value}`);
  });
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname();  
  const router = useRouter();
  
  // Condition for blank page (e.g., '/dashboard')
  const isBlankPage = pathname === '/dashboard';  

  return (
    <UserProvider>
      <html
        lang={siteConfig.language}
        className={`${baseFont.variable} ${displayFont.variable} scroll-smooth`}
        suppressHydrationWarning
      >
        <head>
          <style>
            {`
            :root, :before, :after {
              ${style.join(';')}
            }
          `}
          </style>

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="generator" content="Shipixen" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </head>

        <body className="flex flex-col bg-white text-black antialiased dark:bg-gray-950 dark:text-white min-h-screen">
          <ThemeProviders>
            <AnalyticsWrapper />

            <div className="w-full flex flex-col justify-between items-center font-sans">
              <SearchProvider>
                <main className="w-full flex flex-col  mb-auto">
                  {children}
                </main>
              </SearchProvider>
            </div>
 
            {/* {!isBlankPage && <Footer />}   */}
          </ThemeProviders>
        </body>
      </html>
    </UserProvider>
  );
}



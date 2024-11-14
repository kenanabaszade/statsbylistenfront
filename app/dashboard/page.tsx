"use client"; // This makes it a client-side component

import { SessionProvider } from 'next-auth/react';
import Header from '@/components/dashboard_components/header/header';
import Sidebar from '@/components/dashboard_components/sidebar/sidebar';
import type { Metadata } from 'next';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex">
        <Sidebar />
        <main className="w-full flex-1 overflow-hidden">
          <Header />
          {children}
          <div>
            
          </div>
        </main>
      </div>
    </SessionProvider>
  );
}

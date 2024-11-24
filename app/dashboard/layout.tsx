"use client"; // Ensures this is a client-side component if required

import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/dashboard_components/sidebar/sidebar";
import Header from "@/components/dashboard_components/header/header";

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
        </main>
      </div>
    </SessionProvider>
  );
}

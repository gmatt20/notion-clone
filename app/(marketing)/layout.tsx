import React from "react";
import Navbar from "./_components/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full" suppressHydrationWarning>
      <Navbar />
      <main className="h-full pt-40">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="mootion-theme">
          {children}
        </ThemeProvider>
      </main>
    </div>
  );
};

export default MarketingLayout;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CVProvider } from "@/lib/context/CVContext";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import AuthProvider from "@/components/providers/AuthProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "CV Builder - Create Professional Resumes",
  description: "Create professional CVs online and download them as clean PDFs. Choose from 4 beautiful templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <ErrorBoundary>
          <AuthProvider>
            <LanguageProvider>
              <CVProvider>
                {children}
              </CVProvider>
            </LanguageProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

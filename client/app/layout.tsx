import Header from "@/components/Header";
import Notice from "@/components/Notice";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "To-do list",
  description: "A simple to-do list app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background text-primary `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full flex flex-col gap-4">
            <Header />
            <main className="flex-1 w-[90%] sm:w-[90%] md:w-[60%] lg:w-[40%] mx-auto p-4 flex flex-col gap-4">
              {children}
            </main>
            <Notice />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

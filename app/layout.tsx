import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Chloe | WordPress, Shopify & Webflow Developer",
  description:
    "Hire John Chloe for WordPress custom themes, Shopify storefront work, and Webflow development. Agency-friendly communication, clear process, and conversion-focused builds.",
  icons: {
    icon: "Montserra.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          id="tawkto"
          strategy="afterInteractive"
          src="https://embed.tawk.to/69a4ebcf42b18b1c3efc626f/1jim3i92g"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

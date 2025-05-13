import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import { getServerSideURL } from "@/lib/utils/get-url";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: "Salih.Codes",
  description: "Salih Codes - Full Stack Developer",
  openGraph: {
    title: "Salih Codes",
    description: "Salih Codes - Full Stack Developer",
    url: getServerSideURL(),
    siteName: "Salih Codes",
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Salih Codes - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full container mx-auto md:w-1/2">{children}</main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

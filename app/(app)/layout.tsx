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
  title: "Mohammed Salih | Full Stack developer",
  description:
    "Hi, I'm Mohammed Salih and I like bringing ideas to reality through code.",
  openGraph: {
    title: "Mohammed Salih",
    description:
      "Hi, I'm Mohammed Salih and I like bringing ideas to reality through code.",
    url: getServerSideURL(),
    siteName: "Mohammed Salih",
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Salih - Full Stack Developer",
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

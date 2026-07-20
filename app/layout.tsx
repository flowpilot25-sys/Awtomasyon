import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from "@/components/react-query-provider";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awtomasyon - Hire AI Employees",
  description: "Deploy AI employees that answer calls, qualify leads, schedule appointments, follow up with customers, update your CRM, and work 24/7 — without hiring another employee.",
  icons: {
    icon: "/Awtomasyon.png",
  },
  openGraph: {
    url: "https://awtomasyon.com/",
    type: "website",
    title: "Awtomasyon - Hire AI Employees",
    description: "Deploy AI employees that answer calls, qualify leads, schedule appointments, follow up with customers, update your CRM, and work 24/7 — without hiring another employee.",
    images: [
      {
        url: "/Awtomasyon.png",
        width: 1200,
        height: 630,
        alt: "Awtomasyon - Hire AI Employees",
      },
    ],
    siteName: "Awtomasyon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awtomasyon - Hire AI Employees",
    description: "Deploy AI employees that answer calls, qualify leads, schedule appointments, follow up with customers, update your CRM, and work 24/7 — without hiring another employee.",
    images: ["/Awtomasyon.png"],
  },
  metadataBase: new URL("https://awtomasyon.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('flow-pilot-theme') || 'system';
                  var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider defaultTheme="system" storageKey="flow-pilot-theme">
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <ScrollProgress />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
} 
import type { Metadata } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { personal } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://swagatnepal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s — ${personal.name}`,
  },
  description: personal.intro,
  keywords: [
    "Swagat Nepal",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "PyTorch",
    "Computer Vision",
    "Data Science",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — ${personal.title}`,
    description: personal.intro,
    siteName: personal.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: personal.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.intro,
    images: ["/og-image.png"],
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  url: siteUrl,
  email: personal.email,
  sameAs: [personal.github, personal.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: personal.location,
  },
};

// Applied before hydration so the correct theme paints on first frame —
// no flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

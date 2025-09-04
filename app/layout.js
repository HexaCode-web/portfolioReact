import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.hexacode.com"), // update to your domain
  title: "HexaCode | Expert Web Development",
  description:
    "Elevate your online presence with HexaCode. Our expert web developers create stunning, SEO-optimized websites tailored to your unique needs. start your journey to digital excellence today.",
  keywords: [
    "web development",
    "React developer",
    "Next.js developer",
    "SEO optimized websites",
    "modern web design",
    "HexaCode",
    "freelance developer",
    "custom websites",
  ],
  authors: [{ name: "HexaCode Team", url: "https://www.hexacode.com" }],
  creator: "HexaCode",
  publisher: "HexaCode",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HexaCode | Expert Web Development",
    description:
      "Elevate your online presence with HexaCode. Our expert web developers create stunning, SEO-optimized websites tailored to your unique needs. start your journey to digital excellence today.",
    url: "https://www.hexacode.com",
    siteName: "HexaCode",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1365,
        height: 626,
        alt: "HexaCode Web Development Thumbnail",
      },
      {
        url: "/thumbnail-small.jpg", // optional smaller version
        width: 600,
        height: 314,
        alt: "HexaCode Small Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HexaCode | Expert Web Development",
    description:
      "Stunning, SEO-optimized websites tailored to your unique needs. Discover HexaCode’s expertise today.",
    creator: "@hexacode", // replace with your handle
    images: ["/thumbnail.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "https://www.hexacode.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="Bskh6cuBcoosd9sbrA-eDbZ99Dd-kWhZWG4PpiVUgVc"
      />
      <link rel="canonical" href="https://hexacode.online/" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}

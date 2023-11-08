import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Transform Your Digital Presence | Expert Web Development - HexaCode",
  description:
    "Elevate your online presence with HexaCode. Our expert web developers create stunning, SEO-optimized websites tailored to your unique needs. Explore our portfolio and start your journey to digital excellence today.",
  openGraph: {
    title:
      "Transform Your Digital Presence | Expert Web Development - HexaCode",
    description:
      "Elevate your online presence with HexaCode. Our expert web developers create stunning, SEO-optimized websites tailored to your unique needs. Explore our portfolio and start your journey to digital excellence today.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

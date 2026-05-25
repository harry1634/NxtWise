import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NxtWise — AI-Powered Enterprise & EdTech Ecosystem",
  description:
    "NxtWise unifies enterprise IT excellence with next-generation AI-powered education — empowering businesses to scale and learners to lead.",
  keywords: [
    "NxtWise", "EdTech", "LMS", "AI courses",
    "IT training Hyderabad", "web development", "ERP", "career guidance",
  ],
  openGraph: {
    title: "NxtWise — AI-Powered Enterprise & EdTech Ecosystem",
    description: "Enterprise software for businesses. AI-powered learning for students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

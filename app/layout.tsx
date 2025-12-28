import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Shankar Kadam | Full-Stack Developer",
  description: "Full-Stack Developer specializing in Java, Spring Boot, Angular, and modern web technologies. Currently pursuing Master's in Computer Science at Guru Nanak Khalsa College, Mumbai.",
  keywords: ["Full-Stack Developer", "Java", "Spring Boot", "Angular", "JavaScript", "TypeScript", "MongoDB", "Web Development", "Mumbai", "Raj Kadam"],
  authors: [{ name: "Raj Shankar Kadam" }],
  openGraph: {
    title: "Raj Shankar Kadam | Full-Stack Developer",
    description: "Full-Stack Developer specializing in Java, Spring Boot, Angular, and modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Shankar Kadam | Full-Stack Developer",
    description: "Full-Stack Developer specializing in Java, Spring Boot, Angular, and modern web technologies",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

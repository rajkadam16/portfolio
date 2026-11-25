import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Raj Kadam — Software Developer & Full-Stack Engineer",
  description:
    "Software Developer specializing in React, Angular, Java, PHP, and WordPress. Building scalable web applications with a focus on performance and clean code.",
  keywords: [
    "Raj Kadam",
    "Software Developer",
    "Full-Stack Engineer",
    "React",
    "Angular",
    "Java",
    "WordPress",
    "Mumbai",
    "Web Developer",
  ],
  authors: [{ name: "Raj Shankar Kadam" }],
  openGraph: {
    title: "Raj Kadam — Software Developer & Full-Stack Engineer",
    description:
      "Software Developer specializing in React, Angular, Java, PHP, and WordPress",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kadam — Software Developer & Full-Stack Engineer",
    description:
      "Software Developer specializing in React, Angular, Java, PHP, and WordPress",
  },
  verification: {
    google: "glOgJiE3J3QcRzKBjhV5Z8XePfAWuWisJvZgLzSL_KY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

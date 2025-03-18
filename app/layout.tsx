import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/constants/navigation";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PDF companion",
  description:
    "Trying to convert file from pdf to docs and vice versa or you want a brief summary of the pdf file, pdf companion is the right place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${fontSans.variable} antialiased`}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}

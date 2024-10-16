import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";

// Load Sora font from Google Fonts this is how you can change the font of your website.
const font= Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],

});

export const metadata: Metadata = {
  title: "Sheryar Portfolio",
  description: "Showcasing the work, skills, and projects of Sheryar Amir, a passionate Front-End Developer specializing in Next.js, Tailwind CSS, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNavbar/>
        {children}
      </body>
    </html>
  );
}

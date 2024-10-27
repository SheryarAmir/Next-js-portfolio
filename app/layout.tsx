import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

// Load Sora font from Google Fonts this is how you can change the font of your website.
const font = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sheryar Portfolio",
  description:
    "Showcasing the work, skills, and projects of Sheryar Amir, a passionate Front-End Developer specializing in Next.js, Tailwind CSS, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className} antialiased`}>
        <div className=" hidden md:block">
        <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={2}
  outerScale={2}
  outerAlpha={0}
  innerStyle={{ backgroundColor: "white" }}
  outerStyle={{ border: "3px solid white" }}
/>
        </div>
        <ResponsiveNavbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

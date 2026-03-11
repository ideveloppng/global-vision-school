import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Global Vision School Suleja | Building a Reputable Generation",
  description: "High-quality Nursery, Primary, and Secondary education in Suleja, Niger State. Founded 2008.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-gvYellow selection:text-gvDarkBlue">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import "./globals.css";
import "animate.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToasterProvider from "./components/ToasterProvider";

export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description:
    "Shop sunglasses, summer outfits, skincare and beach accessories at SunCart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="summer">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
import { Barlow_Condensed, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Viking Armor Tattoo | Custom Tattoos in Camp Hill, PA",
    template: "%s | Viking Armor Tattoo",
  },
  description:
    "Veteran owned tattoo shop in Camp Hill, PA since 2011. Custom tattoos, black & grey, traditional, cover-ups and more. Walk-ins welcome.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

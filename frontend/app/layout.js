import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "HimShakti App",
  description: "HimShakti Application",
};



export default function RootLayout({ children }) {


  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >


      <body className="min-h-screen relative">

        {children}


      </body>


    </html>

  );
}
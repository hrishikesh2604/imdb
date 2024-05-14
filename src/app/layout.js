import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
const inter = Inter({ subsets: ["latin"] });
import Providers from '@/app/providers' 
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "IMDB-Clone",
  description: "Movie database app (IMDB Clone)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
        <Header/>
        <Navbar/>
        {children}
        </Providers>
        </body>
        
    </html>
  );
}

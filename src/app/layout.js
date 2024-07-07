import { Inter } from "next/font/google";
import "./globals.css";

import Footer from '../components/footer/Footer';
import NavBar from "../components/navbar/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eksāmenam Gatavs",
  description: "Ceļu satiksmes noteikumu un ceļa zīmju apguve, gatavošanās eksāmenam CSDD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ''}>
      <NavBar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}

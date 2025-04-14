import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

// Font utilizada
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurante Staine",
  description: "Aplicativo de cardápio digital",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter.className">
        {children}
      </body>
    </html>
  );
}
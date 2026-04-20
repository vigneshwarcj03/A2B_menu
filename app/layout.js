import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A2B Restaurant - Delicious Vegetarian Cuisine",
  description: "Modern restaurant menu for A2B Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intel-O-Flash",
  description: "Flash cards for AI Learning",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
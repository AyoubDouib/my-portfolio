import type { Metadata } from "next";
import {Montserrat} from "next/font/google"
import "./globals.css";

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ayoub Douib",
  description: "I'm Ayoub Douib a Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={font.className}>
        {children}
      </body>
    </html>
  );
}

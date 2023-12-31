import type { Metadata } from "next";
import "./globals.css";
import { Barlow } from "next/font/google";
import { DarkModeProvider } from "./ContextProvider";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-learning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}

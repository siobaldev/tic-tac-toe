import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const martianGrotesk = localFont({
  src: [
    {
      path: "../public/font/MartianGrotesk-uWdUlt.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-martian-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description:
    "Play classic Tic-Tac-Toe in your browser. Take turns as X and O, get three in a row to win, and restart anytime. Works on desktop and mobile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", martianGrotesk.variable, "font-sans", geist.variable)}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Tic Tac Toe" />
      </head>
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { keywordsForMetaData } from "@/utils/constants";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Hello World

export const metadata: Metadata = {
  title: "File Share",
  description:
    "File Share: Swift P2P file sharing and real-time chat. Experience seamless, secure data exchange with our WebRTC-powered Next.js app. Join us for instant messaging and efficient file transfer in a modern, user-friendly environment.",
  authors: [
    {
      name: "Avik Mukherjee",
      url: "#",
    },
  ],
  keywords: keywordsForMetaData,
  icons: {
    icon: "./fileTransfer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

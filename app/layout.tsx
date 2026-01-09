import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { MaterialSymbolsOutlined } from "next/font/google";

export const metadata: Metadata = {
  title: "Auri",
  description: "The Executive Function Support Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="h-full">
        <div className="flex h-full">
          <Sidebar />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="flex h-full">
          <div className="border-r-2 border-r-gray-500 h-full w-48">
            Sidebar
          </div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}

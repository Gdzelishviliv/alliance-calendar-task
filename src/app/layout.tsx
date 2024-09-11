import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "calendar",
  description: "alliance calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid justify-center">{children}</body>
    </html>
  );
}

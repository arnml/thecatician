import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"]
});
export const metadata: Metadata = {
  title: "The Catician",
  description: "Newsletter y pódcast diario para entender papers en minutos.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-gray-300`}>
        <Header />
        {children}
        {/* <PrelineScript /> uninstall preline*/}
      </body>
    </html>
  );
}

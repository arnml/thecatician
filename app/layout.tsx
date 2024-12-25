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
  title: "El Explorador",
  description: "Newsletter y pódcast diario para entender papers en minutos.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
        {/* <PrelineScript /> uninstall preline*/}
      </body>
    </html>
  );
}

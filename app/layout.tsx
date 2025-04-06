import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Newsletter y pódcast diario para entender papers en minutos." />
        <meta name="keywords" content="newsletter, podcast, papers, research, science" />
        <meta name="author" content="The Catician" />
        <title>The Catician</title>
      </head>
      <body className={`${roboto.variable} antialiased bg-slate-100 relative`}>
        <video
          autoPlay          
          muted
          playsInline
          className="fixed top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
        >
          <source src="/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
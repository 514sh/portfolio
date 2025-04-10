import "./globals.css";

import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-64 bg-stone-200 font-mono flex flex-col min-h-screen flex-nowrap">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

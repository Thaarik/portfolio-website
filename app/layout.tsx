import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Footer } from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thaarik-Portfolio",
  description: "Portfolio of Thaarik Ahamed Ahemed Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen overflow-y-auto overflow-x-hidden relative scroll-smooth">
          <div className="w-screen h-auto flex flex-row md:grid md:grid-cols-5 relative">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
              </div>
              <div className="w-full md:w-[20%] h-auto md:h-[100vh] fixed l-0 z-40 ">
                <Navbar />
              </div>
              <div className="w-full md:w-[80%] h-auto md:h-[100vh] flex flex-col absolute right-0 overflow-x-hidden scroll-smooth">
                {children}
                <Analytics />
                <Footer />
              </div>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

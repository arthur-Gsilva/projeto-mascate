import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import { OrderProvider } from "@/contexts/OrderContext";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >

        <OrderProvider>
            <div className="min-h-screen min-w-screen bg-center bg-cover bg-no-repeat bg-[url(/images/bg.webp)]">
                <div className="h-screen w-screen bg-black/75">
                    {children}
                </div>
            </div>
        </OrderProvider>
        

    </body>
    </html>
  );
}

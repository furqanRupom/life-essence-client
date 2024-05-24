import type { Metadata } from "next";
import { Inter,Cambay } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });
const camby = Cambay({subsets:['latin'],weight:[
  '400'
]})

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
      <body className={camby.className}>
       <Provider>
          {children}
       </Provider>
        </body>
    </html>
  );
}

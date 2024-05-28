import type { Metadata } from "next";
import { Inter, Cambay, Montserrat, PT_Sans, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";
import EssenceProvider from "./provider/Providers";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });
const camby = Baloo_Bhai_2({
  subsets: ['latin'], weight: [
    '400'
  ]
})

export const metadata: Metadata = {
  title: "Life Essence | Home",
  description: "Life Essence for humaity for save lives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={camby.className}>
        <EssenceProvider>
          {children}

          <Toaster position="top-center" toastOptions={{
            style: {
              border: '1px solid transparent'
            },
            classNames: {
              toast: 'bg-coral-50',
              title: 'text-coral-400 text-lg capitalize ',
              icon: 'text-coral-400 text-xl',
            }
          }} />
        </EssenceProvider>
      </body>
    </html>
  );
}

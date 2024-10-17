import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import {Roboto} from 'next/font/google'
import Container from "@/components/global/Container"; 
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs';



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "fruit store",
  description: "fruit seller store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={roboto.className}
      > 
      <Providers>
      <Navbar/>
      <Container className="py-20">
        {children}
      </Container>
      </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}

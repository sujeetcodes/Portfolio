import "./globals.css";
import Header from "@/components/Header";
import { League_Spartan } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const leageSpartan = League_Spartan({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N79NP165RD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N79NP165RD');
          `}
        </Script>
      </Head>
      <body className={`${leageSpartan.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

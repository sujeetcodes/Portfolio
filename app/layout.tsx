import "./globals.css";
import Header from "@/components/Header";
import { League_Spartan } from "next/font/google";
import Script from "next/script";

const leageSpartan = League_Spartan({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${leageSpartan.className}`}>
        {/* Google Analytics Scripts */}
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
        
        <Header />
        {children}
      </body>
    </html>
  );
}

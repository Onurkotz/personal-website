import Script from "next/script";
import "../../style/global.css";
import { getDictionary } from "../../lib/dictionaries";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }];
}

export default async function Root({ children, params: { lang } }: any) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_NEXT_GTAG}`}
        ></Script>
        <Script id="google-analitycs">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.PUBLIC_NEXT_GTAG}');
    `}
        </Script>
      </head>
      <body className="bg-gray-100">
        <div>
          <Navigation {...dict} />
          {children}
          <Footer {...dict} />
        </div>
      </body>
    </html>
  );
}

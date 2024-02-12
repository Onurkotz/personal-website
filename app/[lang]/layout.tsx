import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import "../../style/global.css";
import { getDictionary } from "../../lib/dictionaries";
import Iframe from 'react-iframe'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }];
}

const styleIframe: string = "display:none;visibility:hidden";

export default async function Root({ children, params: { lang } }: any) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        {/* <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_NEXT_GA4}`}
        ></Script>
        <Script id="google-analitycs">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.PUBLIC_NEXT_GA4}');
    `}
        </Script> */}

        {/* <!-- Google Tag Manager --> */}
        {/* <Script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.PUBLIC_NEXT_GTAG}');
    `}
        </Script> */}
        {/* <!-- End Google Tag Manager --> */}


        <link rel="icon" href="/" sizes="any" />
      </head>
      <body className="bg-gray-100">
        {/* <!-- Google Tag Manager (noscript) --> */}
        
        
        
        {/* <noscript>
          <Iframe
            url="https://www.googletagmanager.com/ns.html?id=GTM-MBSJK4R6"
            height="0"
            width="0"
            styles={{display:"none", visibility:"hidden"}}
          />
        </noscript> */}


        {/* <!-- End Google Tag Manager (noscript) --> */}
        <div>
          <Navigation {...dict} />
          {children}
          <Footer {...dict} />
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-MBSJK4R6" />
      <GoogleAnalytics gaId="G-5BDPM923XP" />
    </html>
  );
}
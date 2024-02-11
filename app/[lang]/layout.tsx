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

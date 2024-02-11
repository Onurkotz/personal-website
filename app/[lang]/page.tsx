import type { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../lib/dictionaries";
import TopField from "@/components/TopField";
import Products from "@/components/Products";
import Call from "@/components/Call";
import Brands from "@/components/Brands";

type Props = {
  params: { lang: any };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  const { metadataHome } = await getDictionary(lang);

  return {
    title: metadataHome[0].title,
    description: metadataHome[0].description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      languages: {
        "en-US": "/en/",
        "tr-TR": "/tr/",
      },
    },
  };
}

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);

  return (
    <section className="py-4 px-4 md:py-4 md:px-4">
      <TopField {...dict} />
      <Products {...dict} />
      <Call {...dict} />
      <Brands {...dict} />
    </section>
  );
}

import type { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../../lib/dictionaries";
import Education from "../../../components/Education";
import Experience from "../../../components/Experience";
import Download from "@/components/Download"


type Props = {
  params: { lang: any };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  const { metadataCv } = await getDictionary(lang);

  return {
    title: metadataCv[0].title,
    description: metadataCv[0].description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      languages: {
        "en-US": `${process.env.PUBLIC_NEXT_BASE_URL}/en/ozgecmis/}`,
        "tr-TR": `${process.env.PUBLIC_NEXT_BASE_URL}/tr/ozgecmis/}`,
      },
    },
  };
}

export default async function Ozgecmis({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  const { title, description }: any = dict.cv[0];

  return (
    <>
      <section className="py-4 md:py-4">
        <div className="text-center">
          <h1 className="font-normal text-gray-900 text-4xl md:text-5xl mb-5">
            {title}
          </h1>
          <Download {...dict}/>
          <p className="text-justify md:text-center px-6 md:px-20 mb-10">{description}</p>
        </div>
        <div>
          <Education {...dict} />
          <Experience {...dict} />
        </div>
      </section>
    </>
  );
}

import type { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../../lib/dictionaries";

type Props = {
  params: { lang: any };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  const { metadataAbout } = await getDictionary(lang);

  return {
    title: metadataAbout[0].title,
    description: metadataAbout[0].description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      languages: {
        "en-US": "/en/hakkimda",
        "tr-TR": "/tr/hakkimda",
      },
    },
  };
}

export default async function Hakkimda({ params: { lang } }: any) {
  const dict = await getDictionary(lang);

  const about: any = dict.about[0];

  return (
    <>
      <section className="py-4 md:py-4">
        <section className="flex items-center font-poppins ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap mb-20">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative lg:max-w-md">
                  <img
                    src="https://picsum.photos/1200/800"
                    alt="aboutimage"
                    className="relative z-10 object-cover w-full rounded h-96"
                  />
                </div>
              </div>
              <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="pl-4 mb-6 border-l-4 border-sky-500 ">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                    Onur Koç
                  </span>
                  <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
                    {about.about}
                  </h1>
                </div>
                <p className="text-justify mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                  {about.description}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </section>
      </section>
    </>
  );
}

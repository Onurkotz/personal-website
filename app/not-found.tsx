import photo from "../assets/image/a-man-drinks-tea.webp";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
// import { i18n } from "@/i18n";

export const metadata: Metadata = {
  title: "Onur Koç - Sayfa Bulunamdı",
  description: "SEO, Ads, Frontend Web Development",
};

// console.log(i18n.locales)

export default function NotFound() {
  return (
    <section className="bg-gray-100 ">
      <div className="container min-h-screen mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2 text-center">
          <p className="text-sm font-medium text-gray-800">Hata 404</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Aradığın sayfayı bulamadım.
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 mb-5">
            Sen gitmek istediğin sayfayı bulana kadar bi çay içip geliyorum.{" "}
          </p>
          <Link href="/">
            <button className="px-5 py-3 md:px-9 md:py-4 bg-sky-400 font-medium md:font-semibold text-white text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500 w-full">
              Ana Sayfa
            </button>
          </Link>
        </div>
        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <Image
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src={photo}
            alt="not-found image"
            height={1200}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}

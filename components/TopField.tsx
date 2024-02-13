"use client";
import Image from "next/image";
import Link from "next/link";
import profilePicture from "../assets/image/home-img.png";
import data from "../mock/data.json";

const { whatsapp } = data;

export default function TopField({ ...dict }: any) {
  const titles: any = dict.homeTitle[0];
  const buttonsType: any = dict.buttons[0];

  return (
    <section className="py-4 md:py-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-8">
          <Image
            src={profilePicture}
            alt="Image"
            width={100}
            height={100}
            className="rounded"
          />
        </div>

        <p className="font-medium text-gray-600 text-3lg md:text-4xl uppercase mb-8">
          Onur Koç
        </p>

        <h1 className="font-normal text-gray-900 text-4xl md:text-5xl leading-none mb-8">
          {titles.title}
        </h1>

        <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
          {titles.description}
        </p>

        <div>
          <Link
            href={whatsapp}
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-yellow-500 text-black text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            {buttonsType.wpButton}
          </Link>
        </div>
      </div>
    </section>
  );
}

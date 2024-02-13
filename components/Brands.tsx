"use client";
import Image from "next/image";
import brand1 from "../assets/image/brand-1.png";
import brand2 from "/assets/image/brand-2.png";
import brand3 from "/assets/image/brand-3.png";
import brand4 from "/assets/image/brand-4.png";

export default function Brands({ ...dict }: any) {
  const brands: any = dict.brands[0];
  return (
    <section className="py-4 md:py-8">
      <div className="container max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          {brands.title}
        </h2>

        <p className="font-normal text-gray-400 text-md md:text-lg mb-10">
          {brands.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center mb-8">
          <Image src={brand1} alt="Image" height={100} width={200} />
          <Image src={brand2} alt="Image" height={100} width={200} />
          <Image src={brand3} alt="Image" height={100} width={200} />
          <Image src={brand4} alt="Image" height={100} width={200} />
        </div>
      </div>
      <hr />
    </section>
  );
}

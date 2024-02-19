"use client";

import Link from "next/link";

import { Twitter, Instagram } from "react-feather";

export default function Footer({ ...dict }: any) {
  const footer: any = dict.footer[0];

  return (
    <footer className="py-2 md:py-1 md:pb-10 lg:pb-30">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            {footer.title}
          </h2>

          <p className="font-normal text-gray-400 text-md md:text-lg mb-6">
            {footer.description}
          </p>

          <div className="flex items-center justify-center mb-10">
            <Link
              href="#"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
            >
              <i className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500">
                <Twitter />
              </i>
            </Link>

            <Link
              href="https://www.instagram.com/ourkoc/"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
            >
              <i className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">
                <Instagram />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { i18n, type Locale } from "../i18n";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import icon from "../assets/image/navbar-logo.png";

export default function Navigation({ ...dict }: any) {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const buttonsType: any = dict.buttons[0];
  const pathLang: string = pathName.slice(1, 3).toString();

  return (
    <div className="container max-w-screen-xl pt-10 mx-auto px-2">
      <nav className="flex items-center justify-between mb-10">
        <div>
          <Link href={`/${pathLang}`}>
            <Image src={icon} alt="logo" width={50} height={50} />
          </Link>
        </div>

        <ul className="flex">
          <li className="mx-3">
            <Link
              href={`/${pathLang}/hakkimda`}
              className="p-2 rounded hover:bg-gray-200"
            >
              {buttonsType.aboutButton}
            </Link>
          </li>
          <li>
            <Link
              href={`/${pathLang}/ozgecmis`}
              className="p-2 rounded hover:bg-gray-200"
            >
              {buttonsType.cvButton}
            </Link>
          </li>
        </ul>

        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {buttonsType.langButton}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {i18n.locales.map((locale) => {
                    return (
                      <Menu.Item key={locale}>
                        <Link
                          href={redirectedPathName(locale)}
                          className="bg-white text-gray-900 block px-4 py-2 text-sm"
                        >
                          {locale === "tr" ? "Türkçe" : "English"}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </div>
  );
}

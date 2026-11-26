"use client";

import { HaloSeries, LogoWhite } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import {
  AccountIcon,
  CartIcon,
  DownArrow,
  LoveIcon,
  SearchIcon,
} from "../Icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const megaMenuData = {
  "smart-watches": {
    title: "Explore Smart Watches",

    sections: [
      {
        heading: "Shop by Price",
        links: [
          { title: "Above ₹6000", href: "/smart-watches/above-6000" },
          { title: "₹4000 - ₹6000", href: "/smart-watches/4000-6000" },
          { title: "₹2000 - ₹4000", href: "/smart-watches/2000-4000" },
          { title: "Below ₹2000", href: "/smart-watches/below-2000" },
        ],
      },
      {
        heading: "Shop by Gender",
        links: [
          { title: "Smartwatches for Men", href: "/smart-watches/men" },
          { title: "Smartwatches for Women", href: "/smart-watches/women" },
          { title: "Smartwatches for Kids", href: "/smart-watches/kids" },
        ],
      },
      {
        heading: "Shop by Type",
        links: [
          { title: "GPS Smartwatches", href: "/smart-watches/gps" },
          {
            title: "Metal Strap Smartwatches",
            href: "/smart-watches/metal-strap",
          },
          {
            title: "Leather Strap Smartwatches",
            href: "/smart-watches/leather-strap",
          },
          {
            title: "Round Dial Smartwatches",
            href: "/smart-watches/round-dial",
          },
          {
            title: "Square Dial Smartwatches",
            href: "/smart-watches/square-dial",
          },
        ],
      },
      {
        heading: "Bestsellers & New Launches",
        links: [
          { title: "Halo 2 - Limited Edition", href: "/products/halo-2" },
          { title: "Pro 6R", href: "/products/pro-6r" },
          { title: "Diva", href: "/products/diva" },
          { title: "Endeavour Pro", href: "/products/endeavour-pro" },
          { title: "Twist Go", href: "/products/twist-go" },
        ],
      },
    ],

    categories: {
      title: "CHOOSE A CATEGORY",
      cards: [
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
      ],
    },
  },

  earbuds: {
    title: "Explore Earbuds & Headphones",

    sections: [
      {
        heading: "Shop by Price",
        links: [
          { title: "Above ₹6000", href: "/smart-watches/above-6000" },
          { title: "₹4000 - ₹6000", href: "/smart-watches/4000-6000" },
          { title: "₹2000 - ₹4000", href: "/smart-watches/2000-4000" },
          { title: "Below ₹2000", href: "/smart-watches/below-2000" },
        ],
      },
      {
        heading: "Shop by Gender",
        links: [
          { title: "Smartwatches for Men", href: "/smart-watches/men" },
          { title: "Smartwatches for Women", href: "/smart-watches/women" },
          { title: "Smartwatches for Kids", href: "/smart-watches/kids" },
        ],
      },
      {
        heading: "Shop by Type",
        links: [
          { title: "GPS Smartwatches", href: "/smart-watches/gps" },
          {
            title: "Metal Strap Smartwatches",
            href: "/smart-watches/metal-strap",
          },
          {
            title: "Leather Strap Smartwatches",
            href: "/smart-watches/leather-strap",
          },
          {
            title: "Round Dial Smartwatches",
            href: "/smart-watches/round-dial",
          },
          {
            title: "Square Dial Smartwatches",
            href: "/smart-watches/square-dial",
          },
        ],
      },
      {
        heading: "Bestsellers & New Launches",
        links: [
          { title: "Halo 2 - Limited Edition", href: "/products/halo-2" },
          { title: "Pro 6R", href: "/products/pro-6r" },
          { title: "Diva", href: "/products/diva" },
          { title: "Endeavour Pro", href: "/products/endeavour-pro" },
          { title: "Twist Go", href: "/products/twist-go" },
        ],
      },
    ],

    categories: {
      title: "CHOOSE A CATEGORY",
      cards: [
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
      ],
    },
  },

  "home-audio": {
    title: "Explore Home Audio",

    sections: [
      {
        heading: "Shop by Price",
        links: [
          { title: "Above ₹6000", href: "/smart-watches/above-6000" },
          { title: "₹4000 - ₹6000", href: "/smart-watches/4000-6000" },
          { title: "₹2000 - ₹4000", href: "/smart-watches/2000-4000" },
          { title: "Below ₹2000", href: "/smart-watches/below-2000" },
        ],
      },
      {
        heading: "Shop by Gender",
        links: [
          { title: "Smartwatches for Men", href: "/smart-watches/men" },
          { title: "Smartwatches for Women", href: "/smart-watches/women" },
          { title: "Smartwatches for Kids", href: "/smart-watches/kids" },
        ],
      },
      {
        heading: "Shop by Type",
        links: [
          { title: "GPS Smartwatches", href: "/smart-watches/gps" },
          {
            title: "Metal Strap Smartwatches",
            href: "/smart-watches/metal-strap",
          },
          {
            title: "Leather Strap Smartwatches",
            href: "/smart-watches/leather-strap",
          },
          {
            title: "Round Dial Smartwatches",
            href: "/smart-watches/round-dial",
          },
          {
            title: "Square Dial Smartwatches",
            href: "/smart-watches/square-dial",
          },
        ],
      },
      {
        heading: "Bestsellers & New Launches",
        links: [
          { title: "Halo 2 - Limited Edition", href: "/products/halo-2" },
          { title: "Pro 6R", href: "/products/pro-6r" },
          { title: "Diva", href: "/products/diva" },
          { title: "Endeavour Pro", href: "/products/endeavour-pro" },
          { title: "Twist Go", href: "/products/twist-go" },
        ],
      },
    ],

    categories: {
      title: "Shop Home Audio",
      cards: [
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
      ],
    },
  },

  "power-series": {
    title: "Explore Power Series",

    sections: [
      {
        heading: "Shop by Price",
        links: [
          { title: "Above ₹6000", href: "/smart-watches/above-6000" },
          { title: "₹4000 - ₹6000", href: "/smart-watches/4000-6000" },
          { title: "₹2000 - ₹4000", href: "/smart-watches/2000-4000" },
          { title: "Below ₹2000", href: "/smart-watches/below-2000" },
        ],
      },
      {
        heading: "Shop by Gender",
        links: [
          { title: "Smartwatches for Men", href: "/smart-watches/men" },
          { title: "Smartwatches for Women", href: "/smart-watches/women" },
          { title: "Smartwatches for Kids", href: "/smart-watches/kids" },
        ],
      },
      {
        heading: "Shop by Type",
        links: [
          { title: "GPS Smartwatches", href: "/smart-watches/gps" },
          {
            title: "Metal Strap Smartwatches",
            href: "/smart-watches/metal-strap",
          },
          {
            title: "Leather Strap Smartwatches",
            href: "/smart-watches/leather-strap",
          },
          {
            title: "Round Dial Smartwatches",
            href: "/smart-watches/round-dial",
          },
          {
            title: "Square Dial Smartwatches",
            href: "/smart-watches/square-dial",
          },
        ],
      },
      {
        heading: "Bestsellers & New Launches",
        links: [
          { title: "Halo 2 - Limited Edition", href: "/products/halo-2" },
          { title: "Pro 6R", href: "/products/pro-6r" },
          { title: "Diva", href: "/products/diva" },
          { title: "Endeavour Pro", href: "/products/endeavour-pro" },
          { title: "Twist Go", href: "/products/twist-go" },
        ],
      },
    ],

    categories: {
      title: "hop by Category",
      cards: [
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
        { image: HaloSeries, link: "" },
      ],
    },
  },
};

const Nav = () => {
  const [isActiveMegamenu, setIsActiveMegamenu] = useState<string | null>(null);

  const [megaMenuActiveData, setMegaMenuActiveData] = useState<
    (typeof megaMenuData)[keyof typeof megaMenuData] | null
  >(null);

  const router = useRouter();

  const HandleMegaMenu = (menu: keyof typeof megaMenuData | null) => {
    if (!menu) {
      setIsActiveMegamenu(null);
      setMegaMenuActiveData(null);
      return;
    }

    setMegaMenuActiveData(megaMenuData[menu]);
    setIsActiveMegamenu(menu);
  };
  const HandleMegaMenuLeave = () => {
    setIsActiveMegamenu(null);
    setMegaMenuActiveData(null);
  };

  // console.log(megaMenuActiveData);

  return (
    <nav className="relative w-full px-120p flex items-center justify-between ">
      <div>
        <Image
          src={LogoWhite}
          alt=""
          className="w-107p h-auto object-center object-cover "
        />
      </div>
      {/*  */}
      <ul className="flex items-center ">
        <li
          onMouseEnter={() => HandleMegaMenuLeave()}
          className="py-19p px-26p text-14 text-white hover:text-gray-6 font-Inter duration-300 "
        >
          <Link href={"/master-series"}>Master Series</Link>
        </li>
        <li
          onMouseEnter={() => HandleMegaMenuLeave()}
          className="py-19p px-26p text-14 text-white hover:text-gray-6 font-Inter duration-300 "
        >
          <Link href={"/rep-fitness-tracker"}>REP</Link>
        </li>
        <li
          onMouseEnter={() => HandleMegaMenu("smart-watches")}
          className={`py-19p px-26p text-14 ${isActiveMegamenu ? "text-gray-6" : "text-white"} hover:text-gray-6 font-Inter duration-300  `}
        >
          <button
            onClick={() => router.push("/smart-watch")}
            className="flex items-center cursor-pointer "
          >
            Smart Watches <DownArrow />
          </button>
        </li>
        <li
          onMouseEnter={() => HandleMegaMenu("earbuds")}
          className="py-19p px-26p text-14 text-white hover:text-gray-6 font-Inter duration-300 "
        >
          <button
            onClick={() => router.push("/wireless-audio")}
            className="flex items-center cursor-pointer "
          >
            Earbuds & Headphones <DownArrow />
          </button>
        </li>
        <li
          onMouseEnter={() => HandleMegaMenu("home-audio")}
          className="py-19p px-26p text-14 text-white hover:text-gray-6 font-Inter duration-300 "
        >
          <button
            onClick={() => router.push("/home-audio")}
            className="flex items-center cursor-pointer "
          >
            Home Audio <DownArrow />
          </button>
        </li>
        <li
          onMouseEnter={() => HandleMegaMenu("power-series")}
          className="py-19p px-26p text-14 text-white hover:text-gray-6 font-Inter duration-300 "
        >
          <button
            onClick={() => router.push("/power-series")}
            className="flex items-center cursor-pointer "
          >
            Power Series <DownArrow />
          </button>
        </li>
      </ul>
      {/*  */}

      <ul className="flex items-center gap-12p ">
        <li>
          <Link href={""}>
            <SearchIcon />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <LoveIcon />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <AccountIcon />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <CartIcon />
          </Link>
        </li>
      </ul>

      {/*  */}
      {/* Mega menu */}
      <div
        onMouseLeave={() => HandleMegaMenuLeave()}
        className={`
        absolute top-55p left-0 w-full bg-white grid grid-cols-2 gap-y-20p gap-x-10p pt-50p px-120p pb-20p
        transition-all duration-400 ease-in-out
        ${
          isActiveMegamenu
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3 pointer-events-none"
        }
      `}
      >
        {/*  */}

        <div className="col-span-full row-span-1 ">
          <h4 className="text-22 text-black font-Inter font-bold ">
            {megaMenuActiveData && megaMenuActiveData.title}
          </h4>
        </div>

        {/*  */}
        <div className=" flex flex-wrap items-start justify-between pr-55p  ">
          {megaMenuActiveData &&
            megaMenuActiveData.sections.map(({ heading, links }, index) => (
              <div key={index} className="w-[47%] ">
                <h4 className="text-16 text-black font-Inter font-normal uppercase underline pb-10p ">
                  {heading}
                </h4>

                <ul>
                  {links.map(({ title }, index) => (
                    <li
                      key={index}
                      className="w-[70%] text-14 text-black py-3p border-b border-black "
                    >
                      <Link href={""}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        {/*  */}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(262px,1fr))]  gap-y-12p ">
          <div className="col-span-full">
            <h4 className="text-16 text-black font-Inter font-normal uppercase underline ">
              {megaMenuActiveData && megaMenuActiveData.categories.title}
            </h4>
          </div>

          {megaMenuActiveData &&
            megaMenuActiveData.categories.cards.map(
              ({ image }, index) => (
                <div
                  key={index}
                  className="w-262p aspect-square rounded-16p overflow-hidden bg-[pink]"
                >
                  <Link href={""}>
                    <Image
                      src={image}
                      alt=""
                      className="w-full aspect-square object-cover object-center "
                    />
                  </Link>
                </div>
              ),
            )}
        </div>

        {/*  */}
      </div>
    </nav>
  );
};

export default Nav;

"use client";

import AccordionItem from "@/client/components/AccordionItem";
import {
  ArrowRight,
  DownArrow,
  FacebookIcon,
  InstaIcon,
  YoutubeIcon,
} from "@/client/components/Icons";
import ProductCard from "@/client/components/productCard/ProductCard";
import RecentProductCard from "@/client/components/recentProductCard/RecentProductCard";
import { CategoryCardImg1, HomeBanner1, LogoWhite, NoiseX } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isSmartWatchOpen, setIsSmartWatchOpen] = useState(false);

  return (
    <main className="w-full bg-white ">
      <header className="w-full px-52p pt-55p ">
        <Image
          src={HomeBanner1}
          alt=""
          loading="eager"
          className="rounded-t-20p w-full aspect-1790/880 "
        />
      </header>

      {/* Explore by Category  */}

      <section className="max-w-1790p mx-auto px-120p py-20p flex flex-col gap-30p ">
        <h2 className="text-30 text-black font-Inter font-bold ">
          Explore by Categor
        </h2>
        <div className=" w-[306px] aspect-306/377  rounded-16p overflow-hidden bg-[green]">
          <Link href={""} className="">
            <Image
              src={CategoryCardImg1}
              alt=""
              className="w-full aspect-auto object-center object-cover "
            />
          </Link>
        </div>
      </section>

      {/* Top Picks For You */}

      <section className="max-w-1790p mx-auto px-120p py-20p flex flex-col gap-30p ">
        <h2 className="text-30 text-black font-Inter font-bold ">
          Top Picks For You
        </h2>
        <div className="flex gap-10p ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* Fresh Finds */}

      <section className="max-w-1790p mx-auto px-120p py-20p flex flex-col gap-30p ">
        <h2 className="text-30 text-black font-Inter font-bold ">
          Fresh Finds
        </h2>
        <div className="flex gap-10p ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* */}

      <section className="max-w-1790p mx-auto px-52p pt-115p pb-45p ">
        <Link href={""}>
          <div>
            <Image
              src={NoiseX}
              alt=""
              loading="eager"
              className="w-full object-cover object-center rounded-20p "
            />
          </div>
        </Link>
      </section>

      {/* Be Limitless */}
      <section className="max-w-1790p mx-auto px-120p py-20p flex flex-col gap-30p ">
        <h2 className="text-30 text-black font-Inter font-bold ">
          Be Limitless
        </h2>
        <div className="flex gap-10p ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/*  */}
      <section className="max-w-1790p mx-auto px-52p pt-115p pb-45p ">
        <Link href={""}>
          <div>
            <Image
              src={NoiseX}
              alt=""
              loading="eager"
              className="w-full object-cover object-center rounded-20p "
            />
          </div>
        </Link>
      </section>

      {/* Recently Viewed */}

      <section className="max-w-1790p mx-auto px-120p py-20p flex flex-col gap-30p ">
        <h2 className="text-30 text-black font-Inter font-bold ">
          Recently Viewed
        </h2>
        <div className="flex gap-10p ">
          <RecentProductCard />
          <RecentProductCard />
        </div>
      </section>

      {/*  */}
    </main>
  );
}

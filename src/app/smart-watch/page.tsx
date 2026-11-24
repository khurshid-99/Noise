"use client";

import { useStackedScrollNav } from "@/client/hooks/useStackedScrollNav";
import {
  MasterSeriesBanner1,
  MasterSeriesBanner2,
  MasterSeriesBanner3,
  MasterSeriesBanner4,
  MasterSeriesBanner5,
} from "@/Images";
import Image from "next/image";
import { useRef } from "react";

const series = [
  { name: "Master Buds Open", banner: MasterSeriesBanner2 },
  { name: "Master Buds Max", banner: MasterSeriesBanner3 },
  { name: "Master Buds 2", banner: MasterSeriesBanner4 },
  { name: "Master Buds", banner: MasterSeriesBanner5 },
];

export default function SmartWatch() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { activeIndex, scrollToIndex } = useStackedScrollNav(mainRef, {
    // markers: true,
  });

  return (
    <main className="w-full  ">
      {/* Hero Banner */}
      <header className="w-full aspect-1920/1400">
        <Image
          src={MasterSeriesBanner1}
          alt="Master Series"
          priority
          className=" w-full h-full object-cover object-center"
        />
      </header>

      <section className=" w-full bg-white ">
        {/* Product Navigation */}
        <nav className="sticky top-0 z-9999 mx-auto w-fit px-10p py-8p border border-white rounded-50p bg-dark-5 mb-10p">
          <ul className="flex items-center gap-6p">
            {series.map(({ name }, index) => (
              <li key={name}>
                <button
                  onClick={() => scrollToIndex(index)}
                  type="button"
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`px-18p py-11p rounded-50p text-13 uppercase cursor-pointer transition-all duration-300 border ${
                    activeIndex === index
                      ? "bg-white-2 text-white border-white"
                      : "border-transparent text-white/70"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Animated Banners */}
        <div ref={mainRef} className="w-full">
          {series.map(({ name, banner }, index) => (
            <div
              key={name}
              className={`card w-full aspect-1920/670 ${
                index === series.length - 1 ? "relative z-999" : ""
              }`}
            >
              <Image
                src={banner}
                alt={`${name} ${index + 1}`}
                sizes="100vw"
                className="image w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        {/*  */}
      </section>
    </main>
  );
}

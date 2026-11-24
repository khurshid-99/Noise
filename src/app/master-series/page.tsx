"use client";

import {
  MasterSeriesBanner1,
  MasterSeriesBanner2,
  MasterSeriesBanner3,
  MasterSeriesBanner4,
  MasterSeriesBanner5,
} from "@/Images";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin);

const masterSeriesBanners = [
  MasterSeriesBanner2,
  MasterSeriesBanner3,
  MasterSeriesBanner4,
  MasterSeriesBanner5,
];

const masterSeriesProducts = [
  "Master Buds Open",
  "Master Buds Max",
  "Master Buds 2",
  "Master Buds",
];

export default function MasterSeries() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoScrolling = useRef(false);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".card");

      triggersRef.current = cards.map((card, index) =>
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: index !== cards.length - 1,
          pinSpacing: false,
          // markers: process.env.NODE_ENV === "development",
          onEnter: () => {
            if (!isAutoScrolling.current) setActiveIndex(index);
          },
          onEnterBack: () => {
            if (!isAutoScrolling.current) setActiveIndex(index);
          },
        }),
      );
    },
    { scope: mainRef },
  );

  const handleProductClick = (index: number) => {
    const st = triggersRef.current[index];
    if (!st) return;

    isAutoScrolling.current = true;
    setActiveIndex(index);

    gsap.to(window, {
      scrollTo: st.start + 1,
      duration: 1,
      ease: "power2.inOut",
      overwrite: "auto",
      onComplete: () => {
        isAutoScrolling.current = false;
      },
      onInterrupt: () => {
        isAutoScrolling.current = false;
      },
    });
  };

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
            {masterSeriesProducts.map((product, index) => (
              <li key={product}>
                <button
                  onClick={() => {
                    handleProductClick(index);
                  }}
                  type="button"
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`px-18p py-11p rounded-50p text-13 uppercase cursor-pointer transition-all duration-300 border ${
                    activeIndex === index
                      ? "bg-white-2 text-white border-white"
                      : "border-transparent text-white/70"
                  }`}
                >
                  {product}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Animated Banners */}
        <div ref={mainRef} className="w-full">
          {masterSeriesBanners.map((banner, index) => (
            <div
              key={index}
              className={`card w-full aspect-1920/670 ${
                index === masterSeriesBanners.length - 1 ? "relative z-999" : ""
              }`}
            >
              <Image
                src={banner}
                alt={`Master Series banner ${index + 1}`}
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

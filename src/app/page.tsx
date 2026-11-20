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
      <footer className="w-full bg-black px-120p pt-55p pb-32p ">
        <div className="flex items-start justify-between ">
          <Link href={""}>
            <Image
              src={LogoWhite}
              alt=""
              className="w-130p h-auto object-center object-cover "
            />
          </Link>

          <div className="flex flex-col gap-12p ">
            <h4 className="text-14 text-white font-Inter ">
              Receive the Latest Updates from Noise
            </h4>
            <div className="w-[430px] h-[48px] border border-white rounded-50p pl-20p py-6p pr-6p flex items-center gap-12p ">
              <input
                type="email"
                name=""
                id=""
                placeholder="your@email.com"
                className="w-full text-14 outline-none  "
              />
              <button className="bg-white w-35p aspect-square rounded-50p text-black flex items-center justify-center ">
                <ArrowRight className="w-16p aspect-square " />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full grid grid-cols-5 gap-25p pt-75p ">
          <div>
            <h3 className="text-12 text-gray-5 font-Inter font-medium uppercase ">
              About Noise
            </h3>
            <ul className="flex flex-col gap-14p pt-20p ">
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>About Us</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Blogs</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Student Discount</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Careers</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>In the Press</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Meet the Founders</Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h3 className="text-12 text-gray-5 font-Inter font-medium uppercase ">
              Support
            </h3>
            <ul className="flex flex-col gap-14p pt-20p ">
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Download Your Invoice</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Track Your Order</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Shipping and Return Policy</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Register Your Warranty</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Product Support</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Register a Complaint</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h3 className="text-12 text-gray-5 font-Inter font-medium uppercase ">
              Shop
            </h3>
            <ul className="flex flex-col gap-14p pt-20p ">
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Master Series</Link>
              </li>
              {/*  */}
              <li className="text-14 text-white font-Inter font-normal">
                <AccordionItem title="Smart Watches" style="pl-14p ">
                  <AccordionItem title="Shop by Price" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Under ₹2,000</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>₹2,000 – ₹4,000</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Above ₹4,000</Link>
                    </li>
                  </AccordionItem>

                  <AccordionItem title="Shop by Feature" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Smart Watches with Alexa</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>AMOLED Display Smart Watches</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Round Dial Smart Watches</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>BT Calling Smart Watches</Link>
                    </li>
                  </AccordionItem>

                  <AccordionItem title="Shop by Gender" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Smart Watches for Men</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Smart Watches for Women</Link>
                    </li>
                  </AccordionItem>
                </AccordionItem>
              </li>
              {/*  */}
              <li className="text-14 text-white font-Inter font-normal ">
                <AccordionItem title="Earbuds & Headphones" style="pl-14p ">
                  <AccordionItem title="Shop by Feature" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>ANC Earbuds</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Gaming Earbuds</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Low Latency Earbuds</Link>
                    </li>
                  </AccordionItem>
                </AccordionItem>
              </li>
              {/*  */}
              <li className="text-14 text-white font-Inter font-normal ">
                <AccordionItem title="Home Audio" style="pl-14p ">
                  <AccordionItem title="Shop by channel" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Homestage 5.2.4</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Homestage 5.1</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Homestage 3.2</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Homestage 2.1</Link>
                    </li>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem title="Shop by Power" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>700W</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>500W</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>200W</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>90W</Link>
                    </li>
                  </AccordionItem>
                </AccordionItem>
              </li>
              {/*  */}
              <li className="text-14 text-white font-Inter font-normal ">
                <AccordionItem title="Power Series" style="pl-14p">
                  <AccordionItem title="Shop Cables" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Non-magnetic Charging Cable</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Magnetic Charging Cable</Link>
                    </li>
                  </AccordionItem>

                  {/*  */}

                  <AccordionItem title="Shop by Capacity" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>10,000 mAh Powerbank</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>20,000 mAh Powerbank</Link>
                    </li>
                  </AccordionItem>

                  {/*  */}

                  <AccordionItem title="Shop Chargers" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>100W GaN Charger</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>65W GaN Charger</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>30W GaN Charger</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>20W Charger</Link>
                    </li>
                  </AccordionItem>

                  {/*  */}

                  <AccordionItem title="Shop by Category" style="pl-8p">
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Powerbanks</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Chargers</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Cables</Link>
                    </li>
                    <li className="text-gray-5 text-13 ">
                      <Link href={""}>Tag 1</Link>
                    </li>
                  </AccordionItem>

                  {/*  */}
                </AccordionItem>
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h3 className="text-12 text-gray-5 font-Inter font-medium uppercase ">
              For Business
            </h3>
            <ul className="flex flex-col gap-14p pt-20p ">
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Noise for Business</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Corporate Enquiries</Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h3 className="text-12 text-gray-5 font-Inter font-medium uppercase ">
              Legal
            </h3>
            <ul className="flex flex-col gap-14p pt-20p ">
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Terms & Conditions</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li className="text-14 text-white font-Inter font-normal ">
                <Link href={""}>Social Responsibility</Link>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="flex items-center justify-between pt-96p ">
          <p className="text-12 text-gray-4 font-Inter ">
            Copyright © 2025, Noise. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-12p ">
            <li className="w-38p aspect-square rounded-50p border border-white flex items-center justify-center ">
              <Link href={""}>
                <InstaIcon />
              </Link>
            </li>
            <li className="w-38p aspect-square rounded-50p border border-white flex items-center justify-center ">
              <Link href={""}>
                <FacebookIcon />
              </Link>
            </li>
            <li className="w-38p aspect-square rounded-50p border border-white flex items-center justify-center ">
              <Link href={""}>
                <YoutubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

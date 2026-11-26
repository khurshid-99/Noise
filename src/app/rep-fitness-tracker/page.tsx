import {
  ArrowRight,
  BannerLogo,
  ShortArrowDown,
  ShortArrowRight,
  Sparkling,
  Star,
} from "@/client/components/Icons";
import { OfferLogo, RepCategory1 } from "@/Images";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(820px,1090px))] grid-flow-col relative ">
        <div className="sticky top-0 h-screen bg-[red]">
          <h1>hay</h1>
        </div>
        <div className=" bg-white px-23p py-35p flex flex-col gap-36p ">
          <div>
            <div className="flex items-center justify-between ">
              <h1 className="text-32 text-black font-Inter font-bold ">
                REP - 24x7 Fitness Tracker
              </h1>
              <div className="flex items-center gap-4p px-8p py-4p rounded-8p border border-gray-7 text-11 text-dark-7 ">
                <Star />
                <span>4.7 (410)</span>
              </div>
            </div>
            {/*  */}
            <div>
              <p className="text-14 text-gray-8 font-normal ">
                Sleep, Recovery & Effort Scores, 27g, 5 ATM, 10 day battery
              </p>
            </div>
            {/*  */}
            <div className="flex items-center gap-6p ">
              <h2 className="text-18 text-dark-7 font-bold ">₹9,999</h2>
              <span className="text-12 text-gray-9 line-through ">₹10,999</span>
              <span className="text-12 text-black font-bold px-10p py-5p rounded-50p flex items-center gap-6p tracking-widest bg-[linear-gradient(90.65deg,#a08048_-58.46%,#f5d196_-8.25%,#ffe4b7_59.54%,#e3bf85_114.27%,#9e7d46_148.05%)] ">
                9% <span className="uppercase text-inherit ">off</span>
              </span>
              <span className="text-10 text-gray-8 ">
                (MRP Inclusive of all taxes)
              </span>
            </div>
            <div className="flex items-center justify-between gap-8p p-10p mt-12p border border-black-3 rounded-12p bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-gold-8)_0%,transparent)_-57.11%,var(--color-gold-9)_292.65%),linear-gradient(0deg,var(--color-white),var(--color-white))] ">
              <div className="w-full flex items-center gap-8p ">
                <div className="w-32p aspect-square rounded-6p bg-[radial-gradient(circle_at_50%_50%,var(--color-gold-1)_0,var(--color-gold-2))] ">
                  <Image src={OfferLogo} alt="" />
                </div>
                <span className="text-12 text-dark-7 ">
                  Get it for ₹8,999 at checkout
                </span>
              </div>
              {/*  */}
              <div className=" flex items-center gap-4p text-black-2 ">
                <span className="text-10 text-black font-bold text-nowrap px-8p py-4p rounded-6p bg-[linear-gradient(90.65deg,var(--color-gold-3)_-58.46%,var(--color-gold-4)_-8.25%,var(--color-gold-5)_59.54%,var(--color-gold-6)_114.27%,var(--color-gold-7)_148.05%)]">
                  Extra ₹1,000 off
                </span>
                <ShortArrowRight className="w-18p aspect-square " />
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between p-10p rounded-12p border border-black-3 mt-12p bg-[linear-gradient(90deg,var(--color-white)_43.785%,var(--color-green-3))] ">
              <div className="flex flex-col justify-start gap-4p ">
                <p className="text-12 text-dark-7 ">
                  No Cost EMI available at checkout
                </p>
                <span className="text-12 text-gray-9 ">3/6 Month options</span>
              </div>
              <span className="text-11 text-white font-black py-4p px-12p rounded-6p bg-green-2 ">
                EMI
              </span>
            </div>
            {/*  */}
            <div className="flex items-center gap-4p p-10p mt-12p ">
              <Sparkling className="text-22 aspect-square text-gray-9 font-black " />
              <p className="text-dark-8 text-12 font-medium ">
                Earn{" "}
                <span className="text-green-2 font-bold ">499 Noise Cash</span>{" "}
                on this purchase
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-12p ">
            <p className="text-14 text-gray-9  ">Models</p>
            <div className="flex items-center gap-12p ">
              <button className="text-12 text-white font-semibold bg-dark-9 px-19p py-12p rounded-8p  ">
                REP
              </button>
              <button className="text-12 text-white font-semibold bg-dark-9 px-19p py-12p rounded-8p  ">
                REP & Strap Combo
              </button>
              <button className="text-12 text-dark-10 font-semibold bg-light-gray px-19p py-12p rounded-8p  ">
                Only Stra
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-14p ">
            <p className="text-14 text-gray-8 font-semibold  ">
              Colour : <span className="text-dark-1 ">Classic Black</span>
            </p>
            {/*  */}
            <div className="flex items-center gap-12p ">
              <div className="flex flex-col gap-12p ">
                <div className="w-fit p-8p rounded-12p border border-black bg-white flex flex-col items-center gap-4p ">
                  <div className="w-67p aspect-square ">
                    <Image
                      src={RepCategory1}
                      alt=""
                      className="w-full aspect-auto object-cover object-center "
                    />
                  </div>
                  {/*  */}
                  <div className="flex flex-col justify-start ">
                    <span className="text-14 text-dark-1 font-semibold">
                      ₹9,999
                    </span>
                    <span className="text-11 text-gray-10 line-through ">
                      ₹10,999{" "}
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <span className="text-10 text-gold-10 px-16p py-4p rounded-50p bg-[linear-gradient(90deg,var(--color-gold-3)_-58.46%,var(--color-gold-4)_-8.25%,var(--color-gold-5)_59.54%,var(--color-gold-6)_114.27%,var(--color-gold-7)_148.05%)] ">
                    Selling fast
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-12p ">
                <div className="w-fit p-8p rounded-12p border border-black bg-white flex flex-col items-center gap-4p ">
                  <div className="w-67p aspect-square ">
                    <Image
                      src={RepCategory1}
                      alt=""
                      className="w-full aspect-auto object-cover object-center "
                    />
                  </div>
                  {/*  */}
                  <div className="flex flex-col justify-start ">
                    <span className="text-14 text-dark-1 font-semibold">
                      ₹9,999
                    </span>
                    <span className="text-11 text-gray-10 line-through ">
                      ₹10,999{" "}
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <span className="text-10 text-gold-10 px-16p py-4p rounded-50p bg-[linear-gradient(90deg,var(--color-gold-3)_-58.46%,var(--color-gold-4)_-8.25%,var(--color-gold-5)_59.54%,var(--color-gold-6)_114.27%,var(--color-gold-7)_148.05%)] ">
                    Selling fast
                  </span>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-12p ">
            <div className="flex items-center justify-between ">
              <p className="text-14 text-gray-9 font-semibold ">
                Personalisation
              </p>
              <button className="text-12 text-gray-8 underline font-semibold ">
                Learn more
              </button>
            </div>
            <div className="px-8p py-16p rounded-8p border border-black bg-[linear-gradient(90deg,var(--color-white)_43.785%,var(--color-gold-11)_100%)] ">
              <form action="" className="flex items-center gap-11p ">
                <label className="relative flex items-center cursor-pointer ">
                  <input type="checkbox" className="peer sr-only " />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="w-20p h-20p scale-180 opacity-0 peer-checked:opacity-100 transition-opacity "
                  >
                    <rect
                      x="5.64062"
                      y="6.14844"
                      width="12.7143"
                      height="12.7143"
                      rx="2.92857"
                      stroke="#171717"
                      fill="#171717"
                    />
                    <path
                      d="M8.04492 12.5002L10.5412 14.9965L15.9569 10.0039"
                      stroke="#F7F7F7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="w-20p aspect-square absolute inset-0 rounded-6p border border-gray-12 peer-checked:opacity-0 pointer-events-none" />
                </label>
                <span className="text-14 text-dark-7 ">
                  Make it a gift order @ ₹99
                </span>
              </form>
            </div>
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-12p ">
            <div className="flex items-center justify-between ">
              <p className="text-14 text-gray-9 font-semibold ">
                Device Protection
              </p>
              <button className="text-12 text-gray-9 font-semibold ">
                Learn more
              </button>
            </div>
            {/*  */}
            <div className="w-full px-8p py-16p rounded-8p border border-black flex items-center justify-between  bg-[linear-gradient(90deg,var(--color-white)_43.785%,var(--color-green-3)_100%)] ">
              <form action="" className="w-full flex items-center gap-12p ">
                <label className="relative flex items-center cursor-pointer ">
                  <input type="checkbox" className="peer sr-only " />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="w-20p h-20p scale-180 opacity-0 peer-checked:opacity-100 transition-opacity "
                  >
                    <rect
                      x="5.64062"
                      y="6.14844"
                      width="12.7143"
                      height="12.7143"
                      rx="2.92857"
                      stroke="#171717"
                      fill="#171717"
                    />
                    <path
                      d="M8.04492 12.5002L10.5412 14.9965L15.9569 10.0039"
                      stroke="#F7F7F7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="w-20p aspect-square absolute inset-0 rounded-6p border border-gray-12 peer-checked:opacity-0 pointer-events-none" />
                </label>
                <span className="text-14 text-dark-7 ">
                  Add 1-Year Accidental & Liquid Damage Protection @{" "}
                </span>
              </form>
              <span>
                <ShortArrowDown className="w-20p aspect-square " />
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-16p ">
            <button className="w-1/2 bg-white rounded-50p border border-black py-13p px-22p flex flex-col gap-4p ">
              <span className="text-14 text-black font-bold ">Add to Cart</span>
              <span className="text-8 text-black font-thin ">
                % Additional offers
              </span>
            </button>
            <button className="w-1/2 bg-black rounded-50p border border-black py-13p px-22p flex flex-col gap-4p ">
              <span className="text-14 text-white font-bold ">Buy Now</span>
              <span className="text-8 text-white  font-thin ">
                ⚡Faster Checkout
              </span>
            </button>
          </div>
          {/*  */}
          <div>
            <p className="text-14 text-gray-9 p-10p ">Check delivery date</p>
            <div className="flex items-center justify-between pl-18p pr-8p border border-black-4 rounded-8p py-5p ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter pincode for delivery date"
                className="w-full h-full text-13 text-black placeholder:text-black-4 "
              />
              <button className="px-18p py-10p rounded-8p text-13 text-white bg-dark-7 cursor-pointer ">
                Check
              </button>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="w-365p aspect-365/95 p-20p flex items-center gap-16p border border-black-3 rounded-12p   ">
              <div>
                <BannerLogo className="w-55p aspect-square " />
              </div>
              <div>
                <h2 className="text-14 text-dark-7 font-semibold ">
                  Buy
                  <span> & get </span>
                  <span>10%</span>
                  off
                </h2>
                <span className="text-12 text-black-5 text-wrap ">
                  Add any 2 products and get 10% off
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div>
              <button>Description</button>
              <div></div>
            </div>
          </div>
          {/*  */}
          <div>
            <div>
              <Image src={""} alt="" />
              <p>
                7 day <br /> replacement
              </p>
            </div>
            <div>
              <Image src={""} alt="" />
              <p>
                1 year <br />
                warranty
              </p>
            </div>
            <div>
              <Image src={""} alt="" />
              <p>
                Secure <br />
                payment
              </p>
            </div>
          </div>
          {/*  */}
          <div>
            <p>Recently viewed</p>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

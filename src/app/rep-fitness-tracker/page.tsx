"use client";
import CloserLookCart from "@/client/components/closerLookCart/CloserLookCart";
import {
  BannerLogo,
  ReplacementIcon,
  SecurePaymentIcon,
  ShortArrowDown,
  ShortArrowRight,
  Sparkling,
  Star,
  WarrantyIcon,
} from "@/client/components/Icons";
import MediaCart from "@/client/components/mediaCart/MediaCart";
import RipSuggestionCart from "@/client/components/ripSuggestionCart/RipSuggestionCart";
import {
  OfferLogo,
  RepBanner1,
  RepBanner2,
  RepBanner3,
  RepBanner4,
  RepBanner5,
  RepBanner6,
  RepCategory1,
  RepVideoTheme1,
  RepVideoTheme2,
  RepVideoTheme3,
  RepVideoTheme4,
} from "@/Images";
import Image from "next/image";
import { useState } from "react";

const CloserLookData = [
  {
    name: "What's in the box 👀",
    img: RepVideoTheme1,
    video: "/rep/rep_video1.mp4",
  },
  {
    name: "Get hyrox ready!",
    img: RepVideoTheme2,
    video: "/rep/rep_video2.mp4",
  },
  {
    name: "Track smarter!",
    img: RepVideoTheme3,
    video: "/rep/rep_video3.mp4",
  },
  {
    name: "Your next fitness partner",
    img: RepVideoTheme4,
    video: "/rep/rep_video4.mp4",
  },
];

export default function Rep() {
  const [isActiveDescription, setIsActiveDescription] = useState<number | null>(
    null,
  );

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const HandleDescription = (index: number) => {
    setIsActiveDescription((prev) => (prev === index ? null : index));
  };

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
                className="w-full h-full text-13 text-black placeholder:text-black-4 outline-none "
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
          <div className="flex flex-col gap-12p ">
            <div className="px-16p  border border-gray-14 rounded-12p">
              <button
                onClick={() => HandleDescription(1)}
                className="w-full flex items-center justify-between text-14 text-dark-1 font-semibold py-18p bg-white cursor-pointer "
              >
                <span>Description</span>
                <span
                  className={`duration-300 ${isActiveDescription === 1 ? "rotate-180" : "rotate-0"}`}
                >
                  <ShortArrowDown className="w-20p aspect-square " />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${isActiveDescription === 1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden ">
                  <div className="pb-16p ">
                    <p className=" text-14 text-gray-8 ">
                      Your body sends signals all day, whether you're paying
                      attention or not. The Noise REP Band reads them
                      continuously, turning sleep, recovery, and strain into a
                      clear signal on how hard to push. At 27g with a 10-day
                      battery, it stays on through training, travel, and sleep.
                      No screen. No subscription. Just your data, yours from day
                      1. Better performance starts now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="px-16p  border border-gray-14 rounded-12p">
              <button
                onClick={() => HandleDescription(2)}
                className="w-full flex items-center justify-between text-14 text-dark-1 font-semibold py-18p bg-white cursor-pointer "
              >
                <span>Key Features</span>
                <span
                  className={` duration-300 ${isActiveDescription ? "rotate-180 " : "rotate-0"} `}
                >
                  <ShortArrowDown className="w-20p aspect-square " />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${isActiveDescription === 2 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden ">
                  <div className="pb-16p ">
                    <ul className="pl-20p list-disc marker:text-black marker:tabular-nums flex flex-col gap-4p ">
                      <li
                        className="
                        text-14 text-black "
                      >
                        <strong>Sleep, Recovery, Effort: </strong>
                        Three scores, tracked daily. Sleep tells you how you
                        rested. Recovery tells you how ready you are. Effort
                        tells you how hard you worked.
                      </li>
                      <li className="text-14 text-black ">
                        <strong>Up to 10 days of Battery Life: </strong>
                        One charge lasts up to 10 days, through training,
                        travel, and every night of sleep tracking. No mid-week
                        charging required.
                      </li>
                      <li className="text-14 text-black ">
                        <strong>Reference-Grade Sensors:</strong>
                        Calibrated across Indian skin tones, built to read your
                        body&rsquo;s signals accurately, day and night.
                      </li>
                      <li className="text-14 text-black ">
                        <strong>20+ workout modes : </strong>
                        Supports 20+ workout modes, with Auto-Workout Detection
                        available for Walking, Running, Cycling, Elliptical and
                        Rowing.
                      </li>
                      <li className="text-14 text-black ">
                        <strong>No Subscription, No Screen: </strong>
                        Every score, every insight, unlocked from day one. No
                        monthly fee. No display to distract you from the work.
                      </li>
                      <li className="text-14 text-black ">
                        <strong>27g, 5ATM Water Resistant:</strong>
                        Light enough to sit comfortably on your wrist. Rated for
                        the pool, the shower, and everything in between.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="px-16p  border border-gray-14 rounded-12p">
              <button
                onClick={() => HandleDescription(3)}
                className="w-full flex items-center justify-between text-14 text-dark-1 font-semibold py-18p bg-white cursor-pointer "
              >
                <span>Specifications</span>
                <span
                  className={` duration-300 ${isActiveDescription === 3 ? "rotate-180 " : "rotate-0"} `}
                >
                  <ShortArrowDown className="w-20p aspect-square " />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${isActiveDescription === 3 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden ">
                  <div className="pb-16p  ">
                    <ul className="pl-20p list-disc marker:text-black marker:tabular-nums flex flex-col gap-4p ">
                      <li className="text-14 text-black ">
                        Battery Life: Up to 10 days per charge
                      </li>
                      <li className="text-14 text-black ">
                        Charging Type: Magnetic charging dock
                      </li>
                      <li className="text-14 text-black ">
                        Subscription Required: No
                      </li>
                      <li className="text-14 text-black ">
                        Sensor Array: PPG optical sensor + IMU (accelerometer +
                        gyroscope)
                      </li>
                      <li className="text-14 text-black ">
                        Score System: Sleep, Recovery, Effort
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(186px,1fr))] justify-center ">
            <div className="flex flex-col items-center gap-20p ">
              <ReplacementIcon className="w-36p aspect-square " />

              <p className="text-14 text-dark-11 font-bold text-center ">
                7 day <br /> replacement
              </p>
            </div>
            <div className="flex flex-col items-center gap-20p ">
              <WarrantyIcon className="w-36p aspect-square " />
              <p className="text-14 text-dark-11 font-bold text-center ">
                1 year <br />
                warranty
              </p>
            </div>
            <div className="flex flex-col items-center gap-20p ">
              <SecurePaymentIcon className="w-36p aspect-square " />
              <p className="text-14 text-dark-11 font-bold text-center ">
                Secure <br />
                payment
              </p>
            </div>
          </div>
          {/*  */}
          <div>
            <p className="text-16 text-gray-8 font-medium ">Recently viewed</p>
            <div className="flex items-center gap-8p ">
              <RipSuggestionCart />
              <RipSuggestionCart />
              <RipSuggestionCart />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="relative ">
        <div className="sticky top-0 p-15p z-999 bg-white ">
          <ul className="flex items-center gap-80p ">
            <li
              className="relative text-20 text-dark-12 font-bold 
              before:content-['']
              before:absolute
              before:top-full
              before:left-1/2
              before:w-full
              before:h-4p
              before:pointer-events-none
              before:border-b
              before:border-transparent
              before:-translate-x-1/2
              before:[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#a0804880_-4.91%,#f5d19680_21.21%,#e3bf8580_84.94%,#9e7d4680_102.51%)_border-box]
            "
            >
              Overview
            </li>
            <li
              className="relative text-20 text-dark-12 font-bold 
              before:content-['']
              before:absolute
              before:top-full
              before:left-1/2
              before:w-full
              before:h-4p
              before:pointer-events-none
              before:border-b
              before:border-transparent
              before:-translate-x-1/2
              before:[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#a0804880_-4.91%,#f5d19680_21.21%,#e3bf8580_84.94%,#9e7d4680_102.51%)_border-box]
            "
            >
              Specs
            </li>
            <li
              className="relative text-20 text-dark-12 font-bold 
              before:content-['']
              before:absolute
              before:top-full
              before:left-1/2
              before:w-full
              before:h-4p
              before:pointer-events-none
              before:border-b
              before:border-transparent
              before:-translate-x-1/2
              before:[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#a0804880_-4.91%,#f5d19680_21.21%,#e3bf8580_84.94%,#9e7d4680_102.51%)_border-box]
            "
            >
              Review
            </li>
            <li
              className="relative text-20 text-dark-12 font-bold 
              before:content-['']
              before:absolute
              before:top-full
              before:left-1/2
              before:w-full
              before:h-4p
              before:pointer-events-none
              before:border-b
              before:border-transparent
              before:-translate-x-1/2
              before:[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#a0804880_-4.91%,#f5d19680_21.21%,#e3bf8580_84.94%,#9e7d4680_102.51%)_border-box]
            "
            >
              FAQ
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="bg-black pt-60p pb-40p ">
          <div className="max-w-1520p mx-auto px-[clamp(24px,4vw,64px)] ">
            <h1 className="text-36 text-white font-black uppercase ">
              TAKE A CLOSER LOOK
            </h1>
            <div className="grid grid-cols-[repeat(4,minmax(0,300px))] gap-x-[clamp(20px,2.5vw,40px)] justify-between pt-10p ">
              {CloserLookData.map(({ name, img, video }, index) => (
                <CloserLookCart
                  key={name}
                  title={name}
                  img={img}
                  video={video}
                  isPlay={playingIndex === index}
                  isDimmed={playingIndex !== null && playingIndex !== index}
                  setIsPlay={(value) => setPlayingIndex(value ? index : null)}
                />
              ))}
              {/*  */}
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="relative bg-black py-64p ">
        <div className="max-w-1150p mx-auto  ">
          <h1 className="text-36 text-white font-semibold uppercase   ">
            IN THE MEDIA
          </h1>
          <div className="flex items-center justify-between  gap-20p pt-30p ">
            <MediaCart
              title="The Time Of India"
              description="with no display lighting up or notifications appearing on the wrist, the REP Band stay focused on quiety colleting the data"
              powerBy="The Times of India"
              titleStyle="bg-[red]  text-36  text-white font-Ucc uppercase "
            />
            <MediaCart
              title="money control"
              description="with no display lighting up or notifications appearing on the wrist, the REP Band stay focused on quiety colleting the data"
              powerBy="The Times of India"
              titleStyle=" bg-green text-26 text-white  font-bold lowercase "
            />
            <MediaCart
              title="India today"
              description="with no display lighting up or notifications appearing on the wrist, the REP Band stay focused on quiety colleting the data"
              powerBy="The Times of India"
              titleStyle=" text-36 text-[red] font-Pxi font-black uppercase"
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="w-full aspect-1920/1224 ">
          <Image
            src={RepBanner1}
            alt=""
            className="w-full object-center object-cover "
          />
        </div>
      </section>
      {/*  */}
      <section>
        <div className="w-full aspect-1920/940 ">
          <Image
            src={RepBanner2}
            alt=""
            className="w-full object-center object-cover "
          />
        </div>
      </section>
      {/*  */}
      <section>
        <div className="w-full aspect-1920/2066 ">
          <Image
            src={RepBanner3}
            alt=""
            className="w-full object-center object-cover "
          />
        </div>
      </section>
      {/*  */}
      <section>
        <div className="w-full aspect-1920/1180 ">
          <Image
            src={RepBanner4}
            alt=""
            className="w-full object-center object-cover "
          />
        </div>
      </section>
      {/*  */}
      <section>
        <div className="w-full aspect-1920/2330 ">
          <Image
            src={RepBanner5}
            alt=""
            className="w-full object-center object-cover "
          />
        </div>
      </section>
      {/*  */}
      <section>
        <div className="w-full aspect-1920/4260 ">
          <Image
            src={RepBanner6}
            alt=""
            className="w-full object-center object-cover "
          />
        </div>
      </section>
      {/*  */}
      <section>
        <div className="max-w-1008p mx-auto ">
          <div className="p-32p ">
            <h2 className="text-24 text-dark-1 font-semibold ">
              Specifications
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-y-24p gap-x-100p pt-24p pl-10p ">
            <p className="text-16 text-dark-1 font-normal font-features-['liga'_off,'clig'_off]  ">
              Country of origin : <span className="text-gray-8 "> P.R.C.</span>
            </p>
            <p className="text-16 text-dark-1 font-normal font-features-['liga'_off,'clig'_off]  ">
              Marketed and Imported by:{" "}
              <span className="text-gray-8 ">
                Nexxbase Marketing Pvt. Ltd, Gurugram, Haryana
              </span>
            </p>
            <p className="text-16 text-dark-1 font-normal font-features-['liga'_off,'clig'_off]  ">
              Package Contains:{" "}
              <span className="text-gray-8 ">
                1 Noise REP Band, 1 magnetic charging dock, 1 user manual, 1
                warranty card
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

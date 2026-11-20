import { GigtIcon, OfferLogo, ProductCardImage1 } from "@/Images";
import Image from "next/image";
import React from "react";
import { LoveIcon, ShadowIcon, Star } from "../Icons";

const RecentProductCard = () => {
  return (
    <div className="w-[280px] aspect-280/460 p-10p rounded-16p bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.15)]">
      <div className="relative w-[260px] aspect-260/269 p-10p  rounded-8p bg-light-gray ">
        <Image
          src={ProductCardImage1}
          alt=" "
          className="w-full aspect-square object-cover object-center "
        />

        <ShadowIcon className="absolute left-1/2 bottom-30p -translate-x-1/2  " />

        {/*  */}

        <div className="absolute top-10p left-10p flex items-center gap-[2px] w-fit rounded-50p px-10p py-4p bg-black ">
          <Image
            src={GigtIcon}
            alt=""
            className="w-10p aspect-square object-center object-cover "
          />
          <span className="text-10 text-white font-Inter ">Free Buds N1 </span>
        </div>

        <button className="absolute right-10p bottom-10p cursor-pointer">
          <LoveIcon />
        </button>
      </div>
      {/*  */}
      <div className="flex flex-col gap-10p pt-18p ">
        <div className="flex items-center gap-4p leading-4 ">
          <div className="flex items-center ">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-10 text-gray-2 ">(592)</p>
        </div>
        <p className="text-18 text-black font-Inter font-bold leading-7">
          Halo 2 Limited Editi...
        </p>
        {/*  */}
        <div className="flex items-center gap-7p text-14 font-Inter leading-7 ">
          <p className="text-gray-1 line-through ">₹6,999</p>
          <p className="text-black ">₹4,499</p>
          <div className="text-green font-bold ">
            <p>
              35% <span>OFF</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div>
          <span className="text-10 text-dark-1 leading-4 ">
            Rotating Bezel | 1.43" AMOLED Display
          </span>
        </div>
        {/*  */}
        <div className="h-25p flex items-center gap-4p  ">
          <div>
            <Image
              src={OfferLogo}
              alt=""
              loading="eager"
              className="w-25p aspect-square object-center object-cover "
            />
          </div>
          <p className="text-14-5 text-green font-Inter font-bold leading-8">
            Offer Price ₹7,199
          </p>
        </div>
        {/*  */}
        <button className="w-fit bg-black text-white text-14 font-Site font-bold uppercase py-12p px-30p rounded-50p tracking-[-0.2px] cursor-pointer ">
          Add To Cart
        </button>
        {/*  */}
        <div className="">
          <label htmlFor="" className=" flex items-center gap-6p ">
            <input type="checkbox" className="inline-block " />
            <span className="inline-block text-14 text-gray-3 leading-6 ">
              Add to Compare
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCard;

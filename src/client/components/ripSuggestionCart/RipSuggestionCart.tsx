import { RepCategory1 } from "@/Images";
import Image from "next/image";

const RipSuggestionCart = () => {
  return (
    <div className="w-352p aspect-352/145 border border-black-6 rounded-12p p-12p flex items-center justify-between shrink-0 ">
      <div className="w-120p aspect-square p-14p bg-light-gray rounded-12p ">
        <Image
          src={RepCategory1}
          alt=""
          className="w-full object-center object-cover "
        />
      </div>
      {/*  */}
      <div className="flex flex-col gap-4p ">
        <h1 className="text-16 text-dark-1 capitalize font-medium ">
          ALT Watch 1 Smartwatch
        </h1>
        <div className="flex items-center gap-8p ">
          <span className="text-16 text-dark-1 font-bold ">₹5999</span>
          <span className="text-12 text-gray-10 font-thin line-through ">
            ₹6999
          </span>
          <div className="text-14 text-green font-Pxi font-semibold ">
            14 % off!
          </div>
        </div>
        <div className="flex items-center gap-4p ">
          <ul className="flex items-center gap-4p ">
            <li>
              <span className="inline-block w-16p aspect-square rounded-50p bg-[red] ">
                {" "}
              </span>
            </li>
            <li>
              <span className="inline-block w-16p aspect-square rounded-50p bg-[red] ">
                {" "}
              </span>
            </li>
            <li>
              <span className="inline-block w-16p aspect-square rounded-50p bg-[red] ">
                {" "}
              </span>
            </li>
          </ul>
          <span className=" text-10 text-gray-1 ">+3</span>
        </div>
        <div>
          <button className="border border-black text-center py-10p px-30p rounded-50p text-14 text-black font-bold leading-7.25 w-full ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default RipSuggestionCart;

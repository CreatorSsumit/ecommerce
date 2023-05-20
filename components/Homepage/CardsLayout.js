import React from "react";
import { playfairDisplay, Roboto_Typo } from "./Landing";
import Image from "next/image";
import { baseColors } from "@/pages";

function CardsLayout({ imgUrl }) {
  return (
    <div className="w-52 h-72 mt-16 bg-slate-800/25 rounded relative ">
      <Image
        width={1000}
        className="rounded"
        height={1000}
        style={{ width: "100%", height: "100%" }}
        src={imgUrl}
      />

      <div className="w-full h-20 rounded bg-[#1f2d2c]/95 absolute bottom-0 px-4">
        <h6
          className={`${Roboto_Typo.className} text-white text-xs  pt-3 font-normal`}
        >
          Light As Spring Yarn-Dyed Pants
        </h6>
        <div className="flex justify-between">
          <h6
            className={`${Roboto_Typo.className} font-medium  text-xs w-16 h-6 flex justify-center items-center mt-2  cursor-pointer bg-gray-200 hover:bg-[#1f2d2c] text-black hover:text-white rounded`}
          >
            Buy Now
          </h6>

          <h3
            className={`${Roboto_Typo.className}  font-medium text-white text-base w-16 h-6 flex justify-center items-center mt-2`}
          >
            @ 200$
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CardsLayout;

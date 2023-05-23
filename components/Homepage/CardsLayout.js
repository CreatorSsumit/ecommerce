import React from "react";
import { playfairDisplay, Roboto_Typo } from "./Landing";
import Image from "next/image";
import { baseColors } from "@/pages";

function CardsLayout({ data }) {
  console.log(data);
  return (
    <div className=" h-72 mt-16  rounded relative ">
      <Image
        width={1000}
        className="rounded"
        height={1000}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          aspectRatio: 3 / 2,
        }}
        src={data?.image?.[0]}
      />

      <div className="w-full h-32 rounded absolute bottom-0 flex flex-col justify-end py-4 px-4 bg-gradient-to-b from-transparent to-[#1f2d2c]">
        <h6
          className={`${Roboto_Typo.className} text-white text-xs  pt-3 font-normal`}
        >
          {data?.productName}
        </h6>
        <div className="flex justify-between">
          <h6
            className={`${Roboto_Typo.className} font-medium  text-xs w-16 h-6 flex justify-center items-center mt-2  cursor-pointer bg-[#D8C4B4] hover:bg-[#1f2d2c] text-black hover:text-white rounded`}
          >
            Buy Now
          </h6>

          <h3
            className={`${Roboto_Typo.className}  font-medium text-white text-base w-16 h-6 flex justify-center items-center mt-2`}
          >
            @{data?.productPrice} $
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CardsLayout;

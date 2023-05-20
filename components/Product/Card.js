import Image from "next/image";
import React from "react";
import { Roboto_Typo } from "../Homepage/Landing";

function Card() {
  return (
    <div className="p-4 flex gap-7 w-full border-b-2 relative bg-gray-100">
      <div className="rounded bg-cover bg-center w-1/3 h-44 overflow-hidden">
        <Image
          style={{ width: "100%", height: "100%" }}
          className="bg-slate-700"
          src={
            "https://i.pinimg.com/564x/c9/bc/eb/c9bcebace584bd850d5705e3a3bf5158.jpg"
          }
          width={1000}
          height={1000}
        />
      </div>
      <div className="block">
        <h6 className="text-3xl">Fairy Chiffon Pants</h6>
        <div className={Roboto_Typo.className}>
          <h6
            className={`text-xs mt-3  ${Roboto_Typo.className} pr-10 text-gray-500`}
          >
            Stunning and ethereal, these so special pants are featured in a
            fluttery, tiered silhouette with lace piecing at the waistband and
            multilayered tulle design for added shape. High-rise fit Hidden side
            zip closure Semi-sheer detailing What’s Care FP ? This product was
            consciously made to reduce our footprint and supports our mission to
            be a little bit better every day.
          </h6>
          <h6 className="text-xm text-red-700 my-1">
            <s>3000 $</s>{" "}
            <span className="text-black text-xs mx-2">10% -off</span>
          </h6>
          <div className="flex">
            <h6 className="text-3xl text-black font-black">2000 $</h6>
            <div className="mx-10 ">
              <button className="w-24 h-8 text-xs bg-gray-700 hover:bg-gray-900 text-white rounded">
                Buy
              </button>
              <button className="w-24 h-8 text-xs mx-2 bg-[#76344C]/75 hover:bg-[#76344C] text-white rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

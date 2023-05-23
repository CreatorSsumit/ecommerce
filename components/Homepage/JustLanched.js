import React, { useEffect, useState } from "react";
import { playfairDisplay, Roboto_Typo } from "./Landing";

// import { productSchema } from "@/models/productSchema";
import Image from "next/image";
import { baseColors } from "@/pages";
import CardsLayout from "./CardsLayout";

import Carousel from "better-react-carousel";
import axios from "axios";

function JustLanched(props) {
  const [productListLaunched, setproductListLaunched] = useState([]);
  useEffect(() => {
    axios.get("/api/product").then((e) => {
      setproductListLaunched(e?.data);
    });
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-slate-100">
        <div>
          <h6
            className={`${playfairDisplay.className} text-3xl font-semibold text-center pt-10 flex flex-col`}
          >
            <span className=" pb-2 border-[#1f2d2c]/25">Just Launched</span>
            <span className="text-xs">
              -- Target: 'Expect More. Pay Less.' --
            </span>
          </h6>
          <div className="w-full h-full flex justify-evenly gap-5 px-10">
            <Carousel
              cols={5}
              rows={1}
              gap={10}
              loop={true}
              // autoplay={2500}
              className="transition-all"
            >
              {productListLaunched &&
                productListLaunched?.map((e) => {
                  return (
                    <Carousel.Item>
                      <CardsLayout data={e} />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <h6
            className={`${playfairDisplay.className} text-2xl italic text-center pt-10 flex flex-col`}
          >
            <span className=" pb-2 border-[#1f2d2c]/25 italic">
              Get dolled up, Be Fashionable
            </span>
            <span className="text-xs">
              it can be fun to follow the fashions and debate them.'
            </span>
          </h6>
        </div>
      </div>
    </>
  );
}

export default JustLanched;

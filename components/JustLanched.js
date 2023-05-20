import React from "react";
import { playfairDisplay, Roboto_Typo } from "./Landing";
import Image from "next/image";
import { baseColors } from "@/pages";
import CardsLayout from "./CardsLayout";
import Carousel from "better-react-carousel";

function JustLanched() {
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
              autoplay={2500}
              className="transition-all"
            >
              <Carousel.Item>
                <CardsLayout
                  imgUrl={
                    "https://i.pinimg.com/564x/04/7a/77/047a77b6f95a6b870c3cb422c1fbe37d.jpg"
                  }
                />
              </Carousel.Item>
              <Carousel.Item>
                <CardsLayout
                  imgUrl={
                    "https://i.pinimg.com/564x/58/16/11/5816110ec0ce51f5caa778e4621f37cd.jpg"
                  }
                />
              </Carousel.Item>
              <Carousel.Item>
                <CardsLayout
                  imgUrl={
                    "https://i.pinimg.com/564x/cd/e2/ae/cde2aed0391ed39a17c5fac7137c9ea9.jpg"
                  }
                />
              </Carousel.Item>
              <Carousel.Item>
                <CardsLayout
                  imgUrl={
                    "https://i.pinimg.com/564x/ab/e7/b4/abe7b4e75eb1c8dc462e7198f308e1c8.jpg"
                  }
                />
              </Carousel.Item>
              <Carousel.Item>
                <CardsLayout
                  imgUrl={
                    "https://i.pinimg.com/564x/1b/88/4f/1b884f151efb1768a8cc620a6797fcd1.jpg"
                  }
                />
              </Carousel.Item>
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

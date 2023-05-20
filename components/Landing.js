import React from "react";
import {
  Playfair_Display as PlayfairDisplay,
  Raleway,
  Roboto,
} from "next/font/google";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "better-react-carousel";
import { IMAGE_LINK_BASE } from "@/pages";

export const playfairDisplay = PlayfairDisplay({
  subsets: ["latin"],
});

export const Roboto_Typo = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Landing() {
  return (
    <div
      className={`w-full h-screen flex font-extrabold justify-center relative ${playfairDisplay.className}`}
    >
      <div className="w-full text-right pl-2 text-5xl bg-slate-200 ">
        <div className="w-full h-50   mt-32 p-4">
          <span className="text-6xl text-[#1f2d2c]">Complement</span>
          <br />
          your flawless <br /> beauty.
        </div>
        <div className="text-sm p-4 mt-10">
          we don't need to pay special attention, as whenever we see most people
          (especially younger people) wearing the same design, it reflects that
          the particular style is a new fashion trend at the moment ❣
        </div>
      </div>
      <div
        className="w-10/12  flex justify-center bg-slate-200 relative"

        // style={{ backgroundColor: "#1F2D2C" }}
      >
        <div
          style={{ borderColor: "#1f2d2c" }}
          title="Buy"
          className="absolute top-3/4 w-24 h-24 rounded-full transition-all border-8  flex justify-center items-center  z-10 hover:bg-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-5xl hover:w-8 hover:h-8 transition-all animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div className="">
          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop={true}
            showDots={false}
            hideArrow={true}
            autoplay={1500}
          >
            <Carousel.Item>
              <Image
                style={{ width: "100vh", height: "100vh" }}
                src={`${IMAGE_LINK_BASE}/cloth_pcmr1y.jpg`}
                width={1000}
                height={1000}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                style={{ width: "100vh", height: "100vh" }}
                src={`${IMAGE_LINK_BASE}/cloth2_cfp5wz.jpg`}
                width={1000}
                height={1000}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                style={{ width: "100vh", height: "100vh" }}
                src={`${IMAGE_LINK_BASE}/cloth1_dhuv5m.jpg`}
                width={1000}
                height={1000}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                style={{ width: "100vh", height: "100vh" }}
                src={`${IMAGE_LINK_BASE}/c9bcebace584bd850d5705e3a3bf5158_cvhy3p.jpg`}
                width={1000}
                height={1000}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="w-full text-left  text-5xl bg-slate-200 ">
        <div className="mt-72">
          Be Each day <span className="text-[#76344C]"> Beautiful. </span>
        </div>
        <div className="text-sm p-4 mt-10">
          I could give up shopping, but I’m not a quitter ❣
        </div>
      </div>
    </div>
  );
}

export default Landing;

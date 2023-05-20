import React from "react";
import { Roboto_Typo, playfairDisplay } from "./Landing";
import Typed from "typed.js";

function AboutUs() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hii !", "Hello !"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="w-full h-screen bg-slate-100">
        <h6
          className={`${playfairDisplay.className} text-3xl font-semibold text-center pt-10 flex flex-col`}
        >
          <span className=" pb-2 border-[#1f2d2c]/25">Let Talk About Us</span>
          <span className="text-xs">-- Target: 'Let me know more' --</span>
        </h6>

        <h6
          className={`${playfairDisplay.className} text-3xl font-semibold text-center pt-10 flex flex-col`}
        >
          <span className=" pb-2 text-8xl ">
            <span ref={el} />
            <span className="text-[#76344C]">NyMaa</span> this
            <span className="text-[#1f2d2c]"> side</span>
          </span>

          <span className="text-sm p-12">
            NyMaa Fashion brings you Hidden Gems - a curation of niche home
            grown labels that are deeply rooted in Indian craftsmanship and
            offer pieces that are mindfully handmade by local artisans. These
            niche labels stay true to the ethos of hidden gems by interpreting
            modern fashion trends and advancing craft techniques, giving birth
            to the most exquisite creations that you will find only on NyMaa
            Fashion.
          </span>

          <span
            className={`text-sm px-36 font-medium ${Roboto_Typo.className}`}
          >
            From traditional Indian wear to contemporary and into-western wear,
            NyMaa Fashion brings you the latest in fashion in an array of
            styles. While there are plenty of trends to look out for, the world
            of fashion is greatly inspired by comfortable clothing ❣
          </span>
        </h6>
      </div>
    </div>
  );
}

export default AboutUs;

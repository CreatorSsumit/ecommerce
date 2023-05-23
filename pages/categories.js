import { playfairDisplay } from "@/components/Homepage/Landing";
import Layout from "@/components/Layout";
import CategoriesOption from "@/components/categories/categoriesOption";

import React from "react";

function categories() {
  let dummyArr = new Array(10).fill("");

  return (
    <Layout>
      <div className="w-full h-screen bg-[#76344C]/25 overflow-hidden relative">
        <h6
          className={`${playfairDisplay.className} text-3xl font-semibold text-center pt-6 pb-2 flex flex-col`}
        >
          <span className=" pb-2 border-[#1f2d2c]/25">
            ---- Our Flown Categories ----
          </span>
          <span className="text-xs">
            -- Target: 'We Help More. Less Time.' --
          </span>
        </h6>
        <div className="w-full h-full overflow-auto scrollbar-hide">
          <div className="w-full  place-content-center  flex-wrap  flex gap-4 px-12 py-24 text-sm ">
            {dummyArr?.map((e, i) => {
              let index;

              if (i === dummyArr.length - 1) {
                index = dummyArr.length - 1;
              } else if (i === 0) {
                index = 0;
              } else {
                index = "";
              }

              return (
                <>
                  <CategoriesOption name={""} index={index} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default categories;

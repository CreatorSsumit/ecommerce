import React, { useEffect, useState } from "react";
import { playfairDisplay } from "./Landing";
import axios from "axios";
import CategoriesOption from "../categories/categoriesOption";

function Categories() {
  const [categoriesTopList, setcategoriesTopList] = useState([]);

  useEffect(() => {
    axios.get("/api/categories").then((e) => {
      setcategoriesTopList(e?.data?.reverse()?.slice(0, 5));
    });
  }, []);

  return (
    <div className={playfairDisplay.className}>
      <div className="w-full h-60 bg-[#76344C]/25 relative overflow-hidden">
        <h6
          className={`${playfairDisplay.className} text-3xl font-semibold text-center pt-10 flex flex-col`}
        >
          <span className=" pb-2 border-[#1f2d2c]/25">
            ---- Our Top 5 Flown Categorie Products ----
          </span>
          <span className="text-xs">
            -- Target: 'We Help More. Less Time.' --
          </span>
        </h6>
        <div className="w-full h-full flex gap-4 px-12 py-10 text-sm justify-center">
          {categoriesTopList &&
            categoriesTopList.map((e, i) => {
              let index;

              if (i === categoriesTopList.length - 1) {
                index = categoriesTopList.length - 1;
              } else if (i === 0) {
                index = 0;
              } else {
                index = "";
              }
              return <CategoriesOption index={index} name={e.categoriesName} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Categories;

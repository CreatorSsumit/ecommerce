import React from "react";
import { playfairDisplay } from "./Landing";

function Categories() {
  return (
    <div className={playfairDisplay.className}>
      <div className="w-full h-60 bg-[#76344C]/25 relative overflow-hidden">
        <h6
          className={`${playfairDisplay.className} text-3xl font-semibold text-center pt-10 flex flex-col`}
        >
          <span className=" pb-2 border-[#1f2d2c]/25">
            ---- Our Top Flown Categorie Products ----
          </span>
          <span className="text-xs">
            -- Target: 'We Help More. Less Time.' --
          </span>
        </h6>
        <div className="w-full h-full flex gap-4 px-12 py-10 text-sm">
          <button className="w-2/12 h-10 border-2 border-[#76344C] rounded-l-full font-semibold hover:bg-[#76344C] hover:text-white">
            Kurtis Kurtas/Tunics
          </button>
          <button className="w-2/12 border-2 h-10 border-[#76344C] rounded-none font-semibold hover:bg-[#76344C] hover:text-white">
            Sarees
          </button>
          <button className="w-2/12 h-10 border-2 border-[#76344C] rounded-none font-semibold hover:bg-[#76344C] hover:text-white">
            Lehengas
          </button>
          <button className="w-2/12 border-2 h-10 border-[#76344C] rounded-none font-semibold hover:bg-[#76344C] hover:text-white">
            Salwar Suits And Sets
          </button>
          <button className="w-2/12 h-10 border-2 border-[#76344C] rounded-none font-semibold hover:bg-[#76344C] hover:text-white">
            Dupattas
          </button>
          <button className="w-2/12 h-10 border-2 border-[#76344C] rounded-r-full font-semibold hover:bg-[#76344C] hover:text-white">
            Ethnic Dresses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;

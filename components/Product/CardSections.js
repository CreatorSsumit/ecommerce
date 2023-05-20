import React from "react";
import Card from "./Card";

function CardSections() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="w-full h-full  flex">
        <div className="w-4/12 relative border-r-2 bg-slate-50">
          <h6 className="text-black text-center py-4 font-semibold ">
            -- Filters --
          </h6>
          <div className="w-full text-sm ">
            <div className="w-full border-b-2 py-4 border-gray-300">
              <input type="radio" className="mx-4" name="range" /> Low To High{" "}
              <br />
            </div>
            <div className="w-full border-b-2 py-4 border-gray-300">
              <input type="radio" className="mx-4" name="range" /> High To Low{" "}
              <br />
            </div>
            <div className="w-full border-b-2 py-4 px-4 border-gray-300 flex">
              Enter Range :
              <div className="flex font-semibold">
                <input
                  type="text"
                  className="mx-4 w-14 p-1 border-b-2 border-b-gray-500 bg-slate-50"
                />
                To
                <input
                  type="text"
                  className="mx-4 w-14 p-1 border-b-2 border-b-gray-500 bg-slate-50"
                />
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide">
          <h6 className="   text-sm bg-slate-50 w-full items-center justify-center flex h-10">
            No search result found
          </h6>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default CardSections;

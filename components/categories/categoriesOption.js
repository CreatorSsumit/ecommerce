import React from "react";

function CategoriesOption({ name, index }) {
  let side = index === 0 ? "rounded-l-full" : index ? "rounded-r-full" : "";
  return (
    <button
      className={`w-2/12 h-10 border-2 border-[#76344C] ${side} font-semibold hover:bg-[#76344C] hover:text-white`}
    >
      Kurtis Kurtas/Tunics
    </button>
  );
}

export default CategoriesOption;

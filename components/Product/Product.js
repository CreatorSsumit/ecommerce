import React from "react";
import Layout from "../Layout";
import Image from "next/image";

function Product() {
  return (
    <Layout>
      <div className="w-full h-screen">
        <nav className="w-full h-16 bg-[#76344C]/25 flex items-center px-4 justify-around">
          <div>
            <Image
              src={require("../../public/images/logopink.png")}
              width={100}
              height={1000}
            />
          </div>
          <button className="w-2/12 h-10  rounded-full font-semibold hover:text-[#76344C]">
            Kurtis Kurtas/Tunics
          </button>

          <button className="w-2/12 h-10  rounded-full font-semibold hover:text-[#76344C]">
            Lehengas
          </button>

          <button className="w-2/12 h-10  rounded-full font-semibold hover:text-[#76344C]">
            Salwar Suits And Sets
          </button>
          <button className="w-2/12 h-10  rounded-full font-semibold hover:text-[#76344C]">
            Ethnic Dresses
          </button>
          <div>
            <form>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                placeholder="Search More .."
                class="w-full  bg-opacity-50 rounded py-1 px-2  "
              />
            </form>
          </div>
        </nav>
      </div>
    </Layout>
  );
}

export default Product;

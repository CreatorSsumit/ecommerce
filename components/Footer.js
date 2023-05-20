import React from "react";
import { baseColors } from "@/pages";
import { playfairDisplay } from "./Landing";

function Footer() {
  return (
    <div className={`text-white ${playfairDisplay.className} bg-[#1f2d2c]`}>
      <footer class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
                PRODUCTS
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Saree</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Jewellery</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Lingerie</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Indianwear</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">More ...</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Women</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Men</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Kids</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-gray-800">More ... </a>
                </li>
              </nav>
            </div>

            <div class="md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
                SUBSCRIBE FOR EVERY UPDATES
              </h2>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-full sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    class="leading-7 text-sm text-gray-200"
                  >
                    Enter Email
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    class="w-full  bg-opacity-50 rounded border bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                  Susbcribe
                </button>
              </div>
              <p class="text-gray-400 text-xs mt-7 md:text-left text-center">
                NyMaa Fashion also uses a special 'responsible' tag for products
                that engage in sustainable practices. We also deliver 90% of our
                orders in eco friendly packaging made from recyclable paper
                flyers.
                <br class="lg:block hidden" />
                waistcoat green juice
              </p>
            </div>
          </div>
          <h6
            className={`${playfairDisplay.className} text-3xl font-semibold text-center  px-4 absolute `}
          >
            <span className=" text-sm border-[#1f2d2c]/25 text-gray-300">
              ---- NayMaa Will Welcome You Again ----
            </span>
          </h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

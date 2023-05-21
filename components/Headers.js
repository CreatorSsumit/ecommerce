import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { playfairDisplay } from "./Homepage/Landing";
import Image from "next/image";

function Headers() {
  const { pathname } = useRouter();

  return (
    <div
      className={`w-full bg-slate-50 h-16 flex justify-between px-10 items-center font-semibold text-sm ${playfairDisplay.className}`}
    >
      <div className="">
        <Link href={"/"}>
          <Image
            src={require("../public/images/mainlogo.png")}
            width={70}
            height={100}
          />
        </Link>
      </div>
      <div className="w-80 flex justify-between">
        <Link
          className={`hover:font-normal ${
            pathname === "/" ? "border-b-2 border-cyan-700 font-extrabold" : ""
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`hover:font-normal ${
            pathname.includes("/products")
              ? "border-b-2 border-cyan-700 font-extrabold"
              : ""
          }`}
          href={"/products"}
        >
          Products
        </Link>
        <Link
          className={`hover:font-normal ${
            pathname.includes("/categories")
              ? "border-b-2 border-cyan-700 font-extrabold"
              : ""
          }`}
          href={"/categories"}
        >
          Categories
        </Link>
        <Link className="hover:font-normal" href={"/cart"}>
          Cart (0)
        </Link>
      </div>
      <div className="flex gap-3">
        <Link className="hover:font-normal" href={"/account"}>
          Account
        </Link>
      </div>
    </div>
  );
}

export default Headers;

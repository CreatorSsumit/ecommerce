import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { playfairDisplay } from "./Landing";

function Headers() {
  const { pathname } = useRouter();

  return (
    <div
      className={`w-full bg-slate-50 h-16 flex justify-between px-10 items-center font-semibold text-sm ${playfairDisplay.className}`}
    >
      <div className="">
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="w-80 flex justify-between">
        <Link
          className={`hover:font-normal ${
            pathname.includes("/")
              ? "border-b-2 border-cyan-700 font-extrabold"
              : ""
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link className="hover:font-normal" href={"/products"}>
          Products
        </Link>
        <Link className="hover:font-normal" href={"/categories"}>
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

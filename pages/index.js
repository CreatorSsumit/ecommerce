import HomePage from "@/components/Homepage/HomePage";
import Layout from "@/components/Layout";
import React from "react";

export const IMAGE_LINK_BASE =
  "http://res.cloudinary.com/creatorssumit/image/upload/v1684488094/nextJS";

export const baseColors = {
  dark_green: "#1f2d2c",
  dark_pink: "#76344C",
};

function index() {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default index;

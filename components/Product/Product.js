import React from "react";
import Layout from "../Layout";
import Navigation from "./Navigation";
import CardSections from "./CardSections";

function Product() {
  return (
    <Layout>
      <div className="w-full h-full">
        <Navigation />
        <CardSections />
      </div>
    </Layout>
  );
}

export default Product;

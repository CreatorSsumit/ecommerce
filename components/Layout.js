import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full h-full">
      <Headers />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
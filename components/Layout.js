import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";
import { playfairDisplay } from "./Homepage/Landing";

function Layout({ children }) {
  return (
    <div className={playfairDisplay.className}>
      <Headers />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

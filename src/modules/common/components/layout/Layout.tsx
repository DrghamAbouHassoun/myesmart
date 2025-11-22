import React from "react";
import Navbar from "./Navbar";
import MenuProvider from "../../context/MenuProvider";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MenuProvider>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </MenuProvider>
  );
};

export default Layout;

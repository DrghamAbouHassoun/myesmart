import React from "react";
import Navbar from "./Navbar";
import MenuProvider from "../../context/MenuProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MenuProvider>
      <div>
        <Navbar />
        {children}
      </div>
    </MenuProvider>
  );
};

export default Layout;

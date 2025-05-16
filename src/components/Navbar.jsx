import React from "react";
import logo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <nav
    className="flex justify-center items-center gap-6 bg-center py-3"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8DScp3yg/15.jpg)",
      }}
    >
      <img 
      className="w-[55px] h-[70px] object-cover"
      src={logo} alt="navbar logo" />
      <h3 className="xt-center text-5xl text-white specific-font">Espresso Emporium</h3>
    </nav>
  );
};

export default Navbar;

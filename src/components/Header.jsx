import React from "react";
import Navbar from "./Navbar";
import CoffeeLineIcon from "./CoffeeLineIcon";

const Header = () => {
  return (
    <div>

      {/* Banner section */}
      <div
      className="h-[860px] w-full object-center grid grid-cols-9 justify-center items-center px-24"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/rLSNBsy/3.png)",
      }}
      >
        <div className="left-container col-span-4">

        </div>
        <div className="right-container col-span-5">
            <h1 className="text-7xl text-white specific-font">Would you like a Cup of Delicious Coffee?</h1>
            <p className="text-[16px] my-5 text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="px-6 py-2 rounded bg-[#E3B577] text-[#242222] specific-font text-lg">Learn More</button>
        </div>
      </div>

      {/* Coffee Line Icon */}
      <div>
        <CoffeeLineIcon></CoffeeLineIcon>
      </div>
    </div>
  );
};

export default Header;

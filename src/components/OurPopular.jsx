import React from "react";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { RiCupFill } from "react-icons/ri";

const OurPopular = ({ coffees,setCoffees }) => {
  return (
    <div
      className="mt-[120px] mb-[67px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/xSzzSBTK/1.png)",
      }}
    >
      <div className='w-8/12 mx-auto'>
        <div>
          <p className="text-xl text-[#1B1A1A] text-center">
            --- Sip & Savor ---
          </p>
          <h3 className="text-[#331A15] text-[55px] specific-font text-center">
            Our Popular Products
          </h3> 
              <Link to="/addCoffee" className="text-2xl w-fit mx-auto mt-2 cursor-pointer text-white specific-font py-2 px-5 rounded bg-[#E3B577] border-2 border-[#331A15] flex items-center gap-4">
                <span>Add Coffee</span>
                <RiCupFill className="text-[#331A15]"/>
              </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} 
            coffee={coffee} 
            coffees={coffees} 
            setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPopular;

import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetail = () => {
  const coffeeDetail = useLoaderData();
  const { name, quantity, supplier, taste, price, details, photo } =
    coffeeDetail;
  return (
    <div
      className="w-full h-full object-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/YFzj9sSs/11.png)",
      }}
    >
      <div className="w-8/12 mx-auto py-16">
        <Link
          to="/"
          className="text-[#374151] specific-font text-3xl font-bold flex items-center gap-6 mb-10"
        >
          <FaArrowLeftLong /> <span>Back to home</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-44  items-center bg-[#F4F3F0] rounded">
            <div>
                <img 
                className="w-[351px] h-[455px] object-cover"
                src={photo} alt="coffee image" />
            </div>
            <div>
                <h3 className="text-4xl specific-font text-[#331A15] mb-8">Niceties</h3>
                <p className="text-xl mb-3"><span className="font-semibold">Name : </span>{name}</p>
                <p className="text-xl mb-3"><span className="font-semibold">Quantity : </span>{quantity}</p>
                <p className="text-xl mb-3"><span className="font-semibold">Supplier : </span>{supplier}</p>
                <p className="text-xl mb-3"><span className="font-semibold">Taste : </span>{taste}</p>
                <p className="text-xl mb-3"><span className="font-semibold">Price : </span>{price}</p>
                <p className="text-xl"><span className="font-semibold">Details : </span>{details}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetail;

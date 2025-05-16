import React from "react";
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, quantity, price, photo, _id } = coffee;

  const removeCoffeeFromDB = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#F5F4F1] rounded-[10px] flex gap-8 lg:gap-12 items-center p-5 lg:p-10">
      <div>
        <img className="w-[192px] h-[240px] object-cover" src={photo} alt="" />
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="text-black">
          <p className="text-lg">
            <span className="font-medium">Name : </span>
            {name}
          </p>
          <p className="text-lg">
            <span className="font-medium">Quantity :</span> {quantity}
          </p>
          <p className="text-lg">
            <span className="font-medium">Price :</span> {price}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link to={`/coffeeDetail/${_id}`}>
            <button className="cursor-pointer bg-[#D2B48C] text-white p-[10px] rounded">
              <IoMdEye size={20} />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="cursor-pointer bg-black text-white p-[10px] rounded">
              <FaPen size={20} />
            </button>
          </Link>
          <button
            onClick={() => removeCoffeeFromDB(_id)}
            className="cursor-pointer bg-red-500 text-white p-[10px] rounded"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

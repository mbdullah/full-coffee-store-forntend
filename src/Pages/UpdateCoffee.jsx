import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const navigate = useNavigate();
    const {name, photo, price, supplier, quantity, taste, details, _id} = useLoaderData();

    const AddUpdateCoffee = e => {
        e.preventDefault();
        const coffee = e.target;
        const formData = new FormData(coffee);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // Send data to db
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            }, 
            body: JSON.stringify(formDataObj)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                            title: "Coffee Update Successfully!",
                            icon: "success",
                            draggable: true,
                          });
                          navigate("/");
            }
        })

    }
  return (
    <div
      className="w-full h-full object-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/YFzj9sSs/11.png)",
      }}
    >
      <div className="pt-20 w-8/12 mx-auto">
        <Link
          to="/"
          className="text-[#374151] specific-font text-3xl font-bold flex items-center gap-6"
        >
          <FaArrowLeftLong /> <span>Back to home</span>
        </Link>
        <div className="bg-[#F4F3F0] my-10 px-24 py-16 rounded">
          <div className="text-center mb-8 space-y-4">
            <h2 className="text-5xl  specific-font font-semibold text-[#374151]">
              Update Existing Coffee Details
            </h2>
            <p className="text-lg text-[#1B1A1A] opacity-70">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form onSubmit={AddUpdateCoffee} className="text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="rounded-box">
                <label className="label mb-2 font-semibold">Name</label>
                <input
                  defaultValue={name}
                  name="name"
                  type="text"
                  className="input w-full bg-white h-12"
                  placeholder="Enter Coffee Name"
                />
              </fieldset>
              <fieldset className="rounded-box">
                <label className="label mb-2 font-semibold">Quantity</label>
                <input
                defaultValue={quantity}
                  name="quantity"
                  type="text"
                  className="input w-full bg-white h-12"
                  placeholder="Enter Coffee Quantity"
                />
              </fieldset>
              <fieldset className="rounded-box">
                <label className="label mb-2 font-semibold">Supplier</label>
                <input
                  defaultValue={supplier}
                  name="supplier"
                  type="text"
                  className="input w-full bg-white h-12"
                  placeholder="Enter Coffee Supplier"
                />
              </fieldset>
              <fieldset className="rounded-box">
                <label className="label mb-2 font-semibold">Taste</label>
                <input
                defaultValue={taste}
                  name="taste"
                  type="text"
                  className="input w-full bg-white h-12"
                  placeholder="Enter Coffee Taste"
                />
              </fieldset>
              <fieldset className="rounded-box">
                <label className="label mb-2 font-semibold">Price</label>
                <input
                defaultValue={price}
                  name="price"
                  type="text"
                  className="input w-full bg-white h-12"
                  placeholder="Enter Coffee Price"
                />
              </fieldset>
              <fieldset className="rounded-box">
                <label className="label mb-2 font-semibold">Details</label>
                <input
                  defaultValue={details}
                  name="details"
                  type="text"
                  className="input w-full bg-white h-12"
                  placeholder="Enter Coffee Details"
                />
              </fieldset>
            </div>
            <fieldset className="rounded-box mt-6">
              <label className="label mb-2 font-semibold">Photo</label>
              <input
                defaultValue={photo}
                name="photo"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Photo URL"
              />
            </fieldset>
            <input
              className="bg-[#D2B48C] border border-[#331A15] btn text-[#331A15] text-2xl specific-font h-12 w-full mt-6"
              type="submit"
              value="Update Coffee Details"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;

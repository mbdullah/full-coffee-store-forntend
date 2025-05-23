import React, { useContext } from "react";
import logo from "../assets/images/more/logo1.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        alert("Logout Fail");
      });
  };
  return (
    <nav
      className="flex justify-between items-center px-10 py-3"
      style={{
        backgroundImage: "url(https://i.ibb.co/8DScp3yg/15.jpg)",
      }}
    >
      <div className="flex items-center gap-6 bg-center">
        <img
          className="w-[55px] h-[70px] object-cover"
          src={logo}
          alt="navbar logo"
        />
        <h3 className="xt-center text-5xl text-white specific-font">
          Espresso Emporium
        </h3>
      </div>
      <div className="flex gap-10 text-white items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/usersInfo">All Users</NavLink>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#D2B48C] px-8 py-2 rounded text-[#331A15] specific-font text-xl cursor-pointer"
          >
            LogOut
          </button>
        ) : (
          <Link
            className="bg-[#D2B48C] px-8 py-2 rounded text-[#331A15] specific-font text-xl"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

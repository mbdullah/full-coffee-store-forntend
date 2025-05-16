import React from "react";
import errorImage from "../assets/images/404/404.gif";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <>
      <div className="w-8/12 mx-auto">
        <Link
          to="/"
          className="text-[#374151] specific-font text-3xl font-bold flex items-center gap-6 mb-10 mt-10"
        >
          <FaArrowLeftLong /> <span>Back to home</span>
        </Link>

        <img
          className="w-6xl h-fit object-cover mx-auto"
          src={errorImage}
          alt="error image"
        />
      </div>
    </>
  );
};

export default ErrorPage;

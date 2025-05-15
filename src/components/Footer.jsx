import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <div
      className="mt-28"
      style={{
        backgroundImage: "url(https://i.ibb.co/wFR7gM7z/13.jpg)",
      }}
    >
      <div className="w-8/12 mx-auto pt-20 pb-10 grid grid-cols-8">
        <div className="col-span-5">
          <img className="w-[75px] h-[90px]" src={logo} alt="" />
          <h4 className="text-[45px] specific-font text-[#331A15] mt-4">
            Espresso Emporium
          </h4>
          <p className="text-xl text-[#1B1A1A] mt-4 mb-6">
            Always ready to be your friend. Come & Contact with us to share your
            <br />
            memorable moments, to share with your best companion.
          </p>
          {/* Social Link */}
          <div className="flex items-center gap-4 text-xl text-blue-600">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-white bg-[#331A15] rounded-full p-2 hover:text-blue-800 transition"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-[#331A15] hover:text-blue-500 transition"
            >
              <FaTwitter size={35} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-[#331A15] hover:text-pink-500 transition"
            >
              <FaInstagram size={35} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="text-white bg-[#331A15] p-1 rounded hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>

          <h3 className="text-[45px] specific-font text-[#331A15] my-4">
            Get in Touch
          </h3>

          {/* Contact */}
          <div className="flex flex-col gap-4 text-base text-gray-700">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <MdPhone className="text-2xl text-[#331A15]" />
              <span>+880 1234-567890</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <MdEmail className="text-2xl text-[#331A15]" />
              <span>example@gmail.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MdLocationOn className="text-2xl text-[#331A15]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-[45px] specific-font text-[#331A15]">
            Connect with Us
          </h3>
          <div className="flex flex-col space-y-6 mt-6">
            <input className="bg-white h-12 outline-0 p-2" type="text" placeholder="Name" />
            <input className="bg-white h-12 outline-0 p-2" type="email" placeholder="Email"/>
            <textarea
              rows="6"
              className="w-full p-2  rounded outline-0 bg-white"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button className="text-[#331A15] text-2xl specific-font px-6 py-2 rounded-full border-2 border-[#331A15] mt-8 cursor-pointer">Send Message</button>
        </div>
      </div>
      <div
      className="w-full h-fit object-contain"
      style={{
        backgroundImage: "url(https://i.ibb.co/twvX3YJF/24.jpg)"
      }}>
        <h5 className="text-xl text-white specific-font text-center py-5">Copyright Espresso Emporium ! All Rights Reserved</h5>
      </div>
    </div>
  );
};

export default Footer;

import { useContext } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext);

  const handleAddRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...other } = Object.fromEntries(
      formData.entries()
    );

    // Send Data firebase Auth
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const register = {
          email,
          ...other,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        };

        // save data to DB
        fetch("https://pet-store-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(register),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Your Account Create Successfully!",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center mt-20">
      <form
        onSubmit={handleAddRegister}
        className="space-y-2 w-full max-w-md mx-auto bg-[#331A15] p-6 my-10 rounded-2xl"
      >
        <h3
          data-aos="zoom-in"
          className="text-white font-bold text-2xl text-center mb-5 specific-font"
        >
          Register Now!
        </h3>

        {/* Name */}
        <label className="label text-white  text-lg ">Full Name</label>
        <input
          required
          name="name"
          type="text"
          className="input w-full rounded-xl h-12"
          placeholder="Enter Your Full Name"
        />
        {/* Address */}
        <label className="label text-white  text-lg ">Address</label>
        <input
          required
          name="address"
          type="text"
          className="input w-full rounded-xl h-12"
          placeholder="Enter Your Address"
        />
        {/* Phone */}
        <label className="label text-white  text-lg ">Phone</label>
        <input
          required
          name="phone"
          type="text"
          className="input w-full rounded-xl h-12"
          placeholder="Enter Your Phone"
        />

        {/* Photo URL */}
        <label className="label text-white text-lg mt-2">Photo URL</label>
        <input
          required
          name="photo"
          type="text"
          className="input w-full rounded-xl h-12"
          placeholder="Enter Your PhotoURL"
        />

        {/* Email */}
        <label className="label text-white text-lg mt-2">Email</label>
        <input
          required
          name="email"
          type="email"
          className="input w-full  rounded-xl h-12"
          placeholder="Enter Your Email"
        />

        {/* Password */}
        <label className="label text-white text-lg mt-2">Password</label>
        <div className="relative">
          <input
            required
            name="password"
            type="password"
            className="input w-full  rounded-xl h-12"
            placeholder="Enter Your Password"
          />
        </div>

        <button
          type="submit"
          className="bg-[#D2B48C] text-[#331A15] cursor-pointer text-lg font-semibold rounded-xl h-12 w-full mt-4 border border-[#331A15] specific-font"
        >
          Register
        </button>

        <p className="text-lg text-white mt-4 text-center">
          Already Have An Account ?
          <Link className="text-secondary underline font-semibold" to="/login">
            {" "}
            Login
          </Link>
        </p>
        <div className="divider divider-accent text-[#D2B48C]">OR</div>

        {/* Google */}
        <button className="btn rounded-xl bg-white text-black border-[#e5e5e5]  h-12 w-full">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Register with Google
        </button>
      </form>
    </div>
  );
};

export default Register;

import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // send data to firebase Auth
    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          draggable: true,
        });
        const userInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // Update data from db
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after db", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center mt-20">
      <form
        onSubmit={handleLogin}
        className="space-y-2 w-full max-w-md mx-auto bg-[#331A15] p-6 my-10 rounded-2xl border border-gray-700"
      >
        <h3
          data-aos="zoom-in"
          className="text-white specific-font font-bold text-2xl text-center mb-5"
        >
          SignIn Now!
        </h3>
        {/* Email */}
        <label className="label text-white text-lg mt-2">Email</label>
        <input
          required
          name="email"
          type="email"
          className="input w-full rounded-xl h-12"
          placeholder="Enter Your Email"
        />

        {/* Password */}
        <label className="label text-white text-lg mt-2">Password</label>
        <div className="relative">
          <input
            required
            name="password"
            type="password"
            className="input w-full rounded-xl h-12"
            placeholder="Enter Your Password"
          />
        </div>

        <button
          type="submit"
          className="bg-[#D2B48C] cursor-pointer text-[#331A15] specific-font text-lg font-semibold rounded-xl h-12 w-full mt-4"
        >
          Sign In
        </button>

        <p className="text-lg text-white mt-4 text-center">
          Already Have An Account ?
          <Link
            className="text-secondary underline font-semibold"
            to="/register"
          >
            {" "}
            Register
          </Link>
        </p>
        <div className="divider divider-accent  text-[#D2B48C]">OR</div>

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
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;

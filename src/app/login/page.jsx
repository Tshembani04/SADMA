// Wrap only the useRef calls with "use client"
"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const lemailRef = useRef();
  const lpasswordRef = useRef();

  const backgroundStyle = {
    backgroundImage: `url('https://source.unsplash.com/1600x900/?natural-disasters')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const Login = async (e) => {
    e.preventDefault();

    const email = lemailRef.current.value;
    const password = lpasswordRef.current.value;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in user's data:", user);
        toast.success("Login successful!", user, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    router.push("/home");
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex items-center w-screen h-screen px-2 overflow-hidden">
        <div className="relative flex flex-col px-5 py-10 space-y-5 bg-white rounded-lg shadow-xl w-96 sm:mx-auto">
          <div className="absolute w-5/6 h-full -translate-x-1/2 rounded-lg bg-[#8E7FFE] -z-10 top-4 left-1/2 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-3xl font-bold text-center text-black">
              Already have an account
            </h1>
            {/* <p className="text-gray-500">Create an account to access your account</p> */}
          </div>
          <form onSubmit={Login}>
            <div>
              <div className="relative w-full mt-2">
                <input
                  type="email"
                  ref={lemailRef}
                  className="border-1 peer block w-full appearance-none rounded-lg border  bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-lightGreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">
                  Enter Your Email
                </label>
              </div>
            </div>

            <div>
              <div className="relative w-full mt-2">
                <input
                  type="password"
                  ref={lpasswordRef}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-lightGreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">
                  Enter Your Password
                </label>
              </div>
            </div>

            <div className="flex items-center w-full mt-4">
              <button
                type="submit"
                className="inline-block py-3 font-bold text-white transition-all duration-300 rounded-lg shrink-0 w-36 hover:bg-[#F2E7E7 ] bg-[#8E7FFE]"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-black">
            Don't have an account?
            <Link
              href="/signup"
              className="ml-2 font-semibold text-indigo-400 whitespace-nowrap hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;

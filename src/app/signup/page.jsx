"use client";
import React, { useEffect, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { collection } from "firebase/firestore"; // Import firestore functions
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const signUpUser = async () => {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const firestore = db();
        const usersCollection = collection(firestore, "users");

        console.log("Users collection:", usersCollection);

        if (!(await usersCollection.get()).exists()) {
          await usersCollection.doc();
          console.log("Users collection created");
        }

        await usersCollection.doc(user.uid).set({
          email: user.email,
        });

        console.log("This is the user's data", user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    };

    // Call the signUpUser function only on mount
    signUpUser();
  }, []);
  return (
    <div className="">
      <h1 className="flex justify-center pt-32 text-3xl font-black text-center text-[#8E7FFE] md:text-5xl">
        South African Disaster Management
      </h1>
      <div className="flex items-center w-screen h-screen px-2 overflow-hidden">
        <div className="relative flex flex-col px-5 py-10 space-y-5 bg-white rounded-lg shadow-xl w-96 sm:mx-auto">
          <div className="absolute w-5/6 h-full -translate-x-1/2 rounded-lg bg-[#8E7FFE] -z-10 top-4 left-1/2 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-3xl font-bold text-center text-black">
              Create an account
            </h1>
          </div>
          <form onSubmit={SignUp}>
            <div>
              <div className="relative w-full mt-2">
                <input
                  type="email"
                  ref={emailRef}
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
                  ref={passwordRef}
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
                className="inline-block py-3 font-bold text-white transition-all duration-300 rounded-lg shrink-0 w-36 hover:bg-[#F2E7E7] bg-[#8E7FFE]"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-black">
            Already have an account?
            <Link
              href="login"
              className="ml-2 font-semibold whitespace-nowrap text-[#8E7FFE] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SignUp;

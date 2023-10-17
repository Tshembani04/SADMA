"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosLogOut } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { BsCalendarEvent, BsPeople, BsMap } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePolicy } from "react-icons/md";

const SideBar = ({ children }) => {
  const logout = () => {
    auth.signOut();
    toast.success("You signed out successfully", {
      position: "top-right",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="flex">
        <div className="fixed flex flex-col justify-between w-20 h-screen p-4 bg-white ">
          <div className="flex flex-col items-center">
            <button onClick={logout}>
              <div className="inline-block p-3 text-white transition-all duration-300 bg-indigo-400 rounded-lg">
                <IoIosLogOut size={20} />
              </div>
            </button>
            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
            <Link href="/home">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <LuLayoutDashboard size={20} />
              </div>
            </Link>
            <Link href="/disaster-report">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <GoReport size={20} />
              </div>
            </Link>

            <Link href="/disaster-alerts">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-red-300 hover:text-white">
                <BsCalendarEvent size={20} />
              </div>
            </Link>
            <Link href="/location">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-red-300 hover:text-white">
                <AiOutlineBell size={20} />
              </div>
            </Link>
            <Link href="/users">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-red-300]  hover:text-white">
                <BsPeople size={20} />
              </div>
            </Link>
            <Link href="/assets">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <MdOutlinePolicy size={20} />
              </div>
            </Link>

            <Link href="/vendors">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-red-300 hover:text-white">
                <BsMap size={20} />
              </div>
            </Link>
            <Link href="/vendors">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-red-300 hover:text-white">
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>
        <main className="w-full ml-20 ">{children}</main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SideBar;

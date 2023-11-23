"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { auth } from "@/app/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosLogOut } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { BsCalendarEvent, BsPeople, BsMap, BsPhone } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePolicy } from "react-icons/md";
import { useRouter } from "next/navigation";

const SideBar = ({ children }) => {
  const route = useRouter();
  const [reportCount, setReportCount] = useState(0);

  useEffect(() => {
    const fetchReportCount = async () => {
      const db = getFirestore();
      const reportsCollection = collection(db, "disasterReports");
      const reportsSnapshots = await getDocs(reportsCollection);
      const numberOfreports = reportsSnapshots.size;
      setReportCount(numberOfreports);
      console.log("profiles", numberOfreports);
    };
    fetchReportCount();
  }, []);

  const logout = () => {
    auth.signOut();
    route.push("/login");
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
              <div className="inline-block p-3 text-white transition-all duration-300 bg-red-600 rounded-lg">
                <IoIosLogOut size={20} />
              </div>
            </button>
            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
            <Link href="/home">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <LuLayoutDashboard size={13} />
              </div>
            </Link>
            <Link href="/disaster-report">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <GoReport size={13} />
              </div>
            </Link>

            <Link href="/disaster-alerts">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-red-300 hover:text-white">
                <BsCalendarEvent size={13} />
              </div>
            </Link>
            <div className="flex items-center p-3 mx-2 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg hover:bg-red-300 hover:text-white">
              <AiOutlineBell size={13} />
              {reportCount > 0 && (
                <span className="px-1 py-0.5 ml-2 text-xs text-black bg-red-500 rounded-full">
                  {reportCount}
                </span>
              )}
            </div>
            <Link href="/users">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <BsPeople size={13} />
              </div>
            </Link>
            <Link href="/contact-us">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer hover:text-white hover:bg-red-300 ">
                <BsPhone size={13} />
              </div>
            </Link>

            <Link href="/privacy-policy">
              <div className="inline-block p-3 my-4 text-black transition-all duration-300 text-sm rounded-lg cursor-pointer bg-red-300 hover:text-white">
                privacy policy              </div>
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

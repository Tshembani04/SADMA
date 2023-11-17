"use client";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/Firebase";
import SideBar from "./sidebar";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Create an observer to listen for authentication state changes when user is logged in
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Clean up or clear memory of the observer when the component unmounts
    return () => unsubcribe();
  }, []); // Empty dependency array to run this effect once on component mount remember this Tshembani or other devs LOL

  const email = user?.email;

  return (
    <SideBar>
      <div className="flex justify-between w-full px-4 pt-4 bg-black">
        <h2 className="text-3xl font-bold text-white ">
          South African Disaster Management
        </h2>
        {email ? (
          <h2 className="text-white ml-2 md:ml-0 text-[12px] md:text-xl">
            Welcome back {email}
          </h2>
        ) : (
          <div>
            <h1 className="text-white">You are not welcome</h1>
          </div>
        )}
      </div>
    </SideBar>
  );
};

export default Header;

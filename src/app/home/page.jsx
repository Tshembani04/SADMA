"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("../signup/page"), { ssr: false });
import HomeComponent from "../../components/home";

const Home = () => {
  return (
    <>
      <div className="text-xl">
        <HomeComponent />
        <SignUp />
      </div>
    </>
  );
};

export default Home;

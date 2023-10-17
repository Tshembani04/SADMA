"use client";
import React from "react";
import dynamic from "next/dynamic";

const HomeComponentHolder = dynamic(() => import("../components/HomeHolder"), {
  ssr: false,
});

const HomeComponent = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 ">
        <HomeComponentHolder />
      </div>
    </>
  );
};

export default HomeComponent;

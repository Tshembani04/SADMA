"use client";
import React from "react";
import Header from "./header";
import TopCards from "./topcards";
import BarChat from "./barchart";
import RecentOrders from "./recentorders";

const HomeComponent = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 ">
        <Header />
        <TopCards />
        {/*  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <BarChat />
          <RecentOrders />
        </div> */}
      </div>
    </>
  );
};

export default HomeComponent;

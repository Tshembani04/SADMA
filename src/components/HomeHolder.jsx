"use client";

import React from "react";
import Header from "./header";
import TopCards from "./topcards";
import BarChat from "./barchart";

function HomeHolder() {
  return (
    <div className="bg-blck">
      <Header />
      <TopCards />
      <BarChat />
    </div>
  );
}

export default HomeHolder;

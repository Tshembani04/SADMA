"use client";

import React from "react";
import Header from "./header";
import TopCards from "./topcards";
import BarChat from "./barchart";

function HomeHolder() {
  return (
    <>
      <Header />
      <TopCards />
      <BarChat />
    </>
  );
}

export default HomeHolder;

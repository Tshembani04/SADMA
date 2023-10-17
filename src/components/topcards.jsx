"use client";
import { db } from "@/app/Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const TopCards = () => {
  //Variables for all the totals
  const [totaldisasterReports, setTotalDisasterReports] = useState(0);
  const [totalVendors, setTotalVendors] = useState(0);
  const [totalCompanyGroups, setTotalCompanyGroups] = useState(0);

  //Variables for all the Percentages
  const [percentageDisasterReports, setPercentageDisasterReports] = useState(0);
  const [percentageVendors, setPercentageVendors] = useState(0);
  const [percentageCompanyGroups, setPercentageCompanyGroups] = useState(0);

  //Collect data in our db
  useEffect(() => {
    const fetchData = async () => {
      const disasterReportsQuery = collection(db, "disasterReports");
      const vendorsQuery = collection(db, "Vendors");
      const companyGroupsQuery = collection(db, "Company_Groups");

      // Listen for real-time changes in the collections
      const unsubscribeDisasterReports = onSnapshot(
        disasterReportsQuery,
        (snapshot) => {
          const totalDisasterReportsDocuments = snapshot.size;
          setTotalDisasterReports(totalDisasterReportsDocuments);
          updatePercentage("disasterReports", totalDisasterReportsDocuments);
        }
      );

      // const unsubscribeVendors = onSnapshot(vendorsQuery, (snapshot) => {
      //   const totalVendorsDocuments = snapshot.size;
      //   setTotalVendors(totalVendorsDocuments);
      //   updatePercentage("Vendors", totalVendorsDocuments);
      // });

      // const unsubscribeCompanyGroups = onSnapshot(
      //   companyGroupsQuery,
      //   (snapshot) => {
      //     const totalCompanyGroupsDocuments = snapshot.size;
      //     setTotalCompanyGroups(totalCompanyGroupsDocuments);
      //     updatePercentage("CompanyGroups", totalCompanyGroupsDocuments);
      //   }
      // );

      // Clean up listeners when the component unmounts
      return () => {
        unsubscribeDisasterReports();
        unsubscribeVendors();
        unsubscribeCompanyGroups();
      };
    };

    fetchData();
  }, []);

  const updatePercentage = (category, total) => {
    // Calculate the percentage based on the current total
    const calculatedPercentage = (total / 100) * 100;

    // Update the respective percentage state
    switch (category) {
      case "disasterReports":
        setPercentageDisasterReports(calculatedPercentage);
        break;
      case "Vendors":
        setPercentageVendors(calculatedPercentage);
        break;
      case "CompanyGroups":
        setPercentageCompanyGroups(calculatedPercentage);
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid gap-4 p-4 ml-20 lg:grid-cols-5 ">
      <div className="flex justify-between w-full col-span-1 p-4 bg-white rounded-lg lg:col-span-2">
        <div className="flex flex-col w-0 pb-4 ">
          <p className="text-2xl font-bold">{totaldisasterReports}</p>
          <p className="text-gray-600">Disasters Reported</p>
        </div>
        <p className="flex items-center justify-center p-2 rounded-lg bg-lightGreen">
          <span className="text-lg text-black">
            {percentageDisasterReports.toFixed(2)}%
          </span>
        </p>
      </div>
      {/* <div className="flex justify-between w-full col-span-1 p-4 bg-white rounded-lg lg:col-span-2">
        <div className="flex flex-col w-0 pb-4 ">
          <p className="text-2xl font-bold">{totalVendors}</p>
          <p className="text-gray-600">Vendos</p>
        </div>
        <p className="flex items-center justify-center p-2 rounded-lg bg-lightGreen">
          <span className="text-lg text-black">
            {percentageVendors.toFixed(2)}%
          </span>
        </p>
      </div>
      <div className="flex justify-between w-full p-4 bg-white rounded-lg">
        <div className="flex flex-col w-0 pb-4 ">
          <p className="text-2xl font-bold"> {totalCompanyGroups}</p>
          <p className="text-gray-600">Company Groups</p>
        </div>
        <p className="flex items-center justify-center p-2 rounded-lg bg-lightGreen">
          <span className="text-lg text-black">
            {percentageCompanyGroups.toFixed(2)}%
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default TopCards;

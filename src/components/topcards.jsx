"use client";
import { db } from "@/app/Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const TopCards = () => {
  //Variables for all the totals
  const [totaldisasterReports, setTotalDisasterReports] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCompanyGroups, setTotalCompanyGroups] = useState(0);

  //Variables for all the Percentages
  const [percentageDisasterReports, setPercentageDisasterReports] = useState(0);
  const [percentageUsers, setPercentageUsers] = useState(0);
  const [percentageCompanyGroups, setPercentageCompanyGroups] = useState(0);

  // Set to track unique user IDs associated with reports
  const uniqueUserIds = new Set();

  // Collect data in our db
  useEffect(() => {
    const fetchData = async () => {
      const disasterReportsQuery = collection(db, "disasterReports");

      // Listen for real-time changes in the collections
      const unsubscribeDisasterReports = onSnapshot(
        disasterReportsQuery,
        (snapshot) => {
          const totalDisasterReportsDocuments = snapshot.size;
          setTotalDisasterReports(totalDisasterReportsDocuments);

          // Track unique user IDs associated with reports
          snapshot.forEach((doc) => {
            const userId = doc.data().userId; // Replace 'userId' with the actual field name in your document
            uniqueUserIds.add(userId);
          });

          // Update the user count based on unique user IDs
          setTotalUsers(uniqueUserIds.size);

          // Update the percentages
          updatePercentage("disasterReports", totalDisasterReportsDocuments);
          updatePercentage("users", uniqueUserIds.size);
        }
      );

      // Clean up listeners when the component unmounts
      return () => {
        unsubscribeDisasterReports();
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
      case "users":
        setPercentageUsers(calculatedPercentage);
        break;
      case "CompanyGroups":
        setPercentageCompanyGroups(calculatedPercentage);
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid gap-4 p-4 ml-20 bg-black lg:grid-cols-5 ">
      <div className="flex justify-between w-full col-span-1 p-4 bg-white rounded-lg lg:col-span-2">
        <div className="flex flex-col w-0 pb-4 ">
          <p className="text-2xl font-bold">{totaldisasterReports}</p>
          <p className="text-black">Disasters Reported</p>
        </div>
        <p className="flex items-center justify-center p-2 rounded-lg bg-lightGreen">
          <span className="text-lg text-white">
            {percentageDisasterReports.toFixed(2)}%
          </span>
        </p>
      </div>
      <div className="flex justify-between w-full col-span-1 p-4 bg-white rounded-lg lg:col-span-2">
        <div className="flex flex-col w-0 pb-4 ">
          <p className="text-2xl font-bold">{totalUsers}</p>
          <h1 className="w-2 text-black ">Report(s) you created</h1>
        </div>
        <p className="flex items-center justify-center p-2 rounded-lg bg-lightGreen">
          <span className="text-lg text-white">
            {percentageUsers.toFixed(2)}%
          </span>
        </p>
      </div>
      <div className="flex justify-between w-full p-4 bg-white rounded-lg">
        <div className="flex flex-col w-0 pb-4 ">
          <p className="text-2xl font-bold"> {totalUsers}</p>
          <p className="text-black">Locations</p>
        </div>
        <p className="flex items-center justify-center p-2 rounded-lg bg-lightGreen">
          <span className="text-lg text-white">
            {percentageUsers.toFixed(2)}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;

"use client";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const page = () => {
  const [disasterReports, setDisasterReports] = useState([]);

  useEffect(() => {
    const fetchDisasterReports = async () => {
      try {
        const firestore = getFirestore();
        const querySnapshot = await getDocs(
          collection(firestore, "disasterReports")
        );

        const reports = [];
        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          reports.push({ id: doc.id, ...data });
        }

        setDisasterReports(reports);
      } catch (error) {
        console.error("Error fetching disaster reports:", error);
      }
    };

    fetchDisasterReports();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url('https://source.unsplash.com/1600x900/?face')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <div style={backgroundStyle} className="p-8">
      <h1 className="mb-6 text-2xl font-bold text-white">Reporters </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {disasterReports.map((report) => (
          <div key={report.id} className="p-4 bg-white rounded-md shadow-md">
            <h2 className="mb-2 text-lg font-semibold">{report.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

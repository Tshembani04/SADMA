"use client";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);

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

        setLocations(reports);
      } catch (error) {
        console.error("Error fetching disaster reports:", error);
      }
    };

    fetchDisasterReports();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <div
        className="bg-cover bg-center h-60 md:h-80"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?places,south-africa')`,
        }}
      >
        <div className="flex items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Explore Disasterous Locations
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Locations</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((report) => (
            <div key={report.id} className="p-4 bg-white rounded-md shadow-md">
              <h2 className="mb-2 text-lg font-semibold">{report.location}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;

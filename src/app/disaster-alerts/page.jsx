"use client";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
          const imageUrl = await getImageUrl(doc.id); // Fetch image URL from storage
          reports.push({ id: doc.id, ...data, imageUrl });
        }

        setDisasterReports(reports);
      } catch (error) {
        console.error("Error fetching disaster reports:", error);
      }
    };

    const getImageUrl = async (reportId) => {
      try {
        const storage = getStorage();
        const imageUrl = await getDownloadURL(
          ref(storage, `images/${reportId}`)
        );
        return imageUrl;
      } catch (error) {
        console.error("Error fetching image URL:", error);
        return null;
      }
    };

    fetchDisasterReports();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Disaster Reports</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {disasterReports.map((report) => (
          <div key={report.id} className="p-4 bg-white rounded-md shadow-md">
            <h2 className="mb-2 text-lg font-semibold">{report.title}</h2>
            <p className="mb-4 text-gray-600">{report.description}</p>
            {report.imageUrl && (
              <img
                src={report.imageUrl}
                alt="Disaster"
                className="object-cover w-full h-32 mb-4"
              />
            )}
            <p className="text-sm text-gray-500">Location: {report.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;

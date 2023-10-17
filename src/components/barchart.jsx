"use client";
import { db } from "@/app/Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip
);

const BarChat = () => {
  //Variables down here
  const [totalWorkOrders, setTotalWorkOrders] = useState(0);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const workOrdersQuery = query(
        collection(db, "Work_Orders"),
        orderBy("createdAt") // This is the date the order(s) was created on
      );

      // Listen for real-time changes in the collections
      const unsubscribeWorkOrders = onSnapshot(workOrdersQuery, (snapshot) => {
        const workOrdersData = [];
        const dates = [];

        snapshot.forEach((doc) => {
          // Replace "dateField" with the actual field name representing the date
          const date = doc.data().createdAt.toDate();
          const day = date.toLocaleDateString("en-US", { weekday: "short" });

          if (!dates.includes(day)) {
            dates.push(day);
            workOrdersData.push(1);
          } else {
            const index = dates.indexOf(day);
            workOrdersData[index]++;
          }
        });

        setTotalWorkOrders(workOrdersData.reduce((a, b) => a + b, 0));

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Work Orders",
              data: workOrdersData,
              borderColor: "#008000",
              backgroundColor: "#008000",
            },
          ],
        });
        setChartOptions({
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Weekly Work Order Insights",
            },
          },
          maintainAspectRatio: false,
          responsive: true,
        });
      });

      // Clean up listeners when the component unmounts
      return () => {
        unsubscribeWorkOrders();
      };
    };

    fetchData();
  }, []); //We just run once with this dependancy array on mount

  return (
    <>
      <div className="lg:w-full w-[370px] sm:w-full md:w-full mx-20 md:col-span-2 relative lg:h-[70vh] h-[40vh] md:pt-0 pt-3 m-auto p-4 gap-4 rounded-lg bg-white">
        {/* <p className="-mt-3 font-bold text-center text-black text-2xl0">
          Weekly Work Order Insights
        </p> */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChat;

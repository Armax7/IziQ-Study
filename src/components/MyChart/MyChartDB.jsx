import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function MyChartStripe({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    // if (window.myChart !== undefined) {
    //   window.myChart.destroy();
    // }
    const chartId = "myChartDB";
    if (chartId in window) {
      window[chartId].destroy();
    }

    window[chartId] = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.datasetLabel,
            data: data.datasetData,
            backgroundColor: [
              "#e7bd35",
              "#847770",
              "#1c9edf",
              "#d9c37c",
              "#903593",
              "#0a2d65",
              "#4ec977",
              "#6a0e28",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Uso de BD en Supabase (kB)",
            position: "top",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: "easeInExpo",
            from: 1,
            to: 0,
            loop: true,
          },
        },
      },
    });
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
}

export default MyChartStripe;

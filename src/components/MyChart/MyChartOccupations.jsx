import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function MyChartOccupations({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    // if (window.myChart !== undefined) {
    //     window.myChart.destroy();
    //   }
    const chartId = "myChartOccupations";
    if (chartId in window) {
      window[chartId].destroy();
    }

    window[chartId] = new Chart(myChartRef, {
      type: "radar",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.datasetLabel,
            data: data.datasetData,
            backgroundColor: [
              "#372585bb",
              "#d03f5c",
              "#d03f5c",
              "#d03f5c",
              "#d03f5c",
            ],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Ocupaciones de usuarios",
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

export default MyChartOccupations;

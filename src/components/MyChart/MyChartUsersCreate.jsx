import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function MyChartUsersCreate({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    // if (window.myChart !== undefined) {
    //     window.myChart.destroy();
    //   }

    const chartId = "myChartCreateUsers";
    if (chartId in window) {
      window[chartId].destroy();
    }

    window[chartId] = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.datasetLabel,
            data: data.datasetData,
            backgroundColor: [
              "#e44c19",
              "#e44c19",
              "#e04a17",
              "#e44c19",
              "#e44c19",
              "#e44c19",
            ],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Nuevos usuarios",
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

export default MyChartUsersCreate;

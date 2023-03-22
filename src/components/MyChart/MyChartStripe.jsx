import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function MyChartStripe({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    // if (window.myChart !== undefined) {
    //     window.myChart.destroy();
    //   }
    const chartId = "myChartStripe";
    if (chartId in window) {
      window[chartId].destroy();
    }

    window[chartId] = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.datasetLabel,
            data: data.datasetData,
            backgroundColor: data.datasetBackgroundColor,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Donaciones en Stripe",
            position: "top",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
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


export default MyChartStripe
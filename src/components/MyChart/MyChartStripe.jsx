import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function MyChartStripe({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    if (window.myChart !== undefined) {
        window.myChart.destroy();
      }

    window.myChart = new Chart(myChartRef, {
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
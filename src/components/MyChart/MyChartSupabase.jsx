import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const MyChartSupabase = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    // if (window.myChart !== undefined) {
    //     window.myChart.destroy();
    //   }
    const chartId = "myChartSupabase";
    if (chartId in window) {
      window[chartId].destroy();
    }

    window[chartId] = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: [
              '#2f7db1',
              '#3CB371',
              '#DC143C',
            ],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Providers de los usuarios",
            position: "top",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        animations:{
            tension: {
                duration: 1000,
                easing:"easeInExpo",
                from: 1,
                to: 0,
                loop: true
              }
        }
      },
    });
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default MyChartSupabase;

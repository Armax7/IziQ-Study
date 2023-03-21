import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const MyChartSupabase = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    if (window.myChart !== undefined) {
        window.myChart.destroy();
      }

      window.myChart = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: [
              '#36A2EB',
              '#3CB371',
              '#DC143C',
            ],
          },
        ],
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

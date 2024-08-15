// src/components/LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2'; // Import the Line component
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function LineChart({ data }) {
  if (!data || !data.labels || !data.datasets) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Temperature Data',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: ${context.raw}°C`;
                }
              }
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;

// src/components/Forecast.js
import React from 'react';
// import { Line } from 'react-chartjs-2';

function Forecast({ data }) {
  if (!data) return null;

  // const chartData = {
  //   labels: data.list.map(item => item.dt_txt),
  //   datasets: [{
  //     label: 'Temperature',
  //     data: data.list.map(item => item.main.temp),
  //     borderColor: 'rgba(75,192,192,1)',
  //     backgroundColor: 'rgba(75,192,192,0.2)',
  //     fill: false,
  //   }]
  // };

  return (
    <div className="forecast">
      {/* <h2>5-Day Forecast</h2> */}
      {/* <Line data={chartData} /> */}
    </div>
  );
}

export default Forecast;

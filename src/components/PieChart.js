import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar los componentes
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;

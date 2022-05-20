import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Graph() {
    const data = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: [
            {
            label: "Automation",
                data: [20, 25, 30, 45, 50, 60, 63, 65],
                borderColor: ['rgba(243,130,68,255)'],
                backgroundColor: ['rgba(249,211,140,255)'],
                pointerBackgroundColor: ['rgba(243,130,68,255)'],
                    pointerBorderColor: ['rgba(243,130,68,255)'],
            },
            {
                label: "Traditional",
                data: [15, 15, 20, 25, 27, 25, 23, 25],
                borderColor: ['rgba(32,133,175,255)'],
                pointBorderColor: ['rgba(32,133,175,255)'],
                pointerBackgroundColor: ['rgba(32,133,175,255)'],
                backgroundColor: ['rgba(136,214,226,255)']
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 10,
                        max: 70,
                        stepSize: 5
                    }
                }
            ]
        }
    }
  return (
          <Line
              data={data}
              options={options}
          />

  )
}

export default Graph
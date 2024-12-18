import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "../../../components/ui/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BalanceHistory: React.FC = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#EAEEF4",
          drawBorder: false,
        },
        ticks: {
          color: "#718EBF",
          font: {
            size: 12,
            family: "Inter",
          },
          padding: 10,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 800,
        ticks: {
          stepSize: 200,
          callback: (value: number) => value + " —",
          color: "#718EBF",
          font: {
            size: 12,
            family: "Inter",
          },
          padding: 10,
        },
        grid: {
          color: "#EAEEF4",
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Makes the line more curved
        borderWidth: 2,
      },
      point: {
        radius: 4,
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: "#1814F3",
        hitRadius: 6,
        hoverRadius: 6,
      },
    },
  };

  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        fill: {
          target: "origin",
          above: "rgba(69, 52, 184, 0.1)", // Lighter blue with opacity
        },
        data: [200, 300, 400, 750, 400, 300, 500],
        borderColor: "#1814F3", // Solid blue line
        backgroundColor: "rgba(69, 52, 184, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "white",
        pointBorderColor: "#1814F3",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <Card title="Balance History">
      <div className="h-[280px] w-full p-4">
        <Line options={options} data={data} />
      </div>
    </Card>
  );
};

export default BalanceHistory;

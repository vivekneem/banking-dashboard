import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "../../../components/ui/Card/";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivity: React.FC = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#718EBF", // Light blue color for x-axis labels
          font: {
            size: 12,
            family: "Inter",
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
          color: "#718EBF", // Light blue color for y-axis labels
          font: {
            size: 12,
            family: "Inter",
          },
          padding: 10,
        },
        grid: {
          color: "#EAEEF4", // Light gray for grid lines
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          padding: 20,
          font: {
            size: 13,
            family: "Inter",
          },
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
        },
      },
    },
    barPercentage: 0.5, // Make bars thinner
    categoryPercentage: 0.8, // Space between bar groups
  };

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [450, 350, 300, 450, 150, 380, 380],
        backgroundColor: "#232323",
        borderRadius: 50, // Rounded corners for bars
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: [220, 120, 250, 350, 230, 230, 320],
        backgroundColor: "#396AFF", // Updated to match Figma blue
        borderRadius: 50, // Rounded corners for bars
        borderSkipped: false,
      },
    ],
  };

  return (
    <Card title="Weekly Activity">
      <div className="h-[280px] w-full p-4">
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};

export default WeeklyActivity;

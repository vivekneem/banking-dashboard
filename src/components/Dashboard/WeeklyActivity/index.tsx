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

const WeeklyActivity: React.FC = ({ weeklyActivity }: any) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#718EBF",
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
    barPercentage: 0.5,
    categoryPercentage: 0.8,
  };

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: weeklyActivity?.withdraw,
        backgroundColor: "#232323",
        borderRadius: 50,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: weeklyActivity?.deposit,
        backgroundColor: "#396AFF",
        borderRadius: 50,
        borderSkipped: false,
      },
    ],
  };

  return (
    <Card title="Weekly Activity">
      <div className="h-[280px] bg-white rounded-lg w-full p-4">
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};

export default WeeklyActivity;

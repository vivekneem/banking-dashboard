import React, { useMemo } from "react";
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
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "../../../components/ui/Card";
import { BalanceHistoryProps } from "./types";

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

const BalanceHistory: React.FC<BalanceHistoryProps> = ({
  balanceHistory,
}) => {
  const options: ChartOptions<'line'> = useMemo(() => ({
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
          color: "#EAEEF4",
          lineWidth: 0.5,
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
          callback: (tickValue: string | number) => `${tickValue} —`,
          color: "#718EBF",
          font: {
            size: 12,
            family: "Inter",
          },
          padding: 10,
        },
        grid: {
          color: "#EAEEF4",
          lineWidth: 0.5,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 3,
        borderColor: "#1814F3",
      },
      point: {
        radius: 0,
      },
    },
  }), []);

  const data: ChartData<'line'> = useMemo(() => ({
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        fill: true,
        data: balanceHistory,
        borderColor: "#1814F3",
        backgroundColor: (context: {
          chart: {
            ctx: CanvasRenderingContext2D;
          };
        }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
          gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
          return gradient;
        },
        tension: 0.4,
        borderJoinStyle: "round",
      },
    ],
  }), [balanceHistory]);

  return (
    <Card title="Balance History" className="w-full lg:w-[635px] h-[323px]">
      <div 
        className="h-[276px] mt-[47px] rounded-tl-[25px] bg-white rounded-lg"
        role="region"
        aria-label="Balance history chart"
      >
        <Line options={options} data={data} />
      </div>
    </Card>
  );
};

export default React.memo(BalanceHistory);

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Point, BubbleDataPoint } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "../../../components/ui/Card/";

ChartJS.register(ArcElement, Tooltip);

interface ExpenseStats {
  labels: string[];
  data: number[];
}

const ExpenseStatistics: React.FC<{ expenseStats: ExpenseStats }> = ({ expenseStats }) => {
  const data = {
    labels: expenseStats.labels,
    datasets: [
      {
        data: expenseStats?.data,
        backgroundColor: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
        borderWidth: 10,
        borderColor: "white",
        spacing: 3,
      },
    ],
  };

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
    rotation: 270, // Start from top (Entertainment)
  };

  const plugins = [
    {
      id: "pieLabels",
      afterDraw(chart: ChartJS) {
        const { ctx, width, height, data } = chart;
        ctx.save();
        const centerX = width / 2;
        const centerY = height / 2;

        const labelPositions = [
          { angle: 240, offset: 0.6 },
          { angle: 315, offset: 0.7 },
          { angle: 45, offset: 0.6 },
          { angle: 150, offset: 0.6 },
        ];

        data.datasets[0].data.forEach((value: number | null | [number, number] | Point | BubbleDataPoint, i: number) => {
          if (typeof value !== 'number') return;
          if (!data.labels) return;
          const pos = labelPositions[i];
          const angle = (Math.PI / 180) * pos.angle;
          const radius = (Math.min(width, height) / 2) * pos.offset;

          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          // Draw percentage
          ctx.font = "bold 16px Inter";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`${value}%`, x, y - 12);

          // Draw label
          ctx.font = "16px Inter";
          ctx.fillStyle = "white";
          ctx.textBaseline = "middle";
          ctx.fillText(String(data.labels[i]), x, y + 12);
        });

        ctx.restore();
      },
    },
  ];

  return (
    <Card title="Expense Statistics" className="h-full">
      <div 
        className="h-[280px] flex bg-white rounded-lg items-center justify-center"
        role="region"
        aria-label="Expense statistics chart"
      >
        <div className="w-[240px] h-[240px]">
          <Pie data={data} options={options} plugins={plugins} />
        </div>
      </div>
    </Card>
  );
};

export default ExpenseStatistics;

// src/components/Dashboard/ExpenseStatistics/ExpenseStatistics.tsx
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "../../../components/ui/Card/";

ChartJS.register(ArcElement, Tooltip);

const ExpenseStatistics: React.FC = () => {
  const data = {
    // Order matters! This determines the position of segments
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
    datasets: [
      {
        data: [30, 15, 35, 20],
        backgroundColor: [
          "#343C6A", // Entertainment (top)
          "#FC7900", // Bill Expense (top-right)
          "#232323", // Others (bottom-right)
          "#396AFF", // Investment (left)
        ],
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
      afterDraw(chart: any) {
        const { ctx, width, height, data } = chart;
        ctx.save();
        const centerX = width / 2;
        const centerY = height / 2;

        // Positions adjusted to match Figma layout
        const labelPositions = [
          { angle: 240, offset: 0.6 }, // Entertainment (top)
          { angle: 315, offset: 0.7 }, // Bill Expense (top-right)
          { angle: 45, offset: 0.6 }, // Others (bottom-right)
          { angle: 150, offset: 0.6 }, // Investment (left)
        ];

        data.datasets[0].data.forEach((value: number, i: number) => {
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
          ctx.fillText(data.labels[i], x, y + 12);
        });

        ctx.restore();
      },
    },
  ];

  return (
    <Card title="Expense Statistics" className="h-full">
      <div className="h-[280px] flex items-center justify-center">
        <div className="w-[240px] h-[240px]">
          <Pie data={data} options={options} plugins={plugins} />
        </div>
      </div>
    </Card>
  );
};

export default ExpenseStatistics;

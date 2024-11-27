import { useEffect } from "react";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController, 
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const chartsData = [
  { percentage: 85, label: "Стратегик фикрлаш", color: "#28A264" },
  { percentage: 75, label: "Натижага йўналганлик", color: "#28A264" },
  { percentage: 33, label: "Ўзгаришларни бошқариш", color: "#EF233C" },
  { percentage: 100, label: "Лидерлик", color: "#0956AF" },
  { percentage: 98, label: "Ўз-ўзини ривожлантириш", color: "#28A264" },
  { percentage: 45, label: "Коммуника-тивлик", color: "#F8B324" },
];

const CircularCharts = () => {
  useEffect(() => {
    chartsData.forEach((chart, index) => {
      const ctx = document.getElementById(`chart-${index}`) as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut", 
          data: {
            labels: [`${chart.percentage}%`],
            datasets: [
              {
                data: [chart.percentage, 100 - chart.percentage],
                backgroundColor: [chart.color, "#E5E5E5"],
                borderWidth: 0,
              },
            ],
          },
          options: {
            cutout: "70%",
            plugins: {
              tooltip: { enabled: false },
              legend: { display: false },
            },
          },
        });
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {chartsData.map((chart, index) => (
        <div key={index} className="flex items-center gap-4 w-[200px]">
          <div className="relative">
            <canvas id={`chart-${index}`} width="100" height="100"></canvas>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
              {chart.percentage}%
            </div>
          </div>
          <p className="text-center text-xl mt-2 font-bold">{chart.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CircularCharts;

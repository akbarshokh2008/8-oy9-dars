import React, { useEffect, useRef } from 'react';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const RadarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Photoshop', 'Illustrator', 'XD', 'Indesign', 'Premiere'],
            datasets: [
              
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                  stepSize: 20,
                  callback: (value) => `${value}%`,
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div>
      <div className="flex h-[400px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default RadarChart;

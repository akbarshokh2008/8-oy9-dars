
import { useEffect, useState } from "react";
import { AgGauge } from "ag-charts-react";
import { AgRadialGaugeOptions } from "ag-charts-enterprise";
import "ag-charts-enterprise";

const Chart = () => {
  const [charts, setCharts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/knowlodge")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setCharts(data.semicharts); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCharts = () => {
    if (!charts || charts.length === 0) {
      return <p>Chart ma'lumotlari mavjud emas.</p>;
    }

    return charts.map((chart, index) => {
      const options: AgRadialGaugeOptions = {
        type: "radial-gauge",
        value: chart.percentage, 
        scale: {
          min: 0,
          max: 100,
          label: {
            enabled: false,
          },
        },
        bar: {
          fill: chart.color,
        },
        label: {
          formatter({ value }) {
            return `${value.toFixed(0)}%`;
          },
          fontSize: 60
        },
        secondaryLabel: {
          text: chart.label,
        fontSize: 10
        },
        
      };

      return (
        <div key={index} className="chart-container">
          <AgGauge options={options as any} className="w-[400px]"/>
        </div>
      );
    });
  };

  return <div className="flex flex-wrap gap-10 justify-center">{renderCharts()}</div>;
};

export default Chart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const apiData = {
  semicharts: [
    { percentage: 33, label: "Конституциявий-ҳуқуқий саводхонлик", color: "#EF233C" },
    { percentage: 79, label: "Ахборот-коммуникация технологиялари", color: "#28A264" },
    { percentage: 78, label: "Турли сохадаги ислохотлардан хабардорлик", color: "#28A264" },
    { percentage: 48, label: "Узбек тили ва адабиёти", color: "#F8B324" },
    { percentage: 100, label: "Узбекистон тарихи ва маданияти", color: "#0956AF" },
    { percentage: 66, label: "Аклий салохияти ва мантикий фикрлаш", color: "#F8B324" },
  ],
  lineChart: {
    labels: ["12.06", "18.06", "13.07", "14.07", "20.07", "24.07"],
    data: [10, 30, 50, 20, 40, 60],
  },
};

const Recharts: React.FC = () => {
  const lineChartData = apiData.lineChart.labels.map((label, index) => ({
    label,
    value: apiData.lineChart.data[index],
  }));


  return (
    <div style={{ padding: "20px" }} className="w-[600px]">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="value" stroke="#8884d8" name="Индекс" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;

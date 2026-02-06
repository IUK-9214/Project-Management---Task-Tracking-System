import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

function ProgressChart() {
  const [chartData, setChartData] = useState([0, 0, 0]);

  const fetchTaskProgress = async () => {
    try {
      const res = await api.get("/task");
      const tasks = res.data.task || res.data;

      const todo = tasks.filter(
        (task) => task.taskStatus === "To Do"
      ).length;

      const inProgress = tasks.filter(
        (task) => task.taskStatus === "In Progress"
      ).length;

      const completed = tasks.filter(
        (task) => task.taskStatus === "Completed"
      ).length;

      setChartData([todo, inProgress, completed]);
    } catch (error) {
      console.error("Chart data error:", error.message);
    }
  };

  useEffect(() => {
    fetchTaskProgress();
  }, [chartData]); // keep as per instruction

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
      <LineChart
        xAxis={[
          {
            data: ["To Do", "In Progress", "Completed"],
            scaleType: "point",
            style: {
              tick: { fill: "#A5F3FC", fontSize: 14 }, // cyan labels
              grid: { stroke: "rgba(255,255,255,0.1)" },
            },
          },
        ]}
        series={[
          {
            data: chartData,
            area: true,
            label: "Tasks Status",
            color: "#06B6D4", // cyan gradient accent
            lineStyle: { strokeWidth: 3 },
          },
        ]}
        height={300}
        sx={{
          ".MuiAreaElement-root": {
            opacity: 0.2,
            fill: "rgba(6,182,212,0.2)", // cyan translucent
          },
          ".MuiLineElement-root": {
            stroke: "#06B6D4",
            strokeWidth: 3,
          },
        }}
      />
    </div>
  );
}

export default ProgressChart;

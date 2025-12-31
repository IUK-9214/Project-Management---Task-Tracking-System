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
  }, [chartData]);

  return (
    <LineChart
      xAxis={[
        {
          data: ["To Do", "In Progress", "Completed"],
          scaleType: "point",
        },
      ]}
      series={[
        {
          data: chartData,
          area: true,
          label: "Tasks Status",
          color: "#4f46e5", // indigo
        },
      ]}
      height={300}
      sx={{
        ".MuiAreaElement-root": {
          opacity: 0.2,
        },
      }}
    />
  );
}

export default ProgressChart;

import { LineChart } from "@mui/x-charts/LineChart";

function ProgressChart() {
  return (
    <LineChart
      xAxis={[
        {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          scaleType: "point",
        },
      ]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          label: "Tasks Completed",
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

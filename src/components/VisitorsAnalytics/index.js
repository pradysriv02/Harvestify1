"use client";
import Chart from "react-apexcharts";
export default function VisitorsAnalytics() {
  const series = [
    {
      name: "Guests",
      data: [19, 22, 20, 26, 34, 20, 5, 19],
    },
  ];
  const options = {
    xaxis: {
      categories: [
        "2024-02-03",
        "2024-02-04",
        "2024-02-05",
        "2024-02-06",
        "2024-02-07",
        "2024-02-08",
        "2024-02-09",
        "2024-02-10",
      ],
    },
    yaxis: {
      title: {
        text: "Rainfall",
      },
    },
    colors: ["#15803d"],
    stroke: {
      curve: "smooth",
    },
  };
  return <Chart type="line" series={series} options={options} />;
}

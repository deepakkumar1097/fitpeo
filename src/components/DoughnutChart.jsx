import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
function DoughnutChart() {
  Chart.register(ArcElement);
  const data = {
    labels: ["pink", "purple", "grey"],
    datasets: [
      {
        label: "Rainfall",
        data: [300, 150, 100],
        backgroundColor: ["#ffaed7", "#e7dbff", "grey"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = "10px";
        ctx.font = `800 ${fontSize} Poppins`;
        ctx.textBaseline = "top";
        var text = "65% Total New Customer",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <Doughnut
      type="doughnut"
      data={data}
      options={options}
      plugins={plugins}
      width={"auto"}
      height={"auto"}
    />
  );
}

export default DoughnutChart;

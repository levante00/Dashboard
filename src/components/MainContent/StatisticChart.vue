<template>
  <div>
    <apexchart
      type="donut"
      width="114"
      height="114"
      :series="series"
      :options="options"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["series", "chartStartAngle", "chartEndAngle", "chartColors", "chartLabels"],
  data() {
    return {
      options: {
        chart: {
          type: "donut",
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            startAngle: this.chartStartAngle,
            endAngle: this.chartEndAngle,
            customScale: 1,
            expandOnClick: false,
            donut: {
              size: "90%",
              labels: {
                show: true,
                name: {
                  show: false,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  fontWeight: "700",
                  offsetY: 8,
                  offsetX: 8,
                },
                total: {
                  showAlways: true,
                  show: true,
                  color: "#000000",
                  formatter: function (w) {
                    return w.globals.seriesTotals[0] + "%";
                  },
                },
              },
            },
          },
        },

        labels: this.chartLabels,
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: this.chartColors,
        },
        states: {
          hover: {
            filter: "none",
          },
        },
        legend: {
          show: false,
        },
      },
    };
  },
};
</script>

<style></style>

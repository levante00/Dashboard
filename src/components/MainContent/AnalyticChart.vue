<template>
  <div>
    <apexchart
      type="area"
      width="488"
      height="156"
      :series="series"
      :options="options"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["series"],
  data() {
    return {
      options: {
        chart: {
          height: 156,
          type: "area",
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: [
                {
                  icon: '<img src="./src/assets/svg/main_content/choose_year.svg">',
                  index: 1,
                  class: "customSvgIcon",
                  click: function (chart, options, e) {},
                },
                {
                  icon: "2022",
                  index: 0,
                  class: "customYearIcon",
                  click: function (chart, options, e) {},
                },
              ],
            },
          },
        },
        colors: ["#9444fb"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: 2,
        },
        title: {
          text: "Daily Views",
          align: "left",
          margin: 0,
          offsetX: -10,
          style: {
            fontSize: "12px",
            fontWeight: "bold",
          },
        },
        grid: {
          borderColor: "#000000",
          strokeDashArray: 2,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          type: "datetime",
          // min: new Date("01/01/2022").getTime(),
          // max: new Date("12/31/2022").getTime(),
          labels: {
            style: {
              cssClass: "chartXaxisLabel",
            },
            offsetX: 6,
            format: "MMM",
          },
        },
        yaxis: {
          type: "numeric",
          tickAmount: 3,
          min: 100,
          max: 400,
          labels: {
            align: "left",
            style: {
              cssClass: "chartYaxisLabel",
            },
            offsetX: -6,
            offsetY: 6,
            formatter: function (value) {
              return value + "k";
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 1,
            inverseColors: true,
            type: "horizontal",
            colorStops: [
              {
                offset: 0,
                color: "#73ece4",
                opacity: 0.25,
              },
              {
                offset: 100,
                color: "#fabeb1",
                opacity: 0.48,
              },
            ],
          },
        },
      },
    };
  },
};
</script>

<style></style>

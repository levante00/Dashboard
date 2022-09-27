<template>
  <footer class="pt-22px max-h-168px h-full">
    <h2 class="text-18px font-semibold">Statistics</h2>
    <div class="flex flex-row justify-between mt-4 max-h-104px h-full">
      <div
        class="max-w-374px w-full flex flex-row items-center gap-74px bg-white rounded-4px"
        v-for="statisticsCard in statisticsCards"
      >
        <div class="pl-30px">
          <h3 class="text-20px font-medium">
            {{ statisticsCard.headerContent }}
          </h3>
          <p class="text-16px">
            {{
              " " +
              statisticsCard.chartSeries[0] +
              "% " +
              statisticsCard.paragraphContent
            }}
          </p>
        </div>
        <div>
          <static-chart
            :series="statisticsCard.chartSeries"
            :chartStartAngle="statisticsCard.startAngle"
            :chartEndAngle="statisticsCard.endAngle"
            :chartColors="statisticsCard.colors"
            :chartLabels="statisticsCard.labels"
          ></static-chart>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import StaticChart from "../StatisticChart.vue";
export default {
  components: {
    StaticChart,
  },
  data() {
    return {
      statisticsCards: [
        {
          headerContent: "Weekly Target",
          paragraphContent: "achived",
          chartSeries: [25, 75],
          startAngle: 0,
          endAngle: 360,
          colors: ["#FF6941", "#CED3DB"],
          labels: ["complited", "left"],
        },
        {
          headerContent: "Monthly Target",
          paragraphContent: "achived",
          chartSeries: [50, 50],
          startAngle: 90,
          endAngle: -270,
          colors: ["#CED3DB", "#FF6941"],
          labels: ["left", "complited"],
        },
      ],
    };
  },
};
</script>

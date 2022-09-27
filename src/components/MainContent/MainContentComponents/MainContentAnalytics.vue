<template>
  <div class="flex flex-col max-w-536px w-full gap-4">
    <div class="max-h-254px h-full">
      <h2 class="ContentHeader">Analytics</h2>
      <base-card
        class="max-w-536px w-full max-h-200px h-full mt-18px pl-7 pr-5 pt-5 pb-4"
      >
        <analytic-chart :series="mySeries"></analytic-chart>
      </base-card>
    </div>
    <div class="max-h-168px flex flex-row justify-between">
      <div
        class="max-w-216px max-h-168px w-full h-full pl-2 pr-5 pb-14px pt-3 bg-purple-500 rounded-10px"
      >
        <div class="flex flex-row justify-between">
          <div>
            <img :src="weatherLink" />
          </div>
          <div class="max-w-30px max-h-30px w-full h-full">
            <img :src="pauseButtonLink" class="cursor-pointer" />
          </div>
        </div>
        <div class="pt-14px">
          <h3 class="text-14px font-medium">Strange clouds formation</h3>
          <p class="text-14px">By Advik Taylor</p>
        </div>
      </div>

      <div
        v-for="button in postButtons"
        class="max-w-124px max-h-168px w-full h-full bg-white rounded-5px pt-7 pb-2 flex flex-col items-center gap-46px"
      >
        <img :src="button.link" class="cursor-pointer" />
        <div class="max-w-74px w-full">
          <h3 class="text-14px font-medium text-center">
            {{ button.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticChart from "../AnalyticChart.vue";
export default {
  components: {
    AnalyticChart,
  },
  props: ["mySeries"],
  data() {
    return {
      postButtons: [
        {
          name: "Sheduled posts",
          link: "./src/assets/svg/main_content/open_schedule.svg",
        },
        {
          name: "Add New Posts",
          link: "./src/assets/svg/main_content/add_post.svg",
        },
      ],
      pauseButtonLink: "./src/assets/svg/main_content/pause_buttion.svg",
      weatherLink: "./src/assets/img/weather_info.png",
    };
  },
};
</script>

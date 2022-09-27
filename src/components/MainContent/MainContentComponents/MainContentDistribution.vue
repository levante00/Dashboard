<template>
  <div class="max-h-446px h-full max-w-252px w-full">
    <h2 class="ContentHeader ">Event Distribution</h2>
    <div
      class="max-w-252px w-full max-h-392px h-full pt-6 pb-3 mt-18px  bg-cyan-500 rounded-10px flex flex-col items-center justify-between"
    >
      <h3 class="text-12px font-medium">Last 30 days of performance</h3>
      <div class="relative text-center">
        <img :src="totalEventsLink" />
        <div class="absolute top-52px left-11">
          <h3 class="text-18px font-medium">{{ eventsNumber }}</h3>
          <p class="text-9px">Total Events</p>
        </div>
      </div>
      <h3 class="text-13px font-medium">Events Distribution</h3>
      <div class="grid grid-cols-2 grid-rows-2 gap-5">
        <div
          v-for="distribution in distributions"
          class="flex flex-row items-center gap-14px"
        >
          <img :src="distribution.link" />
          <p class="text-13px  font-medium">{{ distribution.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distributions: [
        { name: "Likes", link: "./src/assets/svg/main_content/likes.svg" },
        { name: "Follows", link: "./src/assets/svg/main_content/follows.svg" },
        { name: "Views", link: "./src/assets/svg/main_content/views.svg" },
        { name: "Share", link: "./src/assets/svg/main_content/share.svg" },
      ],
      totalEventsLink: "../src/assets/svg/main_content/total_events.svg",
      totalEventsNumber: 300000,
    };
  },
  computed: {
    eventsNumber() {
      return Math.round(this.totalEventsNumber / 1000) + "K";
    },
  },
};
</script>

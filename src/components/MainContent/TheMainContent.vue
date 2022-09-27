<template>
  <div
    class="bg-grey-150 w-full 2xl:max-w-872px  h-full pl-18px pr-18px pt-14 pb-4 relative "
  >
    <main-content-header
      :usersInfo="users"
      @provideToMain="provideProfile"
    ></main-content-header>
    <section class="pt-6">
      <h2 class="ContentHeader">30 Days Performance</h2>
      <div class="flex flex-row pt-8 gap-60px">
        <performance-budge
          v-for="budge in budges"
          :contentName="budge.name"
          :contentNumber="budge.number"
          :contentLink="budge.link"
        ></performance-budge>
      </div>
    </section>
      <section
        class="pt-30px max-h-470px h-full flex flex-row gap-11"
      >
        <main-content-analytics
          :mySeries="chartSeries"
        ></main-content-analytics>
        <main-content-distributions></main-content-distributions>
      </section>
      <main-content-footer></main-content-footer>
  </div>
</template>

<script>
import MainContentAnalytics from "./MainContentComponents/MainContentAnalytics.vue";
import MainContentHeader from "./MainContentComponents/MainContentHeader.vue";
import MainContentDistributions from "./MainContentComponents/MainContentDistribution.vue";
import MainContentFooter from "./MainContentComponents/MainContentFooter.vue";
import PerformanceBudge from "./PerformanceBudge.vue";
import UsersAndProfiles from "./UserInformation.js";

export default {
  components: {
    PerformanceBudge,
    MainContentHeader,
    MainContentAnalytics,
    MainContentDistributions,
    MainContentFooter,
  },
  emits: ["returnProfile"],
  data() {
    return {
      users: UsersAndProfiles.users,
      profileList: UsersAndProfiles.profiles,
      budges: [
        {
          name: "VIEWS",
          number: "7,482,120",
          link: "./src/assets/svg/main_content/budge_yellow.svg",
        },
        {
          name: "FOLLOWS",
          number: "54,364",
          link: "./src/assets/svg/main_content/budge_red.svg",
        },
        {
          name: "LIKES",
          number: "125,685",
          link: "./src/assets/svg/main_content/budge_cyan.svg",
        },
      ],
      chartSeries: [
        {
          name: "Series 1",
          data: [
            { x: "01-02-2022 GMT", y: 120 },
            { x: "01-15-2022 GMT", y: 160 },
            { x: "01-30-2022 GMT", y: 270 },
            { x: "02-05-2022 GMT", y: 270 },
            { x: "02-10-2022 GMT", y: 190 },
            { x: "03-01-2022 GMT", y: 210 },
            { x: "03-15-2022 GMT", y: 210 },
            { x: "03-20-2022 GMT", y: 220 },
            { x: "04-01-2022 GMT", y: 100 },
            { x: "04-25-2022 GMT", y: 190 },
            { x: "05-05-2022 GMT", y: 210 },
            { x: "05-25-2022 GMT", y: 180 },
            { x: "06-01-2022 GMT", y: 210 },
            { x: "06-10-2022 GMT", y: 200 },
            { x: "06-25-2022 GMT", y: 300 },
            { x: "07-05-2022 GMT", y: 280 },
            { x: "07-20-2022 GMT", y: 400 },
            { x: "08-01-2022 GMT", y: 230 },
            { x: "08-10-2022 GMT", y: 230 },
            { x: "09-01-2022 GMT", y: 290 },
            { x: "09-05-2022 GMT", y: 320 },
            { x: "10-01-2022 GMT", y: 400 },
            { x: "10-10-2022 GMT", y: 330 },
            { x: "11-30-2022 GMT", y: 300 },
            { x: "12-31-2022 GMT", y: 380 },
          ],
        },
      ],
    };
  },
  methods: {
    provideProfile(name, show) {
      const profile = this.profileList.find(
        (profile) => profile.profileName === name
      );
      console.log(show);
      return this.$emit("returnProfile", profile, show);
    },
  },
};
</script>

<style></style>

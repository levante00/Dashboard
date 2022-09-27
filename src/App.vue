<template>
  <div class="flex flex-col 2xl:flex-row 2xl:justify-center h-full overflow-hidden">
    <the-nav-bar class="2xl:h-full"></the-nav-bar>
    <the-main-content
      class="h-full overflow-scroll main-scroll"
      @returnProfile="sendProfile"
    ></the-main-content>
    <the-side-bar class="h-full" :profileInformation="profile" v-model:profileVisible="show"></the-side-bar>
  </div>
</template>

<script>
import TheNavBar from "./components/NavBar/TheNavBar.vue";
import TheMainContent from "./components/MainContent/TheMainContent.vue";
import TheSideBar from "./components/SideBar/TheSideBar.vue";

export default {
  components: {
    TheNavBar,
    TheMainContent,
    TheSideBar,
  },
  data() {
    return {
      profile: {},
      show: false,
    };
  },
  methods: {
    sendProfile(profile, show) {
     this.profile = profile;
     this.show = show;
    },
  },
  
};
</script>

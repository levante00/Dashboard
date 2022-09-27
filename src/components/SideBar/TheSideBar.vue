<template>
  <div
    class="navGlobalStyle pl-5 pr-5 overflow-hidden max-w-290px rounded-10px fixed top-16 h-93.5% 2xl:h-full bg-grey-150 2xl:bg-white 2xl:border-0 2xl:border-white border border-gray-700 z-40 2xl:relative 2xl:top-auto"
    v-if="showSideBar"
  >
    <side-bar-header
      :name="profileInformation.profileName"
      @toggleSideBar="changeVisibility"
    ></side-bar-header>
    <side-bar-profile :information="profileInformation"></side-bar-profile>
    <side-bar-buttons-section
      :mediaBlocks="mediaBlocks"
    ></side-bar-buttons-section>
    <side-bar-footer
      :images="profileInformation.profileAllImages"
    ></side-bar-footer>
  </div>
</template>

<script>
import SideBarHeader from "./SideBarComponents/SideBarHeader.vue";
import SideBarProfile from "./SideBarComponents/SideBarProfile.vue";
import SideBarButtonsSection from "./SideBarComponents/SideBarButtonsSection.vue";
import SideBarFooter from "./SideBarComponents/SideBarFooter.vue";

export default {
  components: {
    SideBarHeader,
    SideBarProfile,
    SideBarButtonsSection,
    SideBarFooter,
  },
  props: ["profileInformation", "profileVisible"],
  emits: ['update:profileVisible'],
  data() {
    return {
      mediaBlocks: [
        {
          header: "Videos",
          link: "./src/assets/svg/side_bar/video.svg",
          contentToAdd: "Video",
          color: "bg-purple-500",
          visible: true,
        },
        {
          header: "Photos",
          link: "./src/assets/svg/side_bar/camera.svg",
          contentToAdd: "Photo",
          color: "bg-red-500",
          visible: true,
        },
      ],
      showSideBar: false,
    };
  },
  methods: {
    changeVisibility() {
      this.showSideBar = !this.showSideBar;
      this.$emit('update:profileVisible', this.showSideBar);
    },
  },
  watch: {
    profileVisible() {
      this.showSideBar = this.profileVisible;
    },
    
  },
  beforeMount() {
    if(window.innerWidth > 1512) {
      this.showSideBar = true;
    }
  }
};
</script>

<style></style>

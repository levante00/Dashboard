<template>
  <div class="navGlobalStyle 2xl:pl-44px 2xl:pr-9 pl-18px pr-1 2xl:relative ">
    <header class="flex flex-row justify-between items-center 2xl:relative">
      <div>
        <h1 class="font-black text-26px cursor-pointer">DASHBOARD</h1>
        <p class="text-grey-450">Growth & Marketing</p>
      </div>
      <div class="2xl:hidden">
        <img
          :src="menuBarLink"
          class="cursor-pointer"
          @click="toggleMenuBar"
          v-if="!showMenuBar"
        />
        <img
          :src="closeMenuLink"
          class="cursor-pointer"
          @click="toggleMenuBar"
          v-else
        />
      </div>
    </header>
    <section
      class="2xl:pt-52px 2xl:pr-0 2xl:pl-0 pr-5 pt-5 pl-5 fixed rounded-10px right-0 2xl:h-full top-16 max-w-290px h-93.5% w-full 2xl:max-w-auto 2xl-w-auto 2xl:relative 2xl:top-0 z-40 bg-grey-150 2xl:bg-white 2xl:border-0 2xl:border-white border border-gray-700"
      v-if="showMenuBar"
    >
      <nav-item :items="generalItems"></nav-item>
      <nav-component
        :items="postItems"
        name="Posts"
        :toggleElement="showPosts"
        @toggleFunction="togglePosts"
        class="pt-12"
      ></nav-component>
      <nav-component
        :items="favoriteItems"
        name="Favorite users"
        :toggleElement="showFavorits"
        @toggleFunction="toggleFavorits"
        class="pt-12"
      ></nav-component>
    </section>

    <footer
      class="flex flex-row gap-5 fixed bottom-5 pr-5 right-0 z-40 2xl:absolute 2xl:bottom-5 2xl:left-10 2xl:top-auto 2xl:right-auto"
      v-if="showMenuBar"
    >
      <img
        src="../../assets/svg/nav_bar/invite_member.svg"
        alter="invite_member_plus"
      />
      <p class="text-20px cursor-pointer">Invite new member</p>
    </footer>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
import NavComponent from "./NavComponent.vue";
export default {
  components: {
    NavItem,
    NavComponent,
  },
  data() {
    return {
      generalItems: [
        { text: "Dashboard", link: "./src/assets/svg/nav_bar/dashboard.svg" },
        { text: "Activity", link: "./src/assets/svg/nav_bar/activity.svg" },
        { text: "Settings", link: "./src/assets/svg/nav_bar/settings.svg" },
      ],
      postItems: [
        { text: "Published", link: "./src/assets/svg/nav_bar/published.svg" },
        {
          text: "Today's Sheduled",
          link: "./src/assets/svg/nav_bar/shedule.svg",
        },
        { text: "Bookmarks", link: "./src/assets/svg/nav_bar/bookmarks.svg" },
      ],
      favoriteItems: [],
      showPosts: false,
      showFavorits: false,
      showMenuBar: false,
      menuBarLink: "./src/assets/svg/nav_bar/icon_menu.svg",
      closeMenuLink: "./src/assets/svg/nav_bar/cross_menu.svg",
    };
  },
  methods: {
    toggleMenuBar() {
      this.showMenuBar = !this.showMenuBar;
    },
    togglePosts() {
      this.showPosts = !this.showPosts;
    },
    toggleFavorits() {
      this.showFavorits = !this.showFavorits;
    },
  },
  beforeMount() {
    if(window.innerWidth > 1512) {
      this.showMenuBar = true;
    }
  }
};
</script>

<style></style>

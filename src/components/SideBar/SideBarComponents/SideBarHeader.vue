<template>
  <header
    class="max-h-46px h-full flex flex-row justify-between pr-10 items-center relative"
  >
    <div>
      <h2 class="text-18px">Hi {{ name }}</h2>
      <p class="text-14px text-grey-200">Good Morning!</p>
    </div>
    <div class="flex flex-row gap-10px max-w-68px w-full max-h-35px h-full">
      <div
        class="max-w-30px max-h-30px w-full h-full rounded-5px shadow-side-bar-icons flex items-center justify-center"
      >
        <img :src="headerLinks.messages" class="cursor-pointer" />
      </div>
      <div
        class="max-w-30px max-h-30px w-full h-full rounded-5px shadow-side-bar-icons flex items-center justify-center"
      >
        <img :src="headerLinks.notifications" class="cursor-pointer" />
      </div>
      
    </div>
    <div
        class=" absolute right-0 max-w-30px max-h-30px w-full h-full rounded-5px shadow-side-bar-icons flex items-center justify-center 2xl:hidden"
      >
        <img :src="headerLinks.close" class="cursor-pointer" @click="hideSideBar" />
      </div>
    
  </header>
</template>

<script>
export default {
  props: ["name"],
  emits: ["toggleSideBar"],
  data() {
    return {
      headerLinks: {
        messages: "./src/assets/svg/side_bar/messages.svg",
        notifications: "./src/assets/svg/side_bar/notifications.svg",
        close: "./src/assets/svg/nav_bar/cross_menu.svg",
      },
    };
  },
  methods: {
    hideSideBar() {
      return this.$emit("toggleSideBar")
    },
  },
};
</script>

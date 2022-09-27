<template>
  <section class="pt-10 h-full" :class="dynamicClass">
    <div class="w-full max-h-30px h-full pr-26px flex flex-row justify-between">
      <button
        class="max-w-110px max-h-30px w-full h-full bg-blue-500 rounded-7px text-white text-14px"
      >
        View Profile
      </button>
      <button
        class="max-w-110px max-h-30px w-full h-full rounded-7px text-14px"
      >
        Edit Profile
      </button>
    </div>
    <div
      class="max-h-184px h-full w-full pt-44px flex flex-row justify-between"
    >
      <div
        v-for="mediaBlock in mediaBlocks"
        v-show="mediaBlock.visible"
        :class="mediaBlock.color"
        class="max-w-134px max-h-140px w-full h-full pl-3 pt-10px pr-10px pb-5 rounded-5px"
      >
        <div class="flex flex-row justify-between items-center">
          <img :src="mediaBlock.link" />
          <img
            :src="crossSvgLink"
            class="self-start cursor-pointer"
            @click="changeVisibility(mediaBlock)"
          />
        </div>
        <div class="mt-30px">
          <h2 class="text-18px">{{ mediaBlock.header }}</h2>
          <p class="text-12px pt-6px cursor-pointer">
            Click To Add {{ mediaBlock.contentToAdd }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:["mediaBlocks"],
  data() {
    return {
      crossSvgLink: "./src/assets/svg/side_bar/cross.svg",
      
    };
  },
  methods: {
    changeVisibility(mediaBlock) {
      mediaBlock.visible = !mediaBlock.visible;
      console.log(this.mediaBlocks[0].visible);
      console.log(this.mediaBlocks[1].visible);
    },
  },
  computed: {
    blockVisibility() {
      if (
        this.mediaBlocks[0].visible === false &&
        this.mediaBlocks[1].visible === false
      )
        return false;
      else {
        return true;
      }
    },
    dynamicClass() {
      return {
        [`max-h-254px `]: this.blockVisibility,
        [`max-h-70px`]: !this.blockVisibility,
      };
    },
  },
};
</script>

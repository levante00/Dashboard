<template>
  <div class="relative">
    <hr class="max-w-244px w-full border border-grey-500 2xl:relative absolute right-0" />
    <div class="flex 2xl:flex-row flex-row-reverse items-center mt-5 justify-between">
      <div class="flex 2xl:flex-row flex-row-reverse gap-5">
        <h2 class="text-20px font-medium">{{ name }}</h2>
        <img
          class="cursor-pointer"
          src="../../assets/svg/nav_bar/closed_list.svg"
          alt="closed_list_image"
          v-show="toggleElement"
          @click="toggleItem"
        />
        <img
          class="cursor-pointer"
          src="../../assets/svg/nav_bar/opened_list.svg"
          alt="opened_list_image"
          v-show="!toggleElement"
          @click="toggleItem"
        />
      </div>
      <div>
        <img
          src="../../assets/svg/nav_bar/add_item.svg"
          alt="add_item"
          class="w-full cursor-pointer"
        />
      </div>
    </div>
    <nav-item :items="items" v-show="toggleElement" class="pt-8"></nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  components: {
    NavItem,
  },
  props: ["items", "name", "toggleElement"],
  emits: ["toggleFunction"],
  computed: {
    imageAlt() {
      return this.content + "image";
    },
  },
  methods: {
    toggleItem() {
      return this.$emit("toggleFunction");
    },
  },
};
</script>

<style></style>

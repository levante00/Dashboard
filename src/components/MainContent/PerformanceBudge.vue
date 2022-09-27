<template>
  <base-card class="flex flex-row justify-between max-w-238px w-full max-h-72px h-full ">
    <div class="pl-14px py-10px">
      <h3 class="text-blue-450 2xl:text-18px text-16px font-bold">{{ contentName }}</h3>
      <p class="text-grey-350 2xl:text-18px text-16px font-bold">{{ contentNumber }}</p>
    </div>
    <div>
      <img :src="contentLink" class="w-92px h-72px" />
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["contentName", "contentNumber", "contentLink"],
  methods: {},
};
</script>

<style></style>

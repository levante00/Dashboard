<template>
  <div>
    <ul>
      <li
        v-for="item in items"
        :content="item.text"
        :link="item.link"
        class="mb-8 last:mb-0"
      >
        <div class="flex 2xl:flex-row flex-row-reverse gap-9">
          <img :src="item.link" :alt="imageAlt(item)" />
          <p
            class="font-medium text-18px text-grey-400 cursor-pointer hover:bg-slate-200"
          >
            {{ item.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    imageAlt(item) {
      return item.texts + "_image";
    },
  },
};
</script>

<style></style>

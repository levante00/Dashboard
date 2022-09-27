<template>
  <header class="flex flex-row justify-start 2xl:justify-between gap-14px flex-wrap">
    <div v-for="user in usersInfo" class="flex flex-col items-center gap-4">
      <img :src="user.link" alt="profile_image" />
      <p
        class="text-14px cursor-pointer hover:bg-slate-200"
        @click="callProvideToMain(user.name, true)"
      >
        {{ user.name }}
      </p>
    </div>
  </header>
</template>
<script>
export default {
  props: ["usersInfo"],
  emits: ["provideToMain"],
  methods: {
    callProvideToMain(name, show) {
      return this.$emit("provideToMain", name, show);
    },
  },
  beforeMount() {
    const show = false;
    this.callProvideToMain(this.usersInfo[0].name, false);
  },
};
</script>

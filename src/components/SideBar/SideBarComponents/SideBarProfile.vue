<template>
  <section class="pt-9 text-14px">
    <div>
      <div class="rounded h-108px w-108px">
        <img :src="information.profileImage" alt="unknown_profile_image" class="object-cover" />
      </div>
      <h2 class="mt-14px text-16px font-medium">
        {{ information.profileName + " " + information.profileLastName }}
      </h2>
      <p class="mt-4 text-14px text-grey-200">
        {{ information.profileCompetencies }}
      </p>
    </div>
    <div class="flex flex-row gap-50px pt-30px">
      <div
        v-for="profileCharacteristic in information.profileCharacteristics"
        class="flex flex-col items-center justify-center gap-1"
      >
        <h2 class="text-18px font-medium">
          {{ profileCharacteristic.number }}
        </h2>
        <p class="text-12px text-grey-200">
          {{ profileCharacteristic.content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["information"],
};
</script>

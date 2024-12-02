<script setup lang="ts">
import { IReleaseProps } from '@/store/types/interfaces';

const props = defineProps<IReleaseProps>();
</script>

<template>
  <div class="release-item">
    <img :src="props.imagePath" alt="release image" class="mb-12" />
    <h5 class="release-title mb-5">{{ props.title }}</h5>
    <p class="flex gap-3 mb-7">
      <span class="release-bubble">Location: {{ props.location }}</span>
      <span class="release-bubble">Department: {{ props.date }}</span>
    </p>
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.release-bubble {
  padding: 8px 16px;
  border-radius: 77px;
  border: 1px solid $color-grey-15;
}

.release-item {
  padding: 30px;
  width: 49%;
  background-color: $color-grey-11;
  border-radius: 40px 40px 15px 15px;

  img {
    border-radius: 33px 33px 15px 15px;
  }
}

.release-title {
  font-size: 24px;
  color: $color-white;
}
</style>

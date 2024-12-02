<script setup lang="ts">
import { useFeatures } from '@/store/modules/features';

const features = useFeatures();
</script>

<template>
  <ul class="features-control w-1/5">
    <li
      v-for="feature in features.data"
      :key="feature.key"
      @click="features.toggleStatus(feature.status)"
      :class="{ active: features.status === feature.status }"
    >
      {{ feature.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.features-control {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  height: 100%;
  padding: 50px;
  background-color: $color-grey-11;
  border-radius: 12px;

  li {
    cursor: pointer;
    border: 1px solid $color-grey-15;
    border-radius: 77px;
    padding: 18px 24px;
    font-weight: 400;
    color: $color-white;

    &.active {
      color: $color-green-60;
      background-color: $color-grey-10;
    }
  }
}
</style>

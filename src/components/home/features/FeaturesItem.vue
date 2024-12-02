<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';
import { IFeaturesContent } from '@/store/types/interfaces';

const props = defineProps<{
  content: IFeaturesContent;
}>();
</script>

<template>
  <router-link to="/" class="features-item">
    <div class="features-title flex justify-between">
      <h4>{{ props.content.title }}</h4>
      <ArrowUpRightIcon class="size-8 text-primary" />
    </div>
    <p>{{ props.content.text }}</p>
  </router-link>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.features-item {
  padding: 50px;
  background-color: $color-grey-11;
  border-radius: 12px;
  border: 1px solid $color-grey-15;

  .features-title {
    margin-bottom: 30px;

    h4 {
      color: $color-white;
      font-weight: 400;
      font-size: 22px;
    }
  }
}
</style>

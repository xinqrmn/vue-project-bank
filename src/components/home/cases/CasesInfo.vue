<script setup lang="ts">
import { ICaseInfo } from '@/store/types/interfaces';

const props = defineProps<{
  caseInfo: ICaseInfo;
}>();
</script>

<template>
  <div
    class="grid-info flex flex-col justify-between items-start h-full w-full"
  >
    <div class="grid-text">
      <h4>{{ props.caseInfo.title }}</h4>
      <p>{{ props.caseInfo.subtitle }}</p>
    </div>
    <dl class="flex justify-between items-center gap-12">
      <div
        class="grid-desc"
        v-for="item in props.caseInfo.items"
        :key="item.percentName"
      >
        <dt class="text-primary">{{ item.percent }}%</dt>
        <dd>{{ item.percentName }}</dd>
      </div>
    </dl>
    <router-link class="grid-more" to="/"> Learn More </router-link>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.grid-info {
  padding: 30px 0;
}

.grid-text {
  h4 {
    font-weight: 500;
    font-size: 30px;
    color: $color-white;
    margin-bottom: 15px;
  }
}

.grid-more {
  padding: 18px 24px;
  color: $color-white;
  border-radius: 75px;
  background-color: $color-grey-11;
  border: 1px solid $color-grey-15;
}

.grid-desc {
  &:not(:last-child) {
    border-right: 2px dashed $color-grey-15;
  }

  dt {
    font-weight: 500;
    font-size: 58px;
  }
}
</style>

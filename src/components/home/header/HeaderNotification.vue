<script setup lang="ts">
import {PlusIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="notification flex items-center text-white gap-2 rounded-lg inline-flex">
    <div class="notification-icon flex rounded-full justify-center items-center">
      <PlusIcon class="inline size-6 text-black"/>
    </div>
    <div class="notification-list">
      <p>+ $5000,00</p>
      <span>Monthly Income</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.notification {
  background-color: #22251B;
  padding: 12px 18px;
}

.notification-icon {
  width: 40px;
  height: 40px;
  background-color: $color-green-60;
}

.notification-list {

  span {
    color: $color-white-90;
    font-size: 14px;
  }
}

</style>

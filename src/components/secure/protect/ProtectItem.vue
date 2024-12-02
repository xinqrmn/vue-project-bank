<script setup lang="ts">
import RoundedIcon from '@/components/RoundedIcon.vue';

interface IProtectProps {
  title: string;
  text: string;
}

const props = defineProps<IProtectProps>();
</script>

<template>
  <div class="protect-item">
    <div class="protect-title flex gap-5 items-center mb-6">
      <RoundedIcon>
        <slot></slot>
      </RoundedIcon>
      <h4>{{ props.title }}</h4>
    </div>
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.protect-item {
  width: 48%;
  padding: 50px;
  background-color: $color-grey-11;
  border-radius: 20px;
  border: 1px solid $color-grey-15;

  h4 {
    color: $color-white;
    font-weight: 400;
    font-size: 24px;
  }
}
</style>

<script setup lang="ts">

import {IValuesProps} from "@/store/types/interfaces";

const props = defineProps<IValuesProps>()

</script>

<template>
  <div class="values-item">
    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.values-item {
  width: 47%;
  padding: 0 30px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 1px;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: $color-green-60;
  }

  h3 {
    font-weight: 500;
    font-size: 58px;
    margin-bottom: 30px;
    color: $color-grey-30;
  }

  p {
    color: $color-grey-70;
  }
}

</style>

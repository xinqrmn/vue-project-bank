<script setup lang="ts">
import {IBenefitsProps} from "@/store/types/interfaces";

const props = defineProps<IBenefitsProps>()
</script>

<template>
  <div class="benefits-item">
    <div class="benefits-title">
      <div class="benefits-icon">
        <span>
          <slot></slot>
        </span>
      </div>
      <h4>{{ props.title }}</h4>
    </div>
    <p class="benefits-text">{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.benefits-item {
  width: 100%;
  padding: 50px;
  font-weight: 400;
  font-size: 24px;
  border: 1px solid $color-grey-15;
  background: $color-grey-11;
  background: linear-gradient(140deg, rgba($color-green-60, 0.01) 0%, rgba(0,0,0,0) 100%);

  &:nth-child(1) {
    border-radius: 50px 20px;
  }
  &:nth-child(2) {
    border-radius: 20px 50px;
  }
  &:nth-child(3) {
    border-radius: 20px 50px;
  }
  &:nth-child(4) {
    border-radius: 50px 20px;
  }
}

.benefits-title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;

  h4 {
    color: $color-white;
  }
}

.benefits-icon {
  background: rgb(202, 255, 51);
  background: linear-gradient(180deg, rgba(202, 255, 51, .05) 0%, rgba(202, 255, 51, 0) 90%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;


  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 20px;
    width: 75px;
    height: 75px;
    color: $color-green-60;
    background: rgb(202, 255, 51);
    background: linear-gradient(180deg, rgba(202, 255, 51, .1) 0%, rgba(202, 255, 51, 0) 80%);
  }
}
</style>

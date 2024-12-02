<script setup lang="ts">
interface IControlProps {
  booleanVariable: boolean;
  clickFunc: () => void;
}

const props = defineProps<IControlProps>();
</script>

<template>
  <div class="control p-3">
    <button
      :class="{ active: props.booleanVariable }"
      @click="props.clickFunc"
      type="button"
    >
      For Individuals
    </button>
    <button
      :class="{ active: !props.booleanVariable }"
      @click="props.clickFunc"
      type="button"
    >
      For Businesses
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.control {
  background-color: $color-grey-11;
  border-radius: 75px;
  border: 1px solid $color-grey-15;

  button {
    padding: 14px 24px;
    border-radius: 80px;
    transition: all 0.3s ease-in-out;
    color: $color-white;
    font-weight: 400;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  button.active {
    background-color: $color-green-60;
    color: $color-grey-11;
  }
}
</style>

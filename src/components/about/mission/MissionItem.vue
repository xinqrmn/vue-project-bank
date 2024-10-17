<script setup lang="ts">

interface IMissionItemProps {
  title: string
  text: string
}

const props = defineProps<IMissionItemProps>()

</script>

<template>
  <div class="mission-item">
    <h4>{{ props.title }}</h4>
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.mission-item {
  width: 55%;

  h4 {
    font-size: 38px;
    color: $color-white;
    margin-bottom: 14px;
  }

  &:nth-child(odd) {
    padding-right: 50px;
    border-right: 1px solid $color-green-60;
  }

  &:nth-child(even) {
    padding-left: 50px;
    border-left: 1px solid $color-green-60;
  }
}

</style>

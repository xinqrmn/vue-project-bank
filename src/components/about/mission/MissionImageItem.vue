<script setup lang="ts">
import MissionDecor from "@/assets/img/mission-decor.svg";

const props = defineProps<IMissionImageItemProps>()

interface IMissionImageItemProps {
  source: string
}
</script>

<template>
  <div class="mission-image-item">
    <img :src=MissionDecor alt="Mission Decor"/>
    <img :src=props.source alt="Mission Image First" class="mission-image absolute bottom-0"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.mission-image-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px 50px 20px 20px;
  border: 1px solid $color-grey-15;
  background-color: $color-grey-11;
  position: relative;

  .mission-image {
    border-radius: 55px 55px 0 0;
  }
}
</style>

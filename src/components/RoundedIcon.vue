<script setup lang="ts">

</script>

<template>
  <div class="icon">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.icon {
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

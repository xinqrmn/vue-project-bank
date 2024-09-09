<script setup lang="ts">
interface IProps {
  title: string,
}

const props = defineProps<IProps>()

</script>

<template>
  <div class="tale flex flex-col justify-between items-center w-full">
    <div class="grid-icon">
      <span>
        <slot></slot>
      </span>
    </div>

    <h4>{{ props.title }}</h4>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.tale {
  background-color: $color-grey-10;
  border: 1px solid $color-grey-15;
  border-radius: 10px;
  padding: 30px;
  z-index: 100;

  h4 {
    color: $color-white;
  }
}

.grid-icon {
  background: rgb(202,255,51);
  background: linear-gradient(180deg, rgba(202,255,51, .05) 0%, rgba(202,255,51,0) 90%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 25px;


  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 20px;
    width: 75px;
    height: 75px;
    color: $color-green-60;
    background: rgb(202,255,51);
    background: linear-gradient(180deg, rgba(202,255,51, .1) 0%, rgba(202,255,51,0) 80%);
  }
}
</style>

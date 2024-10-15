<script setup lang="ts">

interface IProps {
  title: string
  subtitle: string
}

const props = defineProps<IProps>()

</script>

<template>
  <div class="products-item flex flex-col justify-between items-center">
    <div class="products-icon">
      <span>
        <slot></slot>
      </span>
    </div>
    <div class="products-text">
      <h4>{{ props.title }}</h4>
      <p>{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.products-item {
  text-align: center;
  width: 33.3333%;
  min-height: 320px;

  &:not(:last-child) {
    padding-right: 50px;
    border-right: 1px solid $color-grey-15;
  }

  &:not(:first-child) {
    padding-left: 50px;
  }

  h4 {
    font-weight: 400;
    font-size: 24px;
    color: $color-white;
    margin-bottom: 20px;
  }

  p {

  }
}

.products-icon {
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

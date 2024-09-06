<script setup lang="ts">
import {useProducts} from "@/store/modules/products";

const products = useProducts()

</script>

<template>
  <div class="flex justify-between items-end mb-24">

    <div class="products-title">
      <h3 class="title">
        Our
        <span class="text-primary">Products</span>
      </h3>
      <p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique
        financial needs and aspirations</p>
    </div>
    <div class="products-control p-3">
      <button :class="{active: products.status}" @click="products.toggleStatus()" type="button">For Individuals</button>
      <button :class="{active: !products.status}" @click="products.toggleStatus()" type="button">For Businesses</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.products-title {
  width: 60%;
}

.products-control {
  background-color: $color-grey-11;
  border-radius: 75px;
  border: 1px solid $color-grey-15;

  button {
    padding: 14px 24px;
    border-radius: 80px;
    transition: all .3s ease-in-out;
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

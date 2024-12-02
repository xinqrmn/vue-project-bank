<script setup lang="ts">
import { useProducts } from '@/store/modules/products';
import ControlFace from '@/components/ControlFace.vue';

const products = useProducts();
</script>

<template>
  <div class="flex justify-between items-end mb-24">
    <div class="products-title">
      <h3 class="title">
        Our
        <span class="text-primary">Products</span>
      </h3>
      <p>
        Discover a range of comprehensive and customizable banking products at
        YourBank, designed to suit your unique financial needs and aspirations
      </p>
    </div>
    <!--    <div class="products-control p-3">-->
    <!--      <button :class="{active: products.status}" @click="products.toggleStatus()" type="button">For Individuals</button>-->
    <!--      <button :class="{active: !products.status}" @click="products.toggleStatus()" type="button">For Businesses</button>-->
    <!--    </div>-->
    <ControlFace
      :booleanVariable="products.status"
      :clickFunc="products.toggleStatus"
    ></ControlFace>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.products-title {
  width: 60%;
}
</style>

<script setup lang="ts">
import ProductsNav from '@/components/home/products/ProductsNav.vue';
import ProductsList from '@/components/home/products/ProductsList.vue';
</script>

<template>
  <section class="products mb-36">
    <div class="container">
      <products-nav></products-nav>
      <products-list></products-list>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
</style>

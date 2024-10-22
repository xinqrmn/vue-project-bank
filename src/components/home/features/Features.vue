<script setup lang="ts">

import FeaturesTabs from "@/components/home/features/FeaturesTabs.vue";
</script>

<template>
  <section class="features mb-36">
    <div class="container">
      <h3 class="title">Our <span class="text-primary">Features</span></h3>
      <p class="mb-20 w-3/4">Experience a host of powerful features at YourBank, including seamless online banking, secure
        transactions, and personalized financial insights, all designed to enhance your banking experience</p>

      <FeaturesTabs />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

</style>

<script setup lang="ts">
import CasesGrid from '@/components/home/cases/CasesGrid.vue';
</script>

<template>
  <section class="cases mb-36">
    <div class="container">
      <h3 class="title text-primary">Use Cases</h3>
      <p class="mb-20">
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </p>

      <CasesGrid />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
</style>

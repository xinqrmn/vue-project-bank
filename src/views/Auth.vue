<script setup lang="ts">
import Reviews from '@/components/reviews/Reviews.vue';
import Auth from '@/components/auth/Auth.vue';
</script>

<template>
  <Auth />
  <Reviews />
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/auth';
</style>

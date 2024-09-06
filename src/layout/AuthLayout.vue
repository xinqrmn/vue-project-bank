<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue"
import Footer from "@/components/Footer.vue"

</script>

<template>
  <the-navbar></the-navbar>
  <main class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <Footer/>
</template>

<style scoped lang="scss">

.main {
  flex: 1 1 auto;
}

</style>

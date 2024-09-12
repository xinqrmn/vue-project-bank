<script setup lang="ts">

import QuestionsInner from "@/components/questions/QuestionsInner.vue";
</script>

<template>
  <section class="questions pt-36">
    <div class="container">
      <h3 class="title"><span class="text-primary">Frequently </span>Asked Questions</h3>
      <p class="mb-20 w-3/4">Still you have any questions? Contact our Team via support@yourbank.com</p>

      <QuestionsInner />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

</style>

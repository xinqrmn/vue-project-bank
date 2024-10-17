<script setup lang="ts">

import ProtectInner from "@/components/secure/protect/ProtectInner.vue";
</script>

<template>
  <section class="protect mb-36">
    <div class="container">
      <h3 class="title ">How We <span class="text-primary"> Protect You </span></h3>
      <p class="mb-20 w-4/5">At YourBank, we prioritize the security and confidentiality of your financial information.
        Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and
        transactions are safeguarded at all times</p>

      <protect-inner></protect-inner>
    </div>
  </section>
</template>

<style scoped lang="scss">
.protect {
  min-height: 70vh;
}
</style>

<script setup lang="ts">

import ProtectItem from "@/components/secure/protect/ProtectItem.vue";
</script>

<template>
  <div class="protect-inner">
    <div class="protect-decor"></div>
    <protect-item></protect-item>
  </div>
</template>

<style scoped lang="scss">

.protect-inner {
  position: relative;
}

.protect-decor {
  position: absolute;
  width: 100%;
  height: 600px;
  z-index: 3;
  border-radius: 50px 50px 20px 20px;
  background: linear-gradient(140deg, rgba(202, 255, 51, 0.01) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>

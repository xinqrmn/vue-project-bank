<script setup lang="ts">
import {ArrowsRightLeftIcon} from '@heroicons/vue/24/solid'

</script>

<template>
<div class="currency-wrapper flex justify-between items-center">
  <h3>Supported Currency</h3>
  <ul class="currency flex items-center">
    <li>
      <router-link class="currency-item" to="/">
        <img src="../../../assets/img/dollar-logo.svg" alt="dollar-logo">
      </router-link>
    </li>
    <li>
      <router-link class="currency-item" to="/">
        <img src="../../../assets/img/euro-logo.svg" alt="euro-logo">
      </router-link>
    </li>
    <li>
      <router-link class="currency-item" to="/">
        <img src="../../../assets/img/bitcoin-logo.svg" alt="bitcoin-logo">
      </router-link>
    </li>
    <li>
      <router-link class="currency-item" to="/">
        <img src="../../../assets/img/ethereum-logo.svg" alt="ethereum-logo">
      </router-link>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.currency-wrapper {
  display: inline-flex;
  background-color: #22251B;
  padding: 9px 20px;
  border-radius: 77px;
  font-weight: 400;
  color: $color-white;
  gap: 10px;
}

.currency {
  background: $color-grey-10;
  border-radius: 77px;
  border: 1px solid $color-grey-15;
  padding: 9px;
  gap: 8px;
}

.currency-item {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: $color-grey-15;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

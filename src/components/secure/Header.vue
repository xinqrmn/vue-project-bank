<script setup lang="ts">
import SecureImg from '@/assets/img/secure-header.jpg'
import HeaderDecor from '@/assets/img/careers-decor.svg'
</script>

<template>
  <header class="header mb-36">
    <div class="container">
      <div class="header-inner">
        <div class="header-title">
          <h2 class="title mb-5"> Your Security is Our <span class="text-primary"> Top Priority </span></h2>
          <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust
            security measures and advanced technologies to protect your personal and financial data. Rest assured that
            when you bank with us, your security is our utmost priority.</p>
        </div>
        <img :src=SecureImg alt="header image" class="header-image">
        <img :src=HeaderDecor alt="header decor" class="header-decor">
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.header-inner {
  height: 80vh;
  background-color: $color-grey-11;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  position: relative;

  .header-image {
    border-radius: 20px;
    height: 100%;
    align-self: end;
    z-index: 10;
  }
}

.header-decor {
  position: absolute;
  display: block;
  right: 0;
  top: 0;
  z-index: 1;
}

.header-title {
  border-radius: 20px 0 80px 20px;
  background-color: $color-grey-10;
  padding: 80px;
  height: min-content;
  width: 46%;
  position: absolute;
  z-index: 22;
}

</style>

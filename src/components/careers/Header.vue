<script setup lang="ts">
import HeaderImg from '@/assets/img/careers-header.jpg'
import HeaderDecor from '@/assets/img/careers-decor.svg'
</script>

<template>
  <header class="header mb-36">
    <div class="container">
      <div class="header-inner">
        <div class="header-title">
          <h2 class="title">Welcome to <span class="text-primary"> YourBank </span> Careers!</h2>
          <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
        </div>
        <img :src=HeaderImg alt="header image" class="header-image">
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
  width: 50%;
  position: absolute;
  z-index: 22;
}

</style>

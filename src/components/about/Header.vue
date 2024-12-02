<script setup lang="ts">
import HeaderImg from '@/assets/img/about-header.jpg';
import HeaderDecor from '@/assets/img/careers-decor.svg';
</script>

<template>
  <header class="header mb-36">
    <div class="container">
      <div class="header-inner">
        <div class="header-title">
          <p class="subtitle">Welcome to YourBank</p>
          <h2 class="title mb-5">
            Where Banking Meets <span class="text-primary"> Excellence! </span>
          </h2>
          <p>
            At YourBank, we believe that banking should be more than just
            transactions. It should be an experience that empowers individuals
            and businesses to thrive and reach their financial goals. As a
            trusted financial institution, we are committed to delivering
            exceptional banking services that go beyond expectations. With a
            focus on innovation, personalized solutions, and unwavering
            integrity, we strive to provide the best banking experience for our
            valued customers. Join us on this exciting journey and discover a
            new level of banking excellence.
          </p>
        </div>
        <img :src="HeaderImg" alt="header image" class="header-image" />
        <img :src="HeaderDecor" alt="header decor" class="header-decor" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

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

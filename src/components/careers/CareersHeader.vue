<script setup lang="ts">
import CareersImage from "@/assets/img/header-careers.jpg"

</script>

<template>
  <header class="careers-header">
    <div class="container">
      <div class="careers-wrapper">
        <div class="careers-text">
          <h3 class="title">Welcome to <span class="text-primary">YourBank</span> Careers!</h3>
          <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
        </div>
        <img class="careers-image" :src="CareersImage" alt="careers-image">
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

.careers-wrapper {
  padding: 50px;
  background-color: $color-grey-11;
  border-radius: 20px;
  position: relative;
  min-height: 87vh;

  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 300px;
    width: 300px;
    right: 0;
    top: 0;
    background-image: url("../../assets/img/decor-right-top.svg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

.careers-text {
  width: 50%;
  padding: 80px;
  background-color: $color-grey-10;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 22;
  border-radius: 5px 0 80px 5px;
}

.careers-image {
  display: block;
  height: 720px;
  object-fit: cover;
  border-radius: 22px;
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 1;
}
</style>
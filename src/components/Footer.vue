<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid'

</script>

<template>
  <footer>
    <div class="container">
      <router-link to="/" class="flex justify-center items-center mb-12">
        <img src="../assets/img/logo-desktop.svg" alt="Logo">
      </router-link>
      <nav class="mb-12">
        <ul class="flex justify-center gap-6">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/career">Career</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/secure">Security</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex justify-center gap-5 mb-12 links">
        <a href="mailto:mongo4558@gmail.com">
          <EnvelopeIcon class="size-6 icon" />
          mongo4558@gmail.com
        </a>
        <a href="tel:+79050173544">
          <PhoneIcon class="size-6 icon" />
          +7 (905) 017-35-44
        </a>
        <a href="https://yandex.ru/maps/-/CDsYY8p8" target="_blank">
          <MapPinIcon class="size-6 icon" />
          Russian Federation, Samara
        </a>
      </div>
      <div class="footer-socials flex items-center justify-between py-4 px-9">
        <ul class="flex items-center justify-center gap-3.5">
          <li>
            <a class="link-btn" href="/">
              <img src="../assets/img/facebook-logo.svg" alt="facebook-logo">
            </a>
          </li>
          <li>
            <a class="link-btn" href="/">
              <img src="../assets/img/twitter-logo.svg" alt="twitter-logo">
            </a>
          </li>
          <li>
            <a class="link-btn" href="/">
              <img src="../assets/img/linkedin-logo.svg" alt="linkedin-logo">
            </a>
          </li>
        </ul>
        <p>
          YourBank All Rights Reserved
        </p>
        <div class="flex items-center justify-center gap-3">
          <router-link to="/auth">Privacy Policy</router-link>
          |
          <router-link to="/auth">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

footer {
  background-color: $color-grey-11;
  padding-top: 100px;
  padding-bottom: 50px;
}

.icon {
  color: $color-green-60;
}

.links {
  padding: 50px 0;
  border-bottom: 1px solid $color-grey-15;
  border-top: 1px solid $color-grey-15;


  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}

.link-btn {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-green-60;
  border-radius: 50%;
}

.footer-socials {
  background-color: $color-grey-10;
  border-radius: 100px;
  border: 1px solid $color-grey-15;
}


</style>

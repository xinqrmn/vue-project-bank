<script setup lang="ts">
import Reviews from "@/components/reviews/Reviews.vue";
import TheLogin from "@/components/TheLogin.vue";
import TheRegister from "@/components/TheRegister.vue";
import {useAuth} from "@/store/modules/auth";

const auth = useAuth()

const switchToLogin = () => {
  auth.setMode('login')
}
const switchToRegister = () => {
  auth.setMode('register')
}
</script>

<template>
  <template v-if="auth.mode === 'register'">
    <TheRegister @switch-to-login="switchToLogin"/>
  </template>
  <template v-else-if="auth.mode === 'login'">
    <TheLogin @switch-to-register="switchToRegister"/>
  </template>
  <Reviews/>
</template>

<style lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/auth";
</style>

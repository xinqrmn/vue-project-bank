<script setup lang="ts">
import Reviews from "@/components/reviews/Reviews.vue";
import TheLogin from "@/components/TheLogin.vue";
import TheRegister from "@/components/TheRegister.vue";
import {useAuth} from "@/store/modules/auth";

const auth = useAuth()

</script>

<template>
  <template v-if="auth.type === 'register'">
    <TheRegister/>
  </template>
  <template v-else-if="auth.type === 'login'">
    <TheLogin/>
  </template>
  <Reviews/>
</template>

<style scoped lang="scss">

</style>

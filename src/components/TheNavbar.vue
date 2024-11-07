<script setup lang="ts">

import {useAuth} from "@/store/modules/auth";

const auth = useAuth()

</script>

<template>
  <div class="container">
    <nav class="flex items-center justify-between py-4 px-9 mb-12">
      <router-link to="/">
        <img src="../assets/img/logo-desktop.svg" alt="Logo">
      </router-link>
      <ul class="flex items-center justify-center gap-1">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/careers">Careers</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/secure">Security</router-link>
        </li>
      </ul>
      <div class="auth__links flex items-center justify-center gap-1">
        <router-link to="/auth" @click="auth.setMode('register')" :class="auth.mode === 'register' ? 'primary' : ''">Sign Up</router-link>
        <router-link to="/auth" @click="auth.setMode('login')" :class="auth.mode === 'login' ? 'primary' : ''">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import '~@/assets/styles/variables';

nav {
  background-color: $color-grey-11;
  border: 1px solid $color-grey-15;
  border-radius: 100px;
  color: $color-white;
}

.container {
  padding-top: 50px;
}

nav ul li a {
  padding: 12px 25px;
  transition: all .3s;
}

nav ul li a.active,
nav ul li a:hover {
  background-color: $color-grey-15;
  border-radius: 80px;
}

.auth__links {
  a {
    padding: 15px 30px;
  }

  .primary {
    color: $color-grey-11;
    background-color: $color-green-60;
    border-radius: 80px;
  }
}
</style>

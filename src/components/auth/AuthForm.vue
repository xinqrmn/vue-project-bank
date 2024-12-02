<script setup lang="ts">
import ErrorMessage from '@/components/ErrorMessage.vue';
import ErrorModal from '@/components/ErrorModal.vue';
import SuccessModal from '@/components/SuccessModal.vue';
import { useAuth } from '@/store/modules/auth';

const authStore = useAuth();
</script>

<template>
  <form class="login__form" @submit.prevent="authStore.submitForm">
    <div class="login__inputs-inner">
      <div class="login__inputs-box" v-if="authStore.mode === 'register'">
        <input
          type="text"
          v-model="authStore.firstName"
          placeholder="Enter first name"
          class="login__input"
          required
          autocomplete="current-password"
        />
        <ErrorMessage :error="authStore.errors.firstName"></ErrorMessage>
      </div>
      <div class="login__inputs-box" v-if="authStore.mode === 'register'">
        <input
          type="text"
          v-model="authStore.lastName"
          placeholder="Enter last name"
          class="login__input"
          required
          autocomplete="current-password"
        />
        <ErrorMessage :error="authStore.errors.lastName"></ErrorMessage>
      </div>
      <div class="login__inputs-box">
        <input
          type="email"
          v-model="authStore.email"
          placeholder="Enter your Email"
          class="login__input"
          required
          autocomplete="current-password"
        />
        <ErrorMessage :error="authStore.errors.email"></ErrorMessage>
      </div>
      <div class="login__inputs-box">
        <input
          type="password"
          v-model="authStore.password"
          placeholder="Enter your Password"
          class="login__input"
          required
        />
        <ErrorMessage :error="authStore.errors.password"></ErrorMessage>
      </div>
    </div>
    <div class="login__buttons-box">
      <a
        href="#"
        class="login__forgot"
        v-if="authStore.mode === 'login'"
        @click.prevent="authStore.sendResetPasswordEmail('' + authStore.email)"
        >Forgot Password?</a
      >
      <button type="submit" class="login__button login__button--primary">
        {{ authStore.mode === 'login' ? 'Login' : 'Sign up' }}
      </button>
      <button
        type="button"
        @click="
          authStore.setMode(authStore.mode === 'login' ? 'register' : 'login')
        "
        class="login__button login__button--secondary"
      >
        {{ authStore.mode === 'login' ? 'Sign Up' : 'Login' }}
      </button>
    </div>
    <ErrorModal :errorMessage="authStore.errorMessage" />
    <SuccessModal :successMessage="authStore.successMessage" />
  </form>
</template>

<style scoped lang="scss"></style>

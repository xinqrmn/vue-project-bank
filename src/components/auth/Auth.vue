<script setup lang="ts">
import DecorRightTopImage from '@/assets/img/decor-right-top.svg';
import AuthForm from '@/components/auth/AuthForm.vue';
import SocialLogin from '@/components/SocialLogin.vue';
import { useAuth } from '@/store/modules/auth';
import Loader from '@/components/Loader.vue';

const authStore = useAuth();
</script>

<template>
  <section class="login">
    <div class="login__overlay"></div>
    <img class="login__decor" :src="DecorRightTopImage" alt="decor" />
    <div class="login__container">
      <div class="login__header">
        <h2 class="title text-primary">
          {{ authStore.mode === 'login' ? 'Login' : 'Sign Up' }}
        </h2>
        <p>
          {{
            authStore.mode === 'login'
              ? 'Welcome back! Please log in to access your account.'
              : 'Create a new account.'
          }}
        </p>
      </div>
      <div class="login__wrapper">
        <AuthForm />
        <SocialLogin
          :auth-with-apple="authStore.authWithGoogle"
          :auth-with-facebook="authStore.authWithFacebook"
          :auth-with-google="authStore.authWithApple"
        ></SocialLogin>
      </div>
    </div>
    <Loader v-if="authStore.loading"> </Loader>
  </section>
</template>

<style scoped lang="scss"></style>

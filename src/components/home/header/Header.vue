<script setup lang="ts">
import {CheckBadgeIcon} from '@heroicons/vue/24/solid'
import PrimaryButton from "@/components/PrimaryButton.vue"
import HomeNotification from "@/components/home/header/HeaderNotification.vue";
import HomeTransactions from "@/components/home/header/HeaderTransactions.vue";
import HomeExchange from "@/components/home/header/HeaderExchange.vue";
import HomeCurrency from "@/components/home/header/HeaderCurrency.vue";
</script>

<template>
  <header class="header pt-24 overflow-hidden">
    <div class="container">
      <div class="header-wrapper flex justify-between items-start">
        <div class="header-info w-1/2">
          <p class="requirements inline-block px-4 py-2.5 mb-5">
            <CheckBadgeIcon class="inline size-6 text-primary mr-1"/>
            No LLC Required, No Credit Check.
          </p>
          <h1 class="font-medium text-5xl text-white leading-normal title">
            Welcome to YourBank Empowering Your <span class="text-primary">Financial Journey</span>
          </h1>
          <p class="subtitle mb-12">At YourBank, our mission is to provide comprehensive banking solutions that empower
            individuals and
            businesses to achieve their financial goals. We are committed to delivering personalized and innovative
            services that prioritize our customers' needs.
          </p>
          <PrimaryButton>Open Account</PrimaryButton>
        </div>
        <div class="header-exchange w-1/3 flex flex-col relative">
          <!--          <HomeNotification class="self-start"/>-->
          <div class="trans-box my-0 mb-3 mx-auto w-2/3 p-9 rounded-lg">
            <HomeTransactions/>
            <HomeExchange/>
          </div>
          <HomeCurrency class="self-end"/>
          <img class="trans-decor" src="../../../assets/img/decor-arrows.svg" alt="decor-arrows">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.header {
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -25px;
    width: 400px;
    height: 400px;
    background-image: url('../../../assets/img/decor-left-top.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.header-decor {
  top: -60px;
  left: -20px;
  width: 500px;
  height: 500px;
}

.header-exchange {
  width: 50%;
}

.requirements {
  color: $color-white;
  background-color: $color-grey-15;
  border-radius: 25px;
}

.title {
  width: 77%;
}

.subtitle {
  color: $color-white-90;
}

.trans-box {
  border: 1px solid $color-grey-15;
  z-index: 100;
  background-color: $color-grey-11;
}

.trans-decor {
  position: absolute;
  top: 0;
  right: -50px;
  z-index: 1;
  height: 400px;
  width: 400px;
}
</style>

<script setup lang="ts">
import PromoDecor from '@/assets/img/decor-center.svg';
</script>

<template>
  <section class="promo mb-36">
    <div class="container">
      <div class="promo-inner">
        <img class="promo-decor" :src="PromoDecor" alt="" />
        <div class="promo-text">
          <h3 class="title">
            Start your financial journey with
            <span class="text-primary">YourBank today!</span>
          </h3>
          <p>
            Ready to take control of your finances? Join YourBank now, and let
            us help you achieve your financial goals with our tailored solutions
            and exceptional customer service
          </p>
        </div>
        <router-link to="/auth" class="promo-link"> Open account </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.promo-inner {
  padding: 80px;
  border-radius: 20px;
  border: 1px solid #212121;
  background-color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.promo-decor {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.promo-text {
  width: 75%;
  z-index: 11;
}

.promo-link {
  display: block;
  padding: 18px 30px;
  background-color: $color-green-60;
  font-weight: 400;
  color: $color-black;
  border-radius: 55px;
}
</style>

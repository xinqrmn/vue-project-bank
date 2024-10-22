<script setup lang="ts">

import ProtectItem from "@/components/secure/protect/ProtectItem.vue";
import {Square3Stack3DIcon, CurrencyRupeeIcon, SquaresPlusIcon, SparklesIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="protect-inner flex flex-wrap justify-between gap-10">
    <div class="protect-decor"></div>
    <protect-item title="Secure Online Banking Platform"
                  text="Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.">
      <SquaresPlusIcon/>
    </protect-item>
    <protect-item title="Multi-Factor Authentication"
                  text="To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.">
      <Square3Stack3DIcon/>
    </protect-item>
    <protect-item title="Fraud Monitoring"
                  text="We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.">
      <SparklesIcon/>
    </protect-item>
    <protect-item title="Secure Mobile Banking"
                  text="Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.">
      <CurrencyRupeeIcon/>
    </protect-item>
  </div>
</template>

<style scoped lang="scss">

.protect-inner {
  position: relative;
  padding: 85px 85px 0 85px;
}

.protect-decor {
  position: absolute;
  width: 100%;
  height: 600px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  border-radius: 50px 50px 20px 20px;
  background: linear-gradient(140deg, rgba(202, 255, 51, 0.01) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>

<script setup lang="ts">
import { useProducts } from '@/store/modules/products';
import ProductsItem from '@/components/home/products/ProductsItem.vue';
import {
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
  BriefcaseIcon,
} from '@heroicons/vue/24/solid';

const products = useProducts();
</script>

<template>
  <div class="products-list">
    <template class="products-status" :class="{ active: products.status }">
      <products-item
        title="Checking Accounts"
        subtitle="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
      >
        <BriefcaseIcon />
      </products-item>
      <products-item
        title="Savings Accounts"
        subtitle="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
      >
        <ArchiveBoxArrowDownIcon />
      </products-item>
      <products-item
        title="Loans and Mortgages"
        subtitle="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
      >
        <BanknotesIcon />
      </products-item>
    </template>
    <template class="products-status" :class="{ active: !products.status }">
      <products-item
        title="Business Accounts"
        subtitle="Streamline your business finances with our specialized business accounts. Enjoy benefits like detailed transaction reports, business credit cards, and dedicated support to help your business thrive."
      >
        <BriefcaseIcon />
      </products-item>
      <products-item
        title="Investment Services"
        subtitle="Grow your wealth with our comprehensive investment services. From retirement accounts to brokerage services, our financial advisors will help you create a strategy tailored to your goals."
      >
        <ArchiveBoxArrowDownIcon />
      </products-item>
      <products-item
        title="Insurance Options"
        subtitle="Protect what matters most with our range of insurance products. Whether you need health, life, or property insurance, we offer coverage to fit your needs and give you peace of mind."
      >
        <BanknotesIcon />
      </products-item>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.products-list {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.products-status {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;
  opacity: 0;

  &.active {
    opacity: 1;
  }
}
</style>

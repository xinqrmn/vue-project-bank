<script setup lang="ts">
import BenefitsItem from '@/components/careers/benefits/BenefitsItem.vue';
import {
  PresentationChartBarIcon,
  LightBulbIcon,
  BriefcaseIcon,
  InboxStackIcon,
} from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="benefits-inner">
    <benefits-item
      title="Competitive Compensation"
      text="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."
    >
      <PresentationChartBarIcon />
    </benefits-item>
    <benefits-item
      title="Health and Wellness"
      text="We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
    >
      <LightBulbIcon />
    </benefits-item>
    <benefits-item
      title="Retirement Planning"
      text="YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."
    >
      <BriefcaseIcon />
    </benefits-item>
    <benefits-item
      title="Work-Life Balance"
      text="We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."
    >
      <InboxStackIcon />
    </benefits-item>
  </div>
</template>

<style scoped lang="scss">
.benefits-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 100px;
}
</style>

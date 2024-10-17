<script setup lang="ts">
import MissionFirstImage from '@/assets/img/mission-first.jpg'
import MissionSecondImage from '@/assets/img/mission-second.jpg'
import MissionImageItem from "@/components/about/mission/MissionImageItem.vue";
import MissionItem from "@/components/about/mission/MissionItem.vue";

const text1 = "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams."
const text2 = "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction."

</script>

<template>
  <div class="mission">
    <div class="mission-inner">
      <MissionImageItem :source="MissionFirstImage"/>
      <MissionItem :text=text1 title="Mission"/>
    </div>
    <div class="mission-inner absolute bottom-0">
      <MissionItem :text=text2 title="Vision"/>
      <MissionImageItem :source="MissionSecondImage"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.mission {
  height: 1150px;
  position: relative;
}

.mission-inner {
  display: flex;
  align-items: center;
}

</style>

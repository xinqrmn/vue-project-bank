<script setup lang="ts">
import ControlFace from "@/components/ControlFace.vue"
import {ref} from "vue";
import useReviews from "@/store/modules/reviews";

const reviews = useReviews()


</script>

<template>
  <div class="reviews-top flex justify-between items-end mb-24">
    <div class="w-3/4">
      <h3 class="title">Our <span class="text-primary">Testimonials</span></h3>
      <p class=" w-3/4">Experience a host of powerful features at YourBank, including seamless online banking,
        secure
        transactions, and personalized financial insights, all designed to enhance your banking experience</p>
    </div>

    <ControlFace :boolean-variable="reviews.isInd" :click-func="reviews.changeCat"></ControlFace>
  </div>
</template>

<style scoped lang="scss">

</style>

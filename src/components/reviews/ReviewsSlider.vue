<script setup lang="ts">
import useReviews from "@/store/modules/reviews"
import {Swiper, SwiperSlide} from "swiper/vue"
import ReviewsIcon from "@/assets/img/reviews-logo.svg"
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = useReviews()
</script>

<template>
  <div class="reviews-bottom">
    <swiper
        class="review-slider flex justify-between items-center"
        :slides-per-view="3"
        :space-between="120"
        navigation
        loop
    >
      <swiper-slide
          v-for="review in reviews.filteredReviews"
          :key="review.key"
      >
        <div class="review-card w-full flex flex-col justify-between items-center gap-14">
          <div class="review-quote">
            <img :src="ReviewsIcon" alt="reviews logo">
          </div>
          <p>{{ review.text }}</p>
          <h4 class="text-primary">{{ review.author }}</h4>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.reviews-bottom {
  width: 100%;
  position: relative;

}

.review-slider {
  padding: 0 120px;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  overflow: hidden;

  &.swiper {
    position: initial;
  }

  .swiper-wrapper {
    transition: transform .3s ease;
  }

  .swiper-slide {
    width: calc(100% / 3); /* Контролируем ширину слайдов */
    margin-right: 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: block;
    width: 50px;
    height: 50px;
    border: 1px solid $color-grey-15;
    background-color: $color-grey-10;
    border-radius: 50%;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-family: inherit;
    font-size: 0;
    text-transform: none;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }

  .swiper-button-next::before,
  .swiper-button-prev::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: $color-green-60;
  }
}

.swiper-slide {
  width: 33.3333%;
}

.review-card {

  p {
    text-align: center;
    font-weight: 400;
    color: $color-white;
  }

  h4 {
    font-weight: 500;
  }
}

.review-quote {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 35%;
    height: 1px;
    top: 50%;
    background-color: $color-grey-15;
  }

  &::after {
    right: 0;
  }

  &::before {
    left: 0;
  }
}

</style>

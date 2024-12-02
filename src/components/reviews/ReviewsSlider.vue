<script setup lang="ts">
import useReviews from '@/store/modules/reviews';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ReviewsIcon from '@/assets/img/reviews-logo.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';

const reviews = useReviews();
</script>

<template>
  <div class="reviews-bottom">
    <div class="reviews-backdrop--left"></div>
    <swiper
      class="review-slider flex justify-between items-center"
      :modules="[Navigation, Keyboard]"
      :slides-per-view="3"
      :space-between="120"
      navigation
      :keyboard="{ enabled: true, onlyInViewport: true }"
      loop
    >
      <swiper-slide v-for="review in reviews.filteredReviews" :key="review.key">
        <div
          class="review-card w-full flex flex-col justify-between items-center gap-14"
        >
          <div class="review-quote">
            <img :src="ReviewsIcon" alt="reviews logo" />
          </div>
          <p>{{ review.text }}</p>
          <h4 class="text-primary">{{ review.author }}</h4>
        </div>
      </swiper-slide>
    </swiper>
    <div class="reviews-backdrop--right"></div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.reviews-bottom {
  width: 100%;
  position: relative;
}

.reviews-backdrop--right,
.reviews-backdrop--left {
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  background: #191919;
  z-index: 12;
  pointer-events: none;
}

.reviews-backdrop--right {
  background: linear-gradient(270deg, #191919 30%, rgba(0, 0, 0, 0) 80%);
  right: -100px;
}
.reviews-backdrop--left {
  background: linear-gradient(90deg, #191919 30%, rgba(0, 0, 0, 0) 80%);
  left: -100px;
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
    transition: transform 0.3s ease;
  }

  .swiper-slide {
    width: calc(100% / 3); /* Контролируем ширину слайдов */
    margin-right: 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border: 1px solid $color-grey-15;
    background-color: $color-grey-10;
    border-radius: 50%;
    overflow: hidden;
    z-index: 333;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-next::before {
    margin: auto;
    background-image: url('@/assets/img/arrow-right-slider.svg');
  }

  .swiper-button-prev::before {
    margin: auto;
    background-image: url('@/assets/img/arrow-left-slider.svg');
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

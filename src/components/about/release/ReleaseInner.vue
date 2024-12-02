<script setup lang="ts">
import ReleaseItem from '@/components/about/release/ReleaseItem.vue';
import { useRelease } from '@/store/modules/release';

const { data } = useRelease();
</script>

<template>
  <div class="release-inner">
    <release-item
      v-for="item in data"
      :key="item.key"
      :title="item.title"
      :date="item.date"
      :image-path="item.imagePath"
      :location="item.location"
      :text="item.text"
    ></release-item>
  </div>
</template>

<style scoped lang="scss">
.release-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}
</style>

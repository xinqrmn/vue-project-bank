<script setup lang="ts">
import FeaturesItem from '@/components/home/features/FeaturesItem.vue';
import { useFeatures } from '@/store/modules/features';

const features = useFeatures();
const props = defineProps<{
  status: 'banking' | 'tools' | 'support';
}>();

const foundedFeature = features.data.find(
  (item) => item.status === props.status
);
</script>

<template>
  <div class="features-grid w-4/5">
    <features-item
      v-for="contentItem in foundedFeature.content"
      :content="contentItem"
      :key="contentItem.key"
    ></features-item>
  </div>
</template>

<style scoped lang="scss">
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
}
</style>

<script setup lang="ts">
import FeaturesControl from '@/components/home/features/FeaturesControl.vue';
import FeaturesView from '@/components/home/features/FeaturesView.vue';
import { useFeatures } from '@/store/modules/features';

const features = useFeatures();
</script>

<template>
  <div class="features-tabs">
    <FeaturesControl />
    <template v-if="features.status === 'banking'">
      <FeaturesView status="banking" />
    </template>
    <template v-if="features.status === 'tools'">
      <FeaturesView status="tools" />
    </template>
    <template v-if="features.status === 'support'">
      <FeaturesView status="support" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.features-tabs {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
</style>

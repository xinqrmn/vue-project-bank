<script setup lang="ts">
import MissionFirstImage from '@/assets/img/mission-first.jpg'
import MissionSecondImage from '@/assets/img/mission-second.jpg'
import MissionImageItem from "@/components/about/mission/MissionImageItem.vue";
</script>

<template>
  <MissionImageItem :source="MissionFirstImage"/>
  <MissionImageItem :source="MissionSecondImage"/>
</template>

<style scoped lang="scss">

</style>

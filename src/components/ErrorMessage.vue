<script setup lang="ts">
const props = defineProps<{ error: string | undefined }>();
</script>

<template>
  <span v-if="error">{{ props.error }}</span>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

span {
  font-size: 14px;
  color: $color-grey-40;
  border-bottom: 1px solid $color-grey-40;
}
</style>

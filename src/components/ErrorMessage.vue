<script setup lang="ts">
const props = defineProps<{ error: string | undefined }>();
</script>

<template>
  <span v-if="error">{{ props.error }}</span>
</template>

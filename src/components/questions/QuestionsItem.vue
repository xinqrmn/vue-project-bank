<script setup lang="ts">
import {IQuestions} from "@/store/types/interfaces";

const props = defineProps<{
  content: IQuestions
}>()
</script>

<template>
  <div class="questions-item">
    <h4>{{ props.content.question }}</h4>
    <p>{{ props.content.answer }}</p>
  </div>

</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.questions-item {
  padding: 50px;
  border-radius: 14px;
  border: 1px solid $color-grey-15;

  h4 {
    color: $color-white;
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid $color-grey-15;
  }
}
</style>

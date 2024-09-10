<script setup lang="ts">
import QuestionsItem from "@/components/home/questions/QuestionsItem.vue";
import {useQuestions} from "@/store/modules/questions";
import {ChevronDownIcon} from "@heroicons/vue/24/solid";
import {computed, ref} from "vue";

const questions = useQuestions()
const isExpanded = ref(false)

const visibleQuestions = computed(() => isExpanded.value ? questions.data : questions.data.slice(0, 4))

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
<div class="questions-inner">
  <questions-item
    v-for="question in visibleQuestions"
    :key="question.key"
    :content="question"
  ></questions-item>
  <div v-if="!isExpanded" class="question-shadow"></div>
</div>
  <button :class="['expand-btn', {active: isExpanded}]" @click="toggleExpanded">
    {{ isExpanded ? 'Show Less ' : 'Load All FAQs' }}
    <ChevronDownIcon class="size-7"/>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.questions-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  position: relative;
  margin-bottom: 20px;

  .question-shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background: #191919;
    background: linear-gradient(0deg, #191919 0%, rgba(0,0,0,0) 100%);
  }
}

.expand-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: $color-white;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 18px 24px;
  background-color: $color-grey-11;
  border-radius: 77px;
  border: 1px solid $color-grey-15;
  margin: 0 auto;
  outline: none;

  svg {
    transition: all .3s;
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
}
</style>

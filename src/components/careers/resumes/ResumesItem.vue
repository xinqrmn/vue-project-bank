<script setup lang="ts">
import {IResumesProps} from "@/store/types/interfaces";
import {BriefcaseIcon} from "@heroicons/vue/24/solid";

const props = defineProps<IResumesProps>()

</script>

<template>
  <div class="resumes-item p-12">
    <div>
      <h5 class="mb-4">{{ props.title }}</h5>
      <p class="flex gap-3 mb-12">
        <span class="resumes-bubble">Location: {{ props.location }}</span>
        <span class="resumes-bubble">Department: {{ props.department }}</span>
      </p>
    </div>

    <div>
      <h5
          class="mb-5"
      >About This Job</h5>
      <p class="mb-10">{{ props.about }}</p>
    </div>

    <div>
      <h5 class="mb-5">Requirements & Qualifications</h5>
      <ul class=" mb-12">
        <li
            v-for="item in props.requirement"
            :key="item.key"
            class="resumes-requirement flex gap-3 items-center"
        >
          <div class="">
            <BriefcaseIcon class="size-7"/>
          </div>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>

    <button class="btn font-bold">Apply Now</button>
  </div>

</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.resumes-item {
  border-radius: 16px;
  background-color: $color-grey-11;
  border: 1px solid $color-grey-15;
  width: 49%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  &.btn {
    display: block;
  }

  h5 {
    color: $color-white;
    font-weight: 600;
    font-size: 24px;
  }
}

.resumes-bubble {
  padding: 8px 16px;
  border-radius: 77px;
  border: 1px solid $color-grey-15;
}

.resumes-requirement:not(:last-child) {
  margin-bottom: 20px;
}

</style>

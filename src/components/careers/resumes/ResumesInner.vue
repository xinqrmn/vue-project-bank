<script setup lang="ts">
import { useResumes } from '@/store/modules/resumes';
import ResumesItem from '@/components/careers/resumes/ResumesItem.vue';

const resumes = useResumes();
</script>

<template>
  <div class="resumes-inner flex flex-wrap gap-7 justify-between w-full">
    <resumes-item
      v-for="resume in resumes.data"
      :key="resume.key"
      :title="resume.title"
      :about="resume.about"
      :location="resume.location"
      :department="resume.department"
      :requirement="resume.requirement"
    ></resumes-item>
  </div>
</template>

<style scoped lang="scss"></style>

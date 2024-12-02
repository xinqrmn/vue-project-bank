import { defineStore } from 'pinia';
import { releaseData as data } from '@/store/data/releaseData';

export const useRelease = defineStore('release', () => {
  return {
    data,
  };
});

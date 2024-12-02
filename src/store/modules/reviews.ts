import { defineStore } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import { reviewsData as reviews } from '@/store/data/reviewsData';

const useReviews = defineStore('reviews', () => {
  const isInd = ref(true);
  const cat = ref<'individuals' | 'businesses'>('individuals');

  const loadCat = () => {
    try {
      const savedCat = localStorage.getItem('cat');
      if (savedCat !== null) cat.value = JSON.parse(savedCat);
    } catch (e) {
      console.error('Error loading category from localStorage', e);
    }
  };

  const saveTask = () => {
    try {
      localStorage.setItem('cat', JSON.stringify(cat.value));
    } catch (e) {
      console.error('Error saving category from localStorage', e);
    }
  };

  onMounted(() => loadCat());

  const changeCat = () => {
    if (isInd.value) {
      cat.value = 'individuals';
      isInd.value = !isInd.value;
    } else if (!isInd.value) {
      cat.value = 'businesses';
      isInd.value = !isInd.value;
    }
    saveTask();
  };

  const filteredReviews = computed(() =>
    reviews.value.filter((item) => item.category === cat.value)
  );

  return {
    changeCat,
    filteredReviews,
    isInd,
  };
});

export default useReviews;

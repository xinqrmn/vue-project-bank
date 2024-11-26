<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  errorMessage: {
    type: String,
    required: true,
  },
});

const errorMessage = ref(props.errorMessage);

watch(() => props.errorMessage, (newMessage) => {
  errorMessage.value = newMessage;
  setTimeout(() => {
    errorMessage.value = '';
  }, 3000);
});
</script>

<template>
  <transition name="fade">
    <div v-if="errorMessage" class="error-modal">
      <div class="error-modal__content">
        <span>{{ errorMessage }}</span>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.error-modal {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.error-modal__content {
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  successMessage: {
    type: String,
    required: true,
  },
});

const successMessage = ref(props.successMessage);

watch(() => props.successMessage, (newMessage) => {
  successMessage.value = newMessage;
  setTimeout(() => {
    successMessage.value = '';
  }, 3000);
});
</script>

<template>
  <transition name="fade">
    <div v-if="successMessage" class="success-modal">
      <div class="success-modal__content">
        <span>{{ successMessage }}</span>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.success-modal {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.success-modal__content {
  background-color: rgba(0, 255, 0, 0.8);
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

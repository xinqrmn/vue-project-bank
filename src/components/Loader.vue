<script setup lang="ts"></script>

<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #caff33;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

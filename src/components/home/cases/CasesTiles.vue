<script setup lang="ts">
import CasesTile from '@/components/home/cases/CasesTile.vue';
import DecorTopLeft from '@/assets/img/decor-center.png';
import DecorTopRight from '@/assets/img/decor-right-top.png';

interface IProps {
  imagePos: string;
  titles: Array<string>;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="grid-tale">
    <img
      :class="[
        'tale-decor',
        props.imagePos === 'top-left' ? 'top-left' : 'top-right',
      ]"
      :src="props.imagePos === 'top-left' ? DecorTopLeft : DecorTopRight"
      alt="decor-left-top"
    />
    <cases-tile :title="titles[0]">
      <template v-slot:default>
        <slot></slot>
      </template>
    </cases-tile>
    <cases-tile :title="titles[1]">
      <template v-slot:default>
        <slot name="second-icon"></slot>
      </template>
    </cases-tile>
    <cases-tile :title="titles[2]">
      <template v-slot:default>
        <slot name="third-icon"></slot>
      </template>
    </cases-tile>
    <cases-tile :title="titles[3]">
      <template v-slot:default>
        <slot name="fourth-icon"></slot>
      </template>
    </cases-tile>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.grid-tale {
  position: relative;
  background-color: $color-grey-11;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 50px;
  text-align: center;

  .tale-decor {
    position: absolute;
    top: 0;
    object-fit: cover;
    z-index: 1;

    &.top-left {
      left: 0;
    }
    &.top-right {
      right: 0;
    }
  }
}
</style>

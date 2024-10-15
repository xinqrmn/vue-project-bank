<script setup lang="ts">

import ValuesItem from "@/components/careers/values/ValuesItem.vue";
import {useValues} from "@/store/modules/values";

const values = useValues()

</script>

<template>
  <div class="values-inner flex flex-wrap gap-20 justify-between">
    <values-item
      v-for="item in values.values"
      :key=item.key
      :title="item.title"
      :text="item.text"
    >
    </values-item>
  </div>
</template>

<style scoped lang="scss">

</style>

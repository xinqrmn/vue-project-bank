<script setup lang="ts">
import {computed} from "vue"
import {useRoute} from "vue-router"
import MainLayout from "@/layout/MainLayout.vue"
import AuthLayout from "@/layout/AuthLayout.vue"

type LayoutKey = 'main' | 'auth'

const route = useRoute()

const layout = computed(() => route.meta.layout as LayoutKey | undefined)

const layoutComponents = {
  main: MainLayout,
  auth: AuthLayout
};

</script>

<template>
  <component :is="layoutComponents[layout]" v-if="layout" />
</template>

<style lang="scss">


</style>

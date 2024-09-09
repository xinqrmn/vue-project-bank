<script setup lang="ts">
import CasesInfo from "@/components/home/cases/CasesInfo.vue"
import CasesTiles from "@/components/home/cases/CasesTiles.vue"
import {UserPlusIcon, ShieldCheckIcon, BuildingLibraryIcon, BookOpenIcon, BuildingOffice2Icon, BanknotesIcon, PresentationChartBarIcon, CurrencyDollarIcon} from '@heroicons/vue/24/solid'
import {useCases} from "@/store/modules/cases"

const cases = useCases()

</script>

<template>
  <div class="cases-grid">
    <cases-tiles image-pos="top-left" :titles="cases.titles1">
      <UserPlusIcon/>
      <template v-slot:second-icon>
        <ShieldCheckIcon/>
      </template>
      <template v-slot:third-icon>
        <BuildingLibraryIcon/>
      </template>
      <template v-slot:fourth-icon>
        <BookOpenIcon/>
      </template>
    </cases-tiles>
    <cases-info :caseInfo="cases.casesInfo1"></cases-info>
    <cases-info :caseInfo="cases.casesInfo2"></cases-info>
    <cases-tiles image-pos="top-right" :titles="cases.titles2">
      <BuildingOffice2Icon/>
      <template v-slot:second-icon>
        <BanknotesIcon/>
      </template>
      <template v-slot:third-icon>
        <PresentationChartBarIcon/>
      </template>
      <template v-slot:fourth-icon>
        <CurrencyDollarIcon/>
      </template>
    </cases-tiles>
  </div>
</template>

<style scoped lang="scss">
.cases-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 60px;
}
</style>

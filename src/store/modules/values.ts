import {defineStore} from "pinia";
import {valuesData as values} from "@/store/data/valuesData";

export const useValues = defineStore('values', () => {
  return { values };
})

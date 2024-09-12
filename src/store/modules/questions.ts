import {defineStore} from "pinia";
import {questionsData as data} from "@/store/data/questionsData";

export const useQuestions = defineStore('questions', () => {

  return {
    data
  }
})

import {defineStore} from "pinia";
import {resumesData as data} from "@/store/data/resumesData";

export const useResumes = defineStore('resumes', () => {
  return {
    data
  }
})

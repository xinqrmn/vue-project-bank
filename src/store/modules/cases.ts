import {defineStore} from "pinia";
import {casesInfo1, casesInfo2} from "@/store/data/casesData";

const titles1 = ["Managing Personal Finances", "Saving for the Future", "Homeownership", "Education Funding"];
const titles2 = ["Startups and Entrepreneurs", "Cash Flow Management", "Business Expansion", "Payment Solutions"];

export const useCases = defineStore('cases', () => {

  return {
    titles1,
    titles2,
    casesInfo1,
    casesInfo2
  }
})

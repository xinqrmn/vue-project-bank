import {defineStore} from "pinia"
import {ref} from "vue"
import axios from "axios"

import flagUsa from '@/assets/img/flags/flag-of-usa.png'
import flagRussian from '@/assets/img/flags/flag-of-russian.png'
import flagIndia from '@/assets/img/flags/flag-of-india.png'
import flagEuro from '@/assets/img/flags/flag-of-euro.jpg'
import flagBritish from '@/assets/img/flags/flag-of-british.png'
import flagTurkish from '@/assets/img/flags/flag-of-turkish.png'
import {transactions} from "@/store/data/transactionsData";

const API_KEY = process.env.VUE_APP_EXCHANGE_KEY

interface ICurrency {
  [key: string]: number
}

interface ICurrencies {
  code: string
  name: string
  flag: string
}

const currencies = ref<ICurrencies[]>([
  {code: 'USD', name: 'United States Dollar', flag: flagUsa},
  {code: 'RUB', name: 'Russian rouble', flag: flagRussian},
  {code: 'INR', name: 'Indian Rupees', flag: flagIndia},
  {code: 'EUR', name: 'European Union', flag: flagEuro},
  {code: 'GBP', name: 'Great Britain Pound', flag: flagBritish},
  {code: 'TRY', name: 'Turkish Lira', flag: flagTurkish},
])

export const useCurrency = defineStore('currency', () => {
  const currencyFrom = ref('INR')
  const currencyTo = ref('USD')
  const amountFrom = ref(5.000)
  const exchangeRes = ref(0)


  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currencyFrom.value}/${currencyTo.value}/${amountFrom.value}`)
      console.log(response.data.conversion_result)
      exchangeRes.value = response.data.conversion_result
      transactions.value.push({
        id: Date.now().toLocaleString(),
        name: 'Test',
        amount: Number(exchangeRes.value.toFixed(2)),
        type: 'income'
      })
      console.log(transactions.value)
    } catch (e) {
      console.error('Ошибка при получении курса обмена: ', e)
    }
  }

  return {
    currencyFrom,
    currencyTo,
    amountFrom,
    exchangeRes,
    fetchExchangeRate,
    currencies
  }
})

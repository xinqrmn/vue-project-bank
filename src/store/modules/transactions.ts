import {defineStore} from "pinia"
import {ref, computed} from 'vue'
import axios from "axios"

export interface Transaction {
  id: string
  name: string
  amount: number
  type: 'income' | 'expense'
}

export const useTransactions = defineStore('transactions', () => {
  const transactions = ref<Transaction[]>([
    {id: 'asd1j3n1jk2n31k', name: 'Lenden Royeck', amount: 10000, type: 'expense'},
    {id: 'asd1j3n1jk2n32k', name: 'Joel Gording', amount: 199, type: 'income'},
    {id: 'asd1j3n1jk2n33k', name: 'Joel Delphins', amount: 999, type: 'income'},
    {id: 'asd1j3n1jk2n34k', name: 'Mark Smith', amount: 99, type: 'income'},
    {id: 'asd1j3n1jk2n35k', name: 'Oleg Rocko', amount: 59, type: 'income'},
    {id: 'asd1j3n1jk2n36k', name: 'Lenen Roy', amount: 255, type: 'expense'},
    {id: 'asd1j3n1jk2n37k', name: 'Rosso Doc', amount: 199, type: 'income'}
  ])

  const lastThreeTransactions = computed(() => transactions.value.slice(-3).reverse())

  const fetchTransactions = async () => {
    try {
      const data = await axios.get(`https://vue-pet-bank-default-rtdb.firebaseio.com/transactions.json`)
      console.log(data)
    } catch (error) {
      console.error('Ошибка получения данных:', error)
    }
  }

  return {
    transactions,
    lastThreeTransactions,
    fetchTransactions,
  }
})

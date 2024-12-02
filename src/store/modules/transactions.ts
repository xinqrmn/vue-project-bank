import { defineStore } from 'pinia';
import { computed } from 'vue';
import axios from 'axios';
import { transactions } from '@/store/data/transactionsData';

export const useTransactions = defineStore('transactions', () => {
  const lastThreeTransactions = computed(() =>
    transactions.value.slice(-3).reverse()
  );

  const fetchTransactions = async () => {
    try {
      const data = await axios.get(
        `https://vue-pet-bank-default-rtdb.firebaseio.com/transactions.json`
      );
      console.log(data);
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    }
  };

  return {
    transactions,
    lastThreeTransactions,
    fetchTransactions,
  };
});

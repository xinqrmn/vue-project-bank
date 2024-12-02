import { ref } from 'vue';
import { ITransaction } from '@/store/types/interfaces';

export const transactions = ref<ITransaction[]>([
  {
    id: 'asd1j3n1jk2n31k',
    name: 'Lenden Royeck',
    amount: 10000,
    type: 'expense',
  },
  { id: 'asd1j3n1jk2n32k', name: 'Joel Gording', amount: 199, type: 'income' },
  { id: 'asd1j3n1jk2n33k', name: 'Joel Delphins', amount: 999, type: 'income' },
  { id: 'asd1j3n1jk2n34k', name: 'Mark Smith', amount: 99, type: 'income' },
  { id: 'asd1j3n1jk2n35k', name: 'Oleg Rocko', amount: 59, type: 'income' },
  { id: 'asd1j3n1jk2n36k', name: 'Lenen Roy', amount: 255, type: 'expense' },
  { id: 'asd1j3n1jk2n37k', name: 'Rosso Doc', amount: 199, type: 'income' },
]);

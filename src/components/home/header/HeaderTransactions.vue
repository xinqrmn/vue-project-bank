<script setup lang="ts">
import {useTransactions} from "@/store/modules/transactions";
import {onMounted, ref} from "vue"
import {ArrowsRightLeftIcon} from '@heroicons/vue/24/solid'

export interface Transaction {
  id: string
  name: string
  amount: number
  type: 'income' | 'expense'
}

const transactionsStore = useTransactions()
const transactionsList = ref<Transaction[]>([])
const lastTransaction = transactionsStore.lastThreeTransactions

function getTransactionStyle(index: number) {
  const scale = 1 - index * 0.1
  const translateY = index * 62
  const opacity = 1 - index * 0.3

  return {
    transform: `scale(${scale}) translateY(${translateY}px)`,
    opacity: opacity,
    zIndex: 10 - index,
  };
}

onMounted(() => {
  transactionsList.value = lastTransaction
})

</script>

<template>
  <div class="transaction-block">
    <h3 class="mb-4">Your Transactions</h3>
    <div class="transactions-list">
      <div
          class="transaction-item"
          v-for="(trans, idx) in transactionsList"
          :key="trans.id"
          :style="getTransactionStyle(idx)"
      >
        <div class="icon-wrapper">
          <div class="transaction-icon">
            <ArrowsRightLeftIcon class="inline size-6 text-black text-center" />
          </div>
        </div>
        <div class="transaction-details">
          <span class="transaction-title">Transaction</span>
          <span class="transaction-name">{{ trans.name }}</span>
        </div>
        <div class="transaction-amount" :class="{ negative: trans.amount < 0 }">
          {{ trans.type === 'income' ? '+' : '-' }}${{ Math.abs(trans.amount).toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';


.transaction-block {
  //padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 185px;
  color: white;
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative; /* Для правильного позиционирования */
}

.transaction-item {
  display: flex;
  align-items: center;
  background-color: $color-grey-11;
  border-radius: 10px;
  border: 1px solid $color-grey-15;
  padding: 15px 20px;
  position: absolute; /* Абсолютное позиционирование для наложения элементов */
  width: 100%;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: $color-green-60;
  border-radius: 50%;
  margin-right: 10px;
}

.transaction-icon {
  font-size: 18px;
}

.transaction-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.transaction-title {
  font-size: 16px;
  color: $color-white;
}

.transaction-name {
  font-size: 18px;
  font-weight: 400;
  color: $color-white;
}

.transaction-amount {
  margin-top: auto;
  margin-left: auto;
  font-size: 21px;
  font-weight: 500;
}

.negative {
  color: #ff4d4d; /* Красный цвет для отрицательных значений */
}
</style>

<script setup lang="ts">
import {onMounted, computed, ref} from 'vue'
import {useCurrency} from "@/store/modules/currency";

const currencyStore = useCurrency()

onMounted(() => {
  // currencyStore.fetchExchangeRate()
})

interface ICurrencies {
  code: string
  name: string
  flag: string
}

const amountTo = computed(() => currencyStore.exchangeRes.toFixed(2))
const showDropdownFrom = ref(false)
const showDropdownTo = ref(false)
const imagePathFrom = ref(require('@/assets/img/flags/flag-of-india.png'))
const imagePathTo = ref(require('@/assets/img/flags/flag-of-usa.png'))


const openDropdownFrom = () => showDropdownFrom.value = true
const closeDropdownFrom = () => showDropdownFrom.value = false
const openDropdownTo = () => showDropdownTo.value = true
const closeDropdownTo = () => showDropdownTo.value = false

const selectCurrencyFrom = (currency: ICurrencies) => {
  currencyStore.currencyFrom = currency.code
  imagePathFrom.value = currency.flag
  showDropdownFrom.value = false
}

const selectCurrencyTo = (currency: ICurrencies) => {
  currencyStore.currencyTo = currency.code
  imagePathTo.value = currency.flag
  showDropdownTo.value = false
}

</script>

<template>
  <div class="money-exchange">
    <h3 class="mb-4 text-white">Money Exchange</h3>
    <div class="exchange-container overflow-visible">
      <div class="currency-block left">
        <div class="currency-header">

          <div class="custom-select" @mouseleave="closeDropdownFrom">
            <div class="selected-option" @mouseenter="openDropdownFrom" >
              <img
                  class="mr-1.5"
                  :src="imagePathFrom"
                  alt="flag">
              <span>{{ currencyStore.currencyFrom }}</span>
              <span :class="{active: showDropdownFrom}" class="arrow">&#9660;</span>
            </div>
            <ul v-if="showDropdownFrom" class="dropdown">
              <li
                  v-for="currency in currencyStore.currencies"
                  :key="currency.code"
                  @click="selectCurrencyFrom(currency)"
                  class="dropdown-option"
              >
                <img class="mr-1" :src="currency.flag" :alt="currency.name">
                <span>{{ currency.code }}</span>
              </li>
            </ul>
          </div>
        </div>
        <input class="currency-amount" type="number" v-model="currencyStore.amountFrom" :placeholder="currencyStore.amountFrom === '' ? 0 : currencyStore.amountFrom" />
      </div>

      <div class="currency-block right">
        <div class="currency-header">

          <div class="custom-select" @mouseleave="closeDropdownTo">
            <div class="selected-option" @mouseenter="openDropdownTo">
              <img
                  class="mr-1.5"
                  :src="imagePathTo"
                  :alt="currencyStore.currencies.find(c => c.code === currencyStore.currencyTo)?.name || 'Flag'">
              <span>{{ currencyStore.currencyTo }}</span>
              <span :class="{active: showDropdownTo}" class="arrow">&#9660;</span>
            </div>
            <ul v-if="showDropdownTo" class="dropdown">
              <li
                  v-for="currency in currencyStore.currencies"
                  :key="currency.code"
                  @click="selectCurrencyTo(currency)"
                  class="dropdown-option"
              >
                <img class="mr-1" :src="currency.flag" :alt="currency.name">
                <span>{{ currency.code }}</span>
              </li>
            </ul>
          </div>
        </div>
        <input class="currency-amount" type="number" v-model="amountTo" placeholder="amountTo" disabled/>
      </div>
    </div>
    <button class="exchange-button" @click="currencyStore.fetchExchangeRate()">Exchange</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.money-exchange-block {
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 350px;
}

h3 {
  margin-bottom: 20px;
}

.exchange-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border: 1px solid $color-grey-15;
  background-color: $color-grey-11;
  border-radius: 10px;
  overflow: visible;
}

.currency-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  text-align: center;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[disabled] {
    cursor: text;
  }
}

.currency-block.left {
  border-right: 1px solid $color-grey-15;
}

.currency-header {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 18px;
}

.selected-option {

  img {
    display: block;
    width: 35px;
    height: 35px;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
  }
}

.currency-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.currency-flag {
  width: 35px;
  height: 35px;
}

.currency-details {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.currency-code {
  font-size: 16px;
  font-weight: 400;
  color: $color-white;
}

.currency-name {
  font-size: 14px;
  color: $color-white-90;
}

.currency-amount {
  font-size: 18px;
  font-weight: 500;
  color: $color-white;
  width: 100%;
  border-top: 1px solid $color-grey-15;
  padding: 25px 18px;
  text-align: left;
  background: transparent;
  outline: none;

  &::placeholder {
    color: $color-white;
  }

}

.exchange-button {
  width: 100%;
  padding: 13px;
  background-color: #22251B;
  color: $color-green-65;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-radius: 75px;
  cursor: pointer;
  transition: all 0.3s;
}

.exchange-button:hover {
  background-color: $color-green-65;
  color: $color-black;
}

.custom-select {
  position: relative;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  background-color: $color-grey-15;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flag {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.arrow {
  margin-left: auto;
  font-size: 12px;
  transition: all .2s;
}

.arrow.active {
  transform: rotate(-180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: $color-grey-15;
  border-radius: 8px;
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: $color-grey-10 transparent;
}

.dropdown::-webkit-scrollbar {
  width: 4px;
}

.dropdown::-webkit-scrollbar-thumb {
  background-color: $color-grey-15;
  border-radius: 4px;
}

.dropdown::-webkit-scrollbar-track {
  background-color: $color-grey-10;
}

.dropdown-option {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  img {
    display: block;
    width: 25px;
    height: 25px;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
  }
}

.dropdown-option:hover {
  background-color: $color-grey-20;
}

.currency-code {
  margin-left: 10px;
  font-weight: bold;
}

.currency-name {
  margin-left: auto;
  font-size: 12px;
  color: #aaa;
}

.currency-flag {
  width: 35px;
  height: 35px;
}
</style>

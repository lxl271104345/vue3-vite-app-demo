<template>
  <div class="login">
    <h2>login: {{ counterStore.count }}</h2>

    <h2>doubleCount:{{ doubleCount }}</h2>

    <button @click="handleAddAction">加++</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useCounterStore from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)

// console.log(counterStore.hello)

function handleAddAction() {
  counterStore.increment()
}
</script>

<style lang="less" scoped>
.login {
  color: red;
}
</style>

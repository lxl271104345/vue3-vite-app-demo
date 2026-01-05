<template>
  <div class="main">
    <h2>main: {{ counterStore.doubleCount }}</h2>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>

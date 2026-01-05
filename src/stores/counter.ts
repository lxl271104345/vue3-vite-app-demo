import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export default useCounterStore

//
// const useCounterStore = defineStore('counter', {
// state: () => ({
// count: 0
// }),
// getters: {
// doubleCount(state) {
// return state.count * 2
// }
// },
// actions: {
// increment() {
// this.count++
// }
// }
// })
//
// export default useCounterStore

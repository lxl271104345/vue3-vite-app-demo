import { createPinia } from 'pinia'

function createArgs() {
  return { hello: 'hello' }
}

const pinia = createPinia()

pinia.use(createArgs)

export default pinia

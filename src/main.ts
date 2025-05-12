import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ErrorStackParser from 'error-stack-parser';
import findCodeBySourceMap from './utils/index';

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  const errorStack = ErrorStackParser.parse(err as Error);
  findCodeBySourceMap(errorStack[0])
  console.error('Error Stack:', errorStack)
}
app.mount('#app')

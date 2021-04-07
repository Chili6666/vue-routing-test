import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { stateSymbol, createState } from './store'

console.log("loading main.ts");

createApp(App)
  .provide(stateSymbol, createState())
  .use(router)
  .mount('#app')

//createApp(App).use(router).mount("#app");

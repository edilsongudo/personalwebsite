import { createApp } from "vue";
import './style.css';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueGtag from 'vue-gtag';

const app = createApp(App);

app.use(store)
app.use(router)

app.use(VueGtag, {
    config: { id: 'G-0KJ22BKNY6' },
    router,
    // enabled: false,
});
  
app.mount("#app");

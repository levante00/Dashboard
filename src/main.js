import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import './style.css'
import App from './App.vue'
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App)
app.component('BaseCard', BaseCard);
app.use(VueApexCharts);
app.mount('#app')

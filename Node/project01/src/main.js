import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from '@/components/flagment/PageTitle.vue'
// import ChildComponent from '@/components/flagment/ChildComponent.vue'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.component('PageTitle',PageTitle)
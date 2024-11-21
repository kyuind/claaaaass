import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from '@/components/flagment/PageTitle.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import i18n from '@/plugins/i18n'
// import ChildComponent from '@/components/flagment/ChildComponent.vue'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.component('PageTitle',PageTitle)
app.use(i18n)
window.Kakao.init('1e5635d84c3cf050ae691d57c6ea7420')
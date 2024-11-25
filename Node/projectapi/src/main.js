import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useKakao } from 'vue3-kakao-maps'

useKakao('1e5635d84c3cf050ae691d57c6ea7420')
createApp(App).use(store).use(router).mount('#app')

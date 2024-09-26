import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {createPinia} from 'pinia'
import {fas} from "@fortawesome/free-solid-svg-icons"
library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')

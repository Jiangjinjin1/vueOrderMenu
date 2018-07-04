import 'babel-polyfill'
import Vue from 'vue'
import { Button, Message } from 'element-ui'
import router from './router'
import './style/main.css'
import './config/rem'
import store from './store/index'
import App from './App'

const UIComponents = [
  Button
]
for (let i = 0, len = UIComponents.length; i < len; i++) {
  Vue.component(UIComponents[i].name, UIComponents[i])
}
Vue.prototype.$message = Message

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')

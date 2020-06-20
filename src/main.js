import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as io from 'socket.io-client';

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

const socket = io.connect('http://localhost:4000')
socket.emit('test',{
  data : 'value'
})
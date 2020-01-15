import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

<script>
var selection-group = new Vue({
  el: '#app',
  data: {
  	radioValue: ''
  }
})
</script>
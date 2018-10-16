import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import Vue2Filters from 'vue2-filters'
import money from 'v-money'

/* Constants disponíveis para aplicação inteira */ 
Vue.prototype.$loanRates = 150.00
Vue.prototype.$intRate = 2.4
Vue.prototype.$iof = 3
Vue.prototype.$iofPerDay = 0.0082
// Vue.prototype.$http = axios // Instalar

Vue.use(Vuetify)
Vue.use(Vue2Filters)
Vue.use(money, {precision: 4})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
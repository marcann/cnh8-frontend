import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App.vue'
import CreateTodo from './components/CreateTodo'
import ListTodo from './components/ListTodo'
import HelloWorld from './components/HelloWorld'


Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.config.productionTip = false

// ROUTING
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/list', component: ListTodo },
  { path: '/create', component: CreateTodo }
]

const router = new VueRouter({
  routes // short for 'routes: routes'
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

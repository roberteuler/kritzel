import Vue from 'vue'
import App from './App.vue'
import VueMoment from "vue-moment";
import VueRouter from 'vue-router'
import routes from './router'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueMoment);


const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

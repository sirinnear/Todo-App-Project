import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

// import '@/assets/style.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');

import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');

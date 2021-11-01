import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneAlt, faLock, faKey, faDoorClosed, faTools, faMapMarkedAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as VueGoogleMaps from 'vue2-google-maps';

library.add(faPhoneAlt, faLock, faKey, faDoorClosed, faTools, faMapMarkedAlt, faEnvelope, faClock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAX-H7y1Jz-LWc7d-uC8BD9bEhvtJok2mI",
    libraries: "places"
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

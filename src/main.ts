import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.vuex'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import firebaseConfig from '@/config/firebase/FirebaseConfig'
import './registerRouteConfig'
import '@babel/polyfill'

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

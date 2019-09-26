import Vue from 'vue'
import Vuex from 'vuex'
import { extractVuexModule, createProxy } from 'vuex-class-component'
import { FilmeStore } from './Filme.vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(FilmeStore)
  }
})

export const vxm = {
  filme: createProxy(store, FilmeStore)
}

export default store

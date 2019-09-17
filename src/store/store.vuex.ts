import Vue from 'vue'
import Vuex from 'vuex'
import { extractVuexModule, createProxy } from 'vuex-class-component'
import { FilmeStore } from './Filme.vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(FilmeStore)
  }
})

const vxm = {
  filme: createProxy(store, FilmeStore)
}

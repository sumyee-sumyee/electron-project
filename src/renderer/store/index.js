import Vue from 'vue'
import Vuex from 'vuex'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { ipcRenderer } from 'electron';

import modules from './modules'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules,
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  strict: process.env.NODE_ENV !== 'production'
})

if(process.type==='renderer') {
  // 初始加载
  ipcRenderer.invoke('store-get', 'vuex').then(savedState => {
    if (savedState) store.replaceState(savedState)
  })

  // 监听变化并保存
  store.subscribe((mutation, state) => {
    ipcRenderer.invoke('store-set', 'vuex', state)
  })

}


export default store

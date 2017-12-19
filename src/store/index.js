/**
 * MIT
 *
 * @author Gabdrashitov Rinat <paladin2012gnu@gmail.com>
 *
 * Created at     : 2017-12-19
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    /* https://vuex.vuejs.org/en/strict.html */
    strict: process.env.NODE_ENV !== 'production'
  })
}

/**
 * MIT
 *
 * @author Gabdrashitov Rinat <paladin2012gnu@gmail.com>
 *
 * Created at     : 2017-12-19
 */
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export function createStore () {
  return {
    state,
    getters,
    actions,
    mutations
  }
}

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
	namespaced: true, // Set module name by import name
	state,
	actions,
	mutations,
	getters
}

import * as types from './types'
export default {
	[types.SET_POSTS] (state, posts) {
		state.posts = posts
	},
	[types.SET_POST] (state, post) {
		state.post = post
	}

}

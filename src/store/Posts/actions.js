import axios from 'axios'
import * as types from './types'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export default {
	async getPosts ({ commit, state }) {
		if (!state.posts.length) {
			const { data } = await axios.get(`${baseURL}/?_limit=10`)
			commit(types.SET_POSTS, data)
		}
	},

	async getSinglePost ({ commit, getters }, id) {
		const post = getters.singlePost(id)
		if (!post) {
			const { data } = await axios.get(`${baseURL}/${id}`)
			commit(types.SET_POST, data)
		} else {
			commit(types.SET_POST, post)
		}
	},

	createPost ({commit, getters, dispatch}, form) {
		return new Promise(async resolve => {
			const response = await axios.post(baseURL, form)
			await dispatch('getPosts')
			const updatedPosts = [...getters.posts, response.data]
			commit(types.SET_POSTS, updatedPosts)
			resolve(response)
		})
	},

	editPost ({commit, getters, dispatch}, form) {
		return new Promise(async resolve => {
			const formatedForm = {
				userId: getters.post.userId,
				...form
			}
			const response = await axios.patch(`${baseURL}/${form.id}`, formatedForm)

			await dispatch('getPosts')

			const updatedPosts = getters.posts.map(post => {
				if (post.id === response.data.id) {
					return response.data
				} else {
					return post
				}
			})

			commit(types.SET_POSTS, updatedPosts)
			commit(types.SET_POST, response.data)
			resolve(response)
		})
	}
}

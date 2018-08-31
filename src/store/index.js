import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export default {
	state: {
		posts: [],
		post: {}
	},
	actions: {
		async getPosts ({ commit, state }) {
			if (!state.posts.length) {
				const { data } = await axios.get(`${baseURL}/?_limit=10`)
				commit('setPosts', data)
			}
		},
		async getSinglePost ({ commit, getters }, id) {
			const post = getters.singlePost(id)
			if (!post) {
				const { data } = await axios.get(`${baseURL}/${id}`)
				commit('setPost', data)
			} else {
				commit('setPost', post)
			}
		},
		createPost ({commit, getters}, form) {
			return new Promise(async resolve => {
				const response = await axios.post(baseURL, form)
				const updatedPosts = [...getters.posts, response.data]
				commit('setPosts', updatedPosts)
				resolve(response)
			})
		}
	},
	mutations: {
		setPosts (state, posts) {
			state.posts = posts
		},
		setPost (state, post) {
			state.post = post
		}
	},
	getters: {
		posts: state => state.posts,
		post: state => state.post,
		singlePost: state => (id) => state.posts.filter(post => post.id === id)[0]
	}
}

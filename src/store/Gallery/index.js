import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com/photos'
const types = {
	SET_PHOTOS: 'SET_PHOTOS',
	SET_SORTBY: 'SET_SORTBY',
	SET_FILTER: 'SET_FILTER',
	SET_FILTER_TEXT: 'SET_FILTER_TEXT'
}

export default {
	namespaced: true,
	state: {
		photos: [],
		sortBy: false,
		filter: false,
		filterText: false
	},
	actions: {
		async getPhotos ({ commit }) {
			const { data } = await axios.get(`${baseURL}/?_limit=9`)
			const modData = data.map(photo => {
				return {
					id: photo.id,
					title: photo.title,
					image: photo.url,
					quality: Math.floor(Math.random() * Math.floor(10))
				}
			})
			commit(types.SET_PHOTOS, modData)
		},
		sortBy ({ commit }, key) {
			commit(types.SET_SORTBY, key)
		},
		filterBy ({ commit }, filter) {
			commit(types.SET_FILTER, filter)
		},
		filterByText ({ commit }, filter) {
			commit(types.SET_FILTER_TEXT, filter)
		},
		reset ({ commit }) {
			commit(types.SET_SORTBY, false)
			commit(types.SET_FILTER, false)
			commit(types.SET_FILTER_TEXT, false)
		}
	},
	mutations: {
		[types.SET_PHOTOS] (state, photos) {
			state.photos = photos
		},
		[types.SET_SORTBY] (state, key) {
			state.sortBy = key
		},
		[types.SET_FILTER] (state, filter) {
			state.filter = filter
		},
		[types.SET_FILTER_TEXT] (state, filter) {
			state.filterText = filter
		}
	},
	getters: {
		filterText: state => state.filterText.value,
		photos: state => {
			let photos = [...state.photos]

			if (state.filter) {
				photos = photos.filter(photo => photo[state.filter.key] > state.filter.value)
			}

			if (state.filterText) {
				photos = photos.filter(photo => photo[state.filterText.key].indexOf(state.filterText.value) !== -1)
			}
			
			if (state.sortBy !== '') {
				photos = photos.sort((item1, item2) => item1[state.sortBy] > item2[state.sortBy])
			}
			return photos
		}
	}
}

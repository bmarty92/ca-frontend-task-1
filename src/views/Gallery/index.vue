<template>
   <div class="view-gallery">
		<AppContainer v-if="photos.length">
			<AppColumn
				v-for="photo in photos"
				:key="photo.id"
			>
				<AppCard :data="photo"/>
			</AppColumn>
		</AppContainer>
		<h3 v-else>Loading...</h3>
   </div>
</template>
<script>
import AppContainer from '@/components/AppContainer'
import AppColumn from '@/components/AppColumn'
import AppCard from '@/components/AppCard'
export default {
	name: 'ViewGallery',
	components: {
		AppContainer,
		AppColumn,
		AppCard
	},
	computed: {
		photos () {
			return this.asyncData.map(record => {
				return {
					id: record.id,
					title: record.title,
					image: record.url
				}
			})
		}
	},
	data () {
		return {
			url: 'https://jsonplaceholder.typicode.com/photos/?_limit=18',
			asyncData: []
		}
	},
	created () {
		this.getPhotos()
	},
	methods: {
		async getPhotos () {
			const { data } = await this.axios.get(this.url)
			this.asyncData = data
		}
	}
}
</script>
<style lang="scss">
	.view-gallery {
		//
	}
</style>

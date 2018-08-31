<template>
   <div class="view-gallery">
		<div class="view-gallery__sorts">
			<AppButton
				class="view-gallery__sorts-button"
				@click.native="sortBy('id')"
			>
				Sort by Id
			</AppButton>
			<AppButton
				class="view-gallery__sorts-button"
				@click.native="sortBy('title')"
			>
				Sort by Title
			</AppButton>
			<AppButton
				class="view-gallery__sorts-button"
				@click.native="filterBy({ key: 'quality', value: 5 })"
			>
				Quality > 5
			</AppButton>
			<AppButton
				class="view-gallery__sorts-button"
				@click.native="filterBy({ key: 'id', value: 7 })"
			>
				Id > 7
			</AppButton>
			<AppButton
				class="view-gallery__sorts-button"
				@click.native="reset"
			>
				Reset
			</AppButton>
		</div>
		<AppTextField @input="filterByText({ key: 'title', value: $event })" v-model="filterText" label="Filter by title text"/>
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
import AppButton from '@/components/AppButton'
import AppTextField from '@/components/AppTextField'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'ViewGallery',
	components: {
		AppContainer,
		AppColumn,
		AppCard,
		AppButton,
		AppTextField
	},
	computed: {
		...mapGetters({
			photos: 'Gallery/photos',
			filterText: 'Gallery/filterText'
		})
	},
	created () {
		this.getPhotos()
	},
	methods: {
		...mapActions({
			getPhotos: 'Gallery/getPhotos',
			sortBy: 'Gallery/sortBy',
			filterBy: 'Gallery/filterBy',
			reset: 'Gallery/reset',
			filterByText: 'Gallery/filterByText'
		})
	}
}
</script>
<style lang="scss">
	.view-gallery {
		&__sorts {
			display: flex;
			margin: 0 -7.5px;
			padding-bottom: 15px;

			&-button {
				margin: 0 7.5px;
			}
		}
	}
</style>

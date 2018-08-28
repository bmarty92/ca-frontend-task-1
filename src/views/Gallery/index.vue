<template>
   <div class="view-gallery">
        <AppContainer v-if="photos.length !== 0">
            <AppColumn
                v-for="photo in photos"
                :key="photo.id"
            >
                <AppCard :data="{
                    title: photo.title,
                    image: photo.url
                }"/>
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
    data () {
        return {
            url: 'https://jsonplaceholder.typicode.com/photos/?_limit=18',
            photos: []
        }
    },
    created () {
        this.getPhotos()
    },
    methods: {
        async getPhotos () {
            const { data } = await this.axios.get(this.url)
            this.photos = data
        }
    }
}
</script>
<style lang="scss">
    .view-gallery {
        //
    }
</style>

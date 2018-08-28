<template>
    <div class="view-home">
        <AppContainer>
            <AppColumn
                v-for="(card, index) in cards"
                :key="index"
            >
                <AppCard :data="card"/>
            </AppColumn>
        </AppContainer>
    </div>
</template>
<script>
import AppContainer from '@/components/AppContainer'
import AppColumn from '@/components/AppColumn'
import AppCard from '@/components/AppCard'
export default {
    name: 'ViewHome',
    components: {
        AppContainer,
        AppColumn,
        AppCard
    },
    data () {
        return {
            cards: [
                {
                    title: 'Sign Up Page',
                    image: 'https://assets.materialup.com/uploads/c1e68d64-a864-4b36-bb37-391d36375072/attachment.png'
                },
                {
                    title: 'Order Trendz',
                    image: 'https://assets.materialup.com/uploads/3fcba5a4-5a7c-4648-9724-2c4324ea89a3/preview.jpg'
                },
                {
                    title: 'App Product Page',
                    image: 'https://assets.materialup.com/uploads/4566342f-c324-416b-9cc2-81559ea4baba/attachment.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .view-home {
        //
    }
</style>

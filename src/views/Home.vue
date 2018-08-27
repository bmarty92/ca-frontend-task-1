<template>
    <div class="view-home">
        <div class="view-home__container">
            <div
                v-for="(card, index) in cards"
                :key="index"
                class="view-home__col"
            >
                <AppCard
                    :data="card"
                />
            </div>
        </div>
    </div>
</template>
<script>
import AppCard from '@/components/AppCard'
export default {
    name: 'ViewHome',
    components: {
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
        &__container {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
        }

        &__col {
            padding: 15px;
            flex: 0 0 33%;
            min-width: 33%;
        }
    }
</style>

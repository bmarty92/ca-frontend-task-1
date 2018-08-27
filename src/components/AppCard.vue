<template>
    <div class="app-card">
        <img class="app-card__image" :src="data.image" alt="">
        <h2 class="app-card__title"> {{ data.title }}</h2>
    </div>
</template>
<script>
export default {
    name: 'AppCard',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss">
    .app-card {
        background-color: #3252E5;
        padding: 30px;

        &__image {
            width: 100%;
            max-height: 300px;
        }
        &__title {
            font-size: 18px;
            color: white;
            font-weight: normal;
            text-transform: uppercase;
            padding: 30px 0;
        }
    }
</style>

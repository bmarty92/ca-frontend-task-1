<template>
    <article class="post-box">
        <div class="post-box__id">
            #{{ data.id }}
        </div>
        <div class="post-box__content">
            <h2> {{ data.title }} </h2>
            <p> {{ data.body }} </p>
        </div>
    </article>
</template>
<script>
export default {
    name: 'PostsBox',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss">
    .post-box {
        display: flex;
        background-color: #f9f9f9;
        padding: 30px;
        border-radius: 4px;
        margin-bottom: 30px;
        box-shadow: 0 1px 2px 0 rgba(black, .15);

        &__id {
            display: flex;
            align-items: center;
            font-size: 28px;
            font-weight: bold;
            margin-right: 30px;
            color: #3252E5;
            border-right: 1px solid #3252E5;
            padding-right: 30px;
        }

        &__content {
            h2 {
                margin: 0;
                padding-bottom: 15px;
                font-size: 24px;
                font-weight: normal;
            }
            p {
                margin: 0;
                color: rgba(black, .51);
                font-size: 16px;
            }
        }
    }
</style>

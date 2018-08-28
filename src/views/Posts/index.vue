<template>
    <div class="view-posts">
        <template v-if="posts.length">
            <PostsBox
                v-for="post in posts"
                :key="post.id"
                :data="post"
            />
        </template>
        <h3 v-else>Loading...</h3>
    </div>
</template>
<script>
import PostsBox from './PostsBox'
export default {
    name: 'ViewPosts',
    components: {
        PostsBox
    },
    data () {
        return {
            url: 'https://jsonplaceholder.typicode.com/posts/?_limit=10',
            posts: []
        }
    },
    created () {
        this.getPosts()
    },
    methods: {
        async getPosts () {
            const { data } = await this.axios.get(this.url)
            this.posts = data
        }
    }
}
</script>

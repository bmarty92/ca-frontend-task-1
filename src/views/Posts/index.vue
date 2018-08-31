<template>
	<div class="view-posts">
		<template v-if="posts.length">
			<PostsBox
				v-for="post in posts"
				:key="post.id"
				:data="post"
				@click.native="$router.push({
					name: 'SinglePost',
					params: {
						id: post.id
					}
				})"
			/>
		</template>
		<h3 v-else>Loading...</h3>
	</div>
</template>
<script>
import PostsBox from '@/components/PostsBox'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'ViewPosts',
	components: {
		PostsBox
	},
	computed: {
		...mapGetters({
			posts: 'Posts/posts'
		})
	},
	created () {
		this.getPosts()
	},
	methods: {
		...mapActions({
			getPosts: 'Posts/getPosts'
		})
	}
}
</script>

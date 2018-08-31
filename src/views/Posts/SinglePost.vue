<template>
	<div class="view-single-post">
		<template v-if="post.id">
			<PostsBox
				:data="post"
			/>
			<AppButton @click.native="$router.push({
					name: 'EditPost',
					params: {
						id: post.id
					}
			})">
				Redaguoti
			</AppButton>
		</template>
		<h3 v-else>Loading...</h3>
	</div>
</template>
<script>
import AppButton from '@/components/AppButton'
import PostsBox from '@/components/PostsBox'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'ViewSinglePost',
	components: {
		AppButton,
		PostsBox
	},
	computed: {
		...mapGetters({
			post: 'Posts/post'
		})
	},
	created () {
		this.getSinglePost(this.$route.params.id)
	},
	methods: {
		...mapActions({
			getSinglePost: 'Posts/getSinglePost'
		})
	}
}
</script>

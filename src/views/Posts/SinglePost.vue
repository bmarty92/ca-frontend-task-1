<template>
	<div class="view-single-post">
		<template v-if="asyncData">
			<PostsBox
				:data="asyncData"
			/>
			<AppButton @click.native="$router.push({
					name: 'EditPost',
					params: {
						id: asyncData.id
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
export default {
	name: 'ViewSinglePost',
	components: {
		AppButton,
		PostsBox
	},
	data () {
		return {
			url: `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
			asyncData: false
		}
	},
	created () {
		this.getSinglePost()
	},
	methods: {
		async getSinglePost () {
			const { data } = await this.axios.get(this.url)
			this.asyncData = data
		}
	}
}
</script>

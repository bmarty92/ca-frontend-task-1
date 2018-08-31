<template>
	<div class="view-single-post">
		<template v-if="!success && !loading">
			<AppTextField
				class="view-create-post__input"
				label="Antraste"
				v-model="form.title"
			/>
			<AppTextarea
				class="view-create-post__textarea"
				label="Zinute"
				v-model="form.body"
			/>
			<AppButton @click.native="savePost"> Issaugoti </AppButton>
		</template>
		<template v-else-if="success">
			<PostsBox :data="post"/>
		</template>
		<h3 v-else>Loading...</h3>
	</div>
</template>
<script>
import AppTextField from '@/components/AppTextField'
import AppTextarea from '@/components/AppTextarea'
import AppButton from '@/components/AppButton'
import PostsBox from '@/components/PostsBox'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'ViewEditPost',
	components: {
		AppTextField,
		AppTextarea,
		AppButton,
		PostsBox
	},
	computed: {
		...mapGetters({
			post: 'Posts/post'
		}),
		form () {
			return {
				id: this.$route.params.id,
				title: this.post.title,
				body: this.post.body
			}
		}
	},
	data () {
		return {
			success: false,
			loading: false
		}
	},
	created () {
		this.getPost()
	},
	methods: {
		...mapActions({
			getSinglePost: 'Posts/getSinglePost',
			editPost: 'Posts/editPost'
		}),
		async getPost () {
			this.loading = true
			await this.getSinglePost(this.$route.params.id)
			this.loading = false
		},
		async savePost () {
			this.loading = true
			const response = await this.editPost(this.form)
			this.loading = false

			if (response.status === 200) {
				this.success = true
			}
		}
	}
}
</script>

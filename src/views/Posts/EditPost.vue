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
			<PostsBox :data="asyncData"/>
		</template>
		<h3 v-else>Loading...</h3>
	</div>
</template>
<script>
import AppTextField from '@/components/AppTextField'
import AppTextarea from '@/components/AppTextarea'
import AppButton from '@/components/AppButton'
import PostsBox from '@/components/PostsBox'
export default {
	name: 'ViewEditPost',
	components: {
		AppTextField,
		AppTextarea,
		AppButton,
		PostsBox
	},
	data () {
		return {
			url: `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
			asyncData: false,
			success: false,
			loading: false,
			form: {
				title: '',
				body: ''
			}
		}
	},
	created () {
		this.getPost()
	},
	methods: {
		async getPost () {
			this.loading = true
			const { data } = await this.axios.get(this.url)
			this.loading = false
			this.asyncData = data
			this.form.title = data.title
			this.form.body = data.body
		},
		async savePost () {
			this.loading = true
			const response = await this.axios.patch(this.url, {
				userId: this.asyncData.userId,
				...this.form
			})
			this.loading = false

			if (response.status === 200) {
				this.asyncData = response.data
				this.success = true
			}
		}
	}
}
</script>

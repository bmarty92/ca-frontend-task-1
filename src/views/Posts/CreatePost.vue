<template>
	<div class="view-create-post">
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
			<AppButton @click.native="onSubmit">Sukurti</AppButton>
		</template>
		<template v-else-if="success">
			<PostsBox :data="asyncData"/>
		</template>
		<template v-else>
			<h3>Creating...</h3>
		</template>
	</div>
</template>
<script>
import AppTextField from '@/components/AppTextField'
import AppTextarea from '@/components/AppTextarea'
import AppButton from '@/components/AppButton'
import PostsBox from '@/components/PostsBox'
import { mapActions } from 'vuex'
export default {
	name: 'Viewcreate-post',
	components: {
		AppTextField,
		AppTextarea,
		AppButton,
		PostsBox
	},
	data () {
		return {
			success: false,
			loading: false,
			form: {
				title: '',
				body: ''
			},
			asyncData: {}
		}
	},
	methods: {
		...mapActions({
			createPost: 'Posts/createPost'
		}),
		async onSubmit () {
			if (this.form.title.length > 0 && this.form.body.length > 0) {
				this.loading = true
				const response = await this.createPost(this.form)
				this.loading = false

				if (response.status === 201) {
					this.success = !this.success
					this.asyncData = response.data
				}
			}
		}
	}
}
</script>
<style lang="scss">
	.view-create-post {
		&__input, &__textarea {
			margin-bottom: 45px;
		}

		&__input {
			max-width: 300px;
		}
	}
</style>

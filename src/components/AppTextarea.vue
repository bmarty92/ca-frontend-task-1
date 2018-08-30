<template>
	<div class="app-textarea">
		<label class="app-textarea__label"> {{ label }} </label>
		<textarea
			class="app-textarea__textarea"
			cols="30"
			rows="10"
			:value="value"
			@input="$emit('input', $event.target.value)"
		></textarea>
	</div>
</template>
<script>
export default {
	name: 'AppTextarea',
	props: {
		label: {
			type: String,
			required: true
		},
		value: String
	}
}
</script>
<style lang="scss">
	.app-textarea {
		display: flex;
		flex-flow: column;
		margin-bottom: 15px;

		&__label {
			font-size: 16px;
			text-transform: uppercase;
			padding-bottom: 7.5px;
		}

		&__textarea {
			border-radius: 4px;
			border: 1px solid black;
			font-size: 16px;
			padding: 15px;
		}
	}
</style>

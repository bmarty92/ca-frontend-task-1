<template>
	<div class="app-textfield">
		<label class="app-textfield__label"> {{ label }} </label>
		<input
			class="app-textfield__input"
			type="text"
			:value="value"
			@input="$emit('input', $event.target.value)"
		>
	</div>
</template>
<script>
export default {
	name: 'AppTextField',
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
	.app-textfield {
		display: flex;
		flex-flow: column;
		margin-bottom: 15px;

		&__label {
			font-size: 14px;
			text-transform: uppercase;
			padding-bottom: 7.5px;
		}

		&__input {
			height: 48px;
			border-radius: 4px;
			border: 1px solid black;
			font-size: 16px;
			padding: 0 15px;
		}
	}
</style>

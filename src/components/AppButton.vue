<template>
	<div class="app-button">
		<button class="app-button__button">
			<slot></slot>
		</button>
	</div>
</template>
<script>
export default {
	name: 'AppButton'
}
</script>
<style lang="scss">
	.app-button {
		&__button {
			-webkit-appearance: none;
			background-color: #3252E5;
			color: white;
			height: 48px;
			min-width: 170px;
			font-size: 14px;
			text-transform: uppercase;
			border-radius: 6px;
			transition: .2s ease;
			opacity: 1;

			&:hover {
				cursor: pointer;
				opacity: .7;
			}
		}
	}
</style>

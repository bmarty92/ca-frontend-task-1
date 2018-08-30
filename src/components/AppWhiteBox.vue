<template>
	<section class="app-whitebox">
		<h2 class="app-whitebox__title">
			{{ $route.meta.displayPageTitle }}
		</h2>
		<slot></slot>
	</section>
</template>
<script>
export default {
	name: 'AppWhiteBox'
}
</script>

<style lang="scss">
	.app-whitebox {
		background-color: white;
		box-shadow: 0 1px 2px 0 rgba(black, .15);
		border-radius: 4px;
		width: 100%;
		padding: 60px;
		padding-bottom: 120px;

		&__title {
			font-size: 24px;
			font-weight: 600;
			margin: 0;
			padding-top: 25px;
			padding-bottom: 45px;
			color: rgba(black, .87);
			text-transform: uppercase;
		}
	}
</style>

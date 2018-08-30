<template>
	<div class="app-container">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'AppContainer'
}
</script>
<style lang="scss">
	.app-container {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -15px;
	}
</style>

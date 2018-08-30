<template>
	<div class="app-column">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'AppColumn'
}
</script>
<style lang="scss">
	.app-column{
		padding: 15px;
		flex: 0 0 33%;
		min-width: 33%;
	}
</style>

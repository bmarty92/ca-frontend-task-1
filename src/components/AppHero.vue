<template>
	<section class="app-hero">
		<AppHeader/>
		<div class="app-hero__content">
			<h1 class="app-hero__title">Vardas Pavarde</h1>
			<h3 class="app-hero__subtitle">Portfolio</h3>
		</div>
	</section>
</template>
<script>
import AppHeader from '@/components/AppHeader'
export default {
	name: 'AppHero',
	components: {
		AppHeader
	}
}
</script>

<style lang="scss">
	.app-hero {
		display: flex;
		flex-flow: column;
		min-height: 50vh;
		background-color: #3252E5;
		align-items: center;
		padding: 0 130px;

		&__content {
			display: flex;
			flex-flow: column;
			justify-content: center;
			flex: 1;
			padding-top: 250px;
			padding-bottom: 145px;
			color: white;
			text-transform: uppercase;
			text-align: center;
		}

		&__title {
			font-size: 36px;
			padding: 0;
			margin: 0;
			font-weight: 600;
			padding-bottom: 15px;
		}

		&__subtitle {
			font-size: 18px;
			padding: 0;
			margin: 0;
			font-weight: 600;
		}
	}
</style>

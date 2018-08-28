<template>
	<main class="app">
		<AppHero/>
		<div class="app__whitebox">
			<AppWhiteBox>
				<router-view></router-view>
			</AppWhiteBox>
		</div>
		<AppFooter/>
	</main>
</template>

<script>
import AppHero from '@/components/AppHero'
import AppWhiteBox from '@/components/AppWhiteBox'
import AppFooter from '@/components/AppFooter'

export default {
	components: {
		AppHero,
		AppWhiteBox,
		AppFooter
	}
}
</script>

<style lang="scss">
	.app { 
		display: flex;
		flex-flow: column;
		min-height: 100%;

		&__whitebox {
			display: flex;
			flex: 1;
			margin-top: -45px;
			padding: 0 130px;
		}
	}
</style>

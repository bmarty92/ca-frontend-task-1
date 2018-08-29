<template>
    <header class="app-header">
        <AppNav
            class="app-header__nav"
            :navigation="navigation"
        />
    </header>
</template>
<script>
import AppNav from '@/components/AppNav'
import routes from '@/routes'
export default {
    name: 'AppHeader',
    components: {
        AppNav
    },
    computed: {
        navigation () {
            return routes.filter(route => route.meta.displayName).map(route => {
                return {
                    name: route.meta.displayName,
                    to: {
                        name: (route.meta.useChildName) ? route.children[0].name : route.name
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss">
    .app-header {
        display: flex;
        width: 100%;
        justify-content: flex-end;

        &__nav {
            padding-top: 45px;
        }
    }
</style>


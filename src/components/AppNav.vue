<template>
    <nav class="app-nav">
        <ul class="app-nav__list">
            <li
                v-for="(item, index) in navigation"
                :key="index"
                class="app-nav__list-item"
            >
                <router-link
                    :to="item.to"
                    :class="['app-nav__list-link', {
                        'app-nav__list-link--inverted': inverted
                    }]"
                    exact-active-class="app-nav__list-link--active"
                >
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'AppNav',
    props: {
        navigation: {
            type: Array,
            required: true
        },
        inverted: {
            type: [Boolean, String],
            default: false
        }
    }
}
</script>

<style lang="scss">
    .app-nav {
        &__list {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            margin: 0 -15px;

            &-item {
                padding: 0 15px;
            }

            &-link {
                color: white;
                font-size: 18px;
                text-decoration: none;
                text-transform: uppercase;

                &--inverted {
                    color: rgba(black, .87);
                }
                
                &--active {
                    text-decoration: underline;
                    color: #37E9B8;
                }
            }
        }
    }
</style>

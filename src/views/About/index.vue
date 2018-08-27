<template>
   <div class="view-about">
        <p class="view-about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit autem tempore minus deleniti provident ad adipisci rerum non quos, temporibus error libero sequi, dolorem odit! Eum doloribus nulla doloremque.
            Reiciendis natus soluta, accusantium laudantium esse atque explicabo eum deserunt corporis consequatur blanditiis itaque, nemo ut voluptate cum odit animi. Illum nulla facilis fugiat dolor, quod consequatur blanditiis laboriosam fuga.
            Sapiente quaerat suscipit maxime ratione reprehenderit deserunt soluta doloribus rem natus ipsum ullam asperiores, sequi facere nihil, ipsam cupiditate minus optio quidem corporis ut quis aliquam aspernatur voluptas. Delectus, eveniet.
            Inventore distinctio saepe odio numquam, enim est. Dignissimos quaerat quas cupiditate doloribus ipsa quasi autem. Ratione, sint quia, modi voluptate officia repudiandae quo consectetur illo dolorem eius, hic non iste.
            Quo aspernatur asperiores vero sint assumenda inventore. Ipsam voluptatem doloribus similique fugiat officia fugit error, consequatur vero! Facilis aliquid tenetur nisi ea, corrupti nesciunt, nobis ut sequi sed porro quidem.
        </p>
        <div class="view-about__tabs">
            <div class="view-about__tabs-links">
                <AppNav
                    class="view-about__tabs-nav"
                    :navigation="navigation"
                    inverted="true"
                />
            </div>
            <div class="view-about__tabs-content">
                <router-view></router-view>
            </div>
        </div>
   </div>
</template>
<script>
import AppNav from '@/components/AppNav'

export default {
    name: 'ViewAbout',
    components: {
        AppNav
    },
    data () {
        return {
            navigation: [
                {
                    name: 'Issilavinimas',
                    to: {
                        name: 'About'
                    }
                },
                {
                    name: 'Karjera',
                    to: {
                        name: 'AboutCareer'
                    }
                },
                {
                    name: 'Zinios',
                    to: {
                        name: 'AboutKnow'
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .view-about {
        &__paragraph {
            font-size: 16px;
            margin: 0;
        }

        &__tabs {
            &-nav {
                padding-top: 45px;
            }
            &-content {
                margin-top: 30px;
                padding: 30px;
                background-color: #EEEFF3;
            }
        }
    }
</style>

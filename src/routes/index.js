import Home from '@/views/Home'
import About from '@/views/About'
import AboutEducation from '@/views/About/AboutEducation'
import AboutCareer from '@/views/About/AboutCareer'
import AboutKnow from '@/views/About/AboutKnow'
import Gallery from '@/views/Gallery'
import Posts from '@/views/Posts'
import CreatePost from '@/views/Posts/CreatePost'

export default [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            displayName: 'Namai',
            displayPageTitle: 'Projektai'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            useChildName: true,
            displayName: 'Apie mane',
            displayPageTitle: 'Apie mane'
        },
        children: [
            {
                path: '/',
                name: 'About',
                component: AboutEducation
            },
            {
                path: 'career',
                name: 'AboutCareer',
                component: AboutCareer
            },
            {
                path: 'know',
                name: 'AboutKnow',
                component: AboutKnow
            }
        ]
    },
    {
        name: 'Gallery',
        path: '/gallery',
        component: Gallery,
        meta: {
            displayName: 'Galerija',
            displayPageTitle: 'Galerija'
        }
    },
    {
        name: 'Posts',
        path: '/posts',
        component: Posts,
        meta: {
            displayName: 'Pranesimai',
            displayPageTitle: 'Pranesimai'
        }
    },
    {
        name: 'CreatePost',
        path: '/create-post',
        component: CreatePost,
        meta: {
            displayName: 'Sukurti pranesima',
            displayPageTitle: 'Sukurti pranesima'
        }
    }
]
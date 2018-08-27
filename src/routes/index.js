import Home from '@/views/Home'
import About from '@/views/About'
import AboutEducation from '@/views/About/AboutEducation'
import AboutCareer from '@/views/About/AboutCareer'
import AboutKnow from '@/views/About/AboutKnow'
import Contacts from '@/views/Contacts'
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
        name: 'Contacts',
        path: '/contacts',
        component: Contacts,
        meta: {
            displayName: 'Kontaktai',
            displayPageTitle: 'Kontaktai'
        }
    }
]
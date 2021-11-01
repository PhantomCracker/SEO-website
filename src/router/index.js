import Vue from 'vue';
import Router from 'vue-router';

// import components/pages
import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import About from '../pages/About';
import LocksmithNearMe from "../pages/LocksmithNearMe";
import Cities from "../pages/Cities";
// import Bristol from "../components/locksmith-near-me/Bristol";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/about-us',
                    name: 'About',
                    component: About
                },
                {
                    path: '/locksmith-near-me',
                    name: 'LocksmithNearMe',
                    component: LocksmithNearMe,

                },
                {
                    path: '/locksmith/:city',
                    name: 'Cities',
                    component: Cities,
                }
            ]
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});
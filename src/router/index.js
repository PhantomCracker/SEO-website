import Vue from 'vue';
import Router from 'vue-router';

// import components/pages
import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';

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
                }
            ]
        }
    ]
});
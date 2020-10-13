import Vue from 'vue';
import VueRouter from "vue-router";
import Preferences from './components/pages/Preferences.vue'
import Tasks from './components/pages/Tasks'
import Tracking from './components/pages/Tracking'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'tracking',
            component: Tracking
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks
        },
        {
            path: '/preferences',
            name: 'preferences',
            component: Preferences
        }
    ]
})

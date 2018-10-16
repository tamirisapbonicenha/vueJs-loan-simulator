import Vue from 'vue'
import Router from 'vue-router'
import AppView from '../components/AppView'
import AppAbout from '../components/AppAbout'
import AppFormMessage from '../components/AppFormMessage' 

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'view', component: AppView },
        { path: '/sobre', name: 'sobre', component: AppAbout },
        { path: '/sucesso', name: 'sucesso', component: AppFormMessage },
    ]
})
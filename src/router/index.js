import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Registry from '../views/Registry.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import Games from '../views/Games.vue';
import GameView from '../views/GameView.vue'
import Profile from '../views/Profile.vue';
import Articles from '../views/Articles.vue'
import ArticleView from '../views/ArticleView.vue'
import AdminLogin from '../admin/views/AdminLogin.vue'
import AdminLayout from '../admin/components/AdminLayout.vue'
import AdminDashboard from '../admin/views/AdminDashboard.vue'
import AdminGames from '../admin/views/AdminGames.vue'
import AddGame from '../admin/views/AddGame.vue'
import AdminTheloai from '../admin/views/AdminTheloai.vue';
import AddTheloai from '../admin/views/AddTheloai.vue'
import AdminUser from '../admin/views/AdminUser.vue'
import AdminReport from '../admin/views/AdminReport.vue'
import ModifyReport from '../admin/views/ModifyReport.vue'
import AdminArticle from '../admin/views/AdminArticle.vue'
import AddArticle from '../admin/views/AddArticle.vue'
import store from "../store";
const routes = [
    {
        path: '/',
        redirect: '/home',
        component: DefaultLayout,
        children: [
            {path: '/home', name: "Home", component: Home},
            {path: '/tatcagame', name: "Games", component: Games},
            {path: '/theloaigame/:slug', name: "Games_TheLoai", component: Games},
            {path: '/timkiem/:keyword', name: "Search", component: Games},
            {path: '/game/:slug', name: "GameView", component: GameView},
            {path: '/profile', name: "Profile", component: Profile},
            {path: '/tintuc', name: 'Articles', component: Articles},
            {path: '/tintuc/:slug', name: 'ArticleView', component: ArticleView}
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        children: 
        [
            {
                path: '/login',
                name: 'Login',
                component: Login 
            },
            {
                path: '/registry',
                name: 'Registry',
                component: Registry 
            },
        ]
    },
    {
        path: '/admin_login',
        name: 'AdminLogin',
        component: AdminLogin
    },

    {
        path: '/admin_dashboard',
        redirect: '/admin_dashboard',
        component: AdminLayout,
        meta: {requiresAuth: true},
        children: [
            {path: '/admin_dashboard', name: "AdminDashboard", component: AdminDashboard},
            {path: '/admin_games', name: "AdminGames", component: AdminGames},
            {path: '/admin_games/add_game', name: "AddGame", component: AddGame},
            {path: '/admin_games/update_game/:id', name: "UpdateGame", component: AddGame},
            {path: '/admin_theloaigame', name: "AdminTheloai", component: AdminTheloai},
            {path: '/admin_theloaigame/add_theloai', name: 'AddTheloai', component: AddTheloai},
            {path: '/admin_theloaigame/update_theloai/:id', name: 'UpdateTheloai', component: AddTheloai},
            {path: '/admin_user', name: 'AdminUser', component: AdminUser},
            {path: '/admin_report', name: 'AdminReport', component: AdminReport},
            {path: '/admin_report/update_report/:id', name: 'UpdateReport', component: ModifyReport},
            {path: '/admin_article', name: 'AdminArticle', component: AdminArticle},
            {path: '/admin_article/add_article', name: 'AddArticle', component: AddArticle},
            {path: '/admin_article/update_article/:id', name: 'UpdateArticle', component: AddArticle}
        ]
    }
    

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.admin.token)
    {
        next({
            name: 'AdminLogin'
        })
    }
    else if (store.state.admin.token && to.name === 'AdminLogin')
    {
        next({
            name: 'AdminDashboard'
        })
    }
    else
    {
        next();
    }
})

export default router;
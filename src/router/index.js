import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Login = () => import('@/components/Login.vue');
const Todos = () => import('@/components/Todos.vue');

const routes = [
    {path: '/login', component: Login},
    {path: '/todos', component: Todos},
];

const router = new VueRouter({
    mode: "hash",
    routes
});

Vue.$router = router;

export default router;

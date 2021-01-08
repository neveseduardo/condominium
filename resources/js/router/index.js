import Vue from 'vue';
import Router from 'vue-router';
import AuthRoutes from './modules/auth'
import UserRoutes from './modules/user'
import AdminRoutes from './modules/admin'
import ErrorsRoutes from './modules/errors'

Vue.use(Router);

export const routes = [
    AuthRoutes,
    UserRoutes,
    AdminRoutes,
    ErrorsRoutes
]

const createRouter = () => new Router({
    //mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    base: process.env.MIX_BASE_PATH,
    routes: routes,
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;

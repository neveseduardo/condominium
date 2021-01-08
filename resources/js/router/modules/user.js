import Layout from '@/layouts/UserAccount'

export default {
    path: '/user',
    component: Layout,
    redirect: 'myaccount',
    children: [{
            path: 'myaccount',
            component: () => import('@/views/UserAccount/MyAccount.vue'),
            name: 'MyAccount',
            meta: {
                auth: true,
                title: 'MyAccount'
            },
        },
        {
            path: 'myorders',
            component: () => import('@/views/UserAccount/MyOrders.vue'),
            name: 'MyOrders',
            meta: {
                auth: true,
                title: 'MyOrders'
            },
        },
        {
            path: 'accountlogin',
            component: () => import('@/views/UserAccount/AccountLogin.vue'),
            name: 'AccountLogin',
            meta: {
                auth: true,
                title: 'AccountLogin'
            },
        },
        {
            path: 'accountregister',
            component: () => import('@/views/UserAccount/AccountRegister.vue'),
            name: 'AccountRegister',
            meta: {
                auth: true,
                title: 'AccountRegister'
            },
        },
        {
            path: 'payment',
            component: () => import('@/views/UserAccount/Payment.vue'),
            name: 'Payment',
            meta: {
                auth: true,
                title: 'Payment'
            },
        },
    ]
}

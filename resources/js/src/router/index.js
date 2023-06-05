import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'dashboard-analytics',
      component: () => import('@/views/dashboard/analytics/Analytics.vue'),
      meta: {
        pageTitle: 'Dashboard',
        breadcrumb: [
          {
            text: 'Analytics',
            active: true,
          },
        ],
      },
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login1.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('@/views/verify.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/pages/authentication/register.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/ForgotPassword-v1.vue'),
      meta: {
        layout: 'full',
      },
    },

    {
      path: '/update-password',
      name: 'update-password',
      component: () => import('@/views/user/ChangePassword.vue'),
      meta: {
        pageTitle: 'My Accounts',
        breadcrumb: [
          {
            text: 'Update Password',
            active: true,
          },
        ],
      },
    },
    {
      path: '/update-email-address',
      name: 'update-email-address',
      component: () => import('@/views/user/ChangeEmail.vue'),
      meta: {
        pageTitle: 'My Accounts',
        breadcrumb: [
          {
            text: 'Update Email',
            active: true,
          },
        ],
      },
    },
    {
      path: '/update-profile',
      name: 'update-profile',
      component: () => import('@/views/user/UpdateProfile.vue'),
      meta: {
        pageTitle: 'My Accounts',
        breadcrumb: [
          {
            text: 'Update Email',
            active: true,
          },
        ],
      },
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('@/views/user/Apps.vue'),
      meta: {
        pageTitle: 'My Accounts',
        breadcrumb: [
          {
            text: 'Apps',
            active: true,
          },
        ],
      },
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('@/views/user/Logs.vue'),
      meta: {
        pageTitle: 'My Accounts',
        breadcrumb: [
          {
            text: 'Logs',
            active: true,
          },
        ],
      },
    },
    {
      path: '/user-accounts',
      name: 'user-accounts',
      component: () => import('@/views/manage-user/UserAccounts.vue'),
      meta: {
        pageTitle: 'Manage Users',
        breadcrumb: [
          {
            text: 'User Accounts',
            active: true,
          },
        ],
      },
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: () => import('@/views/manage-user/CreateUser.vue'),
      meta: {
        pageTitle: 'Manage Users',
        breadcrumb: [
          {
            text: 'Create User',
            active: true,
          },
        ],
      },
    },
    {
      path: '/user-imports',
      name: 'user-imports',
      component: () => import('@/views/manage-user/UserImports.vue'),
      meta: {
        pageTitle: 'Manage Users',
        breadcrumb: [
          {
            text: 'User Imports',
            active: true,
          },
        ],
      },
    },
    {
      path: '/user-groups',
      name: 'user-groups',
      component: () => import('@/views/manage-user/UserGroups.vue'),
      meta: {
        pageTitle: 'Manage Users',
        breadcrumb: [
          {
            text: 'User Groups',
            active: true,
          },
        ],
      },
    },
    {
      path: '/custom-user-fields',
      name: 'custom-user-fields',
      component: () => import('@/views/manage-user/CustomUserFields.vue'),
      meta: {
        pageTitle: 'Manage Users',
        breadcrumb: [
          {
            text: 'Custom User Fields',
            active: true,
          },
        ],
      },
    },
    {
      path: '/user-authentication-logs',
      name: 'user-authentication-logs',
      component: () => import('@/views/manage-user/UserAuthenticationLogs.vue'),
      meta: {
        pageTitle: 'Manage Users',
        breadcrumb: [
          {
            text: 'User Authentication Logs',
            active: true,
          },
        ],
      },
    },
    {
      path: '/identity-providers',
      name: 'identity-providers',
      component: () => import('@/views/manage-sso/IdentityProviders.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'Identity Providers',
            active: true,
          },
        ],
      },
    },
    {
      path: '/service-providers',
      name: 'service-providers',
      component: () => import('@/views/manage-sso/ServiceProviders.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'Service Providers',
            active: true,
          },
        ],
      },
    },
    {
      path: '/federations',
      name: 'federations',
      component: () => import('@/views/manage-sso/Federations.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'Federations',
            active: true,
          },
        ],
      },
    },
    {
      path: '/app-links',
      name: 'app-links',
      component: () => import('@/views/manage-sso/AppLinks.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'App Links',
            active: true,
          },
        ],
      },
    },
    {
      path: '/app-co-brandings',
      name: 'app-co-brandings',
      component: () => import('@/views/manage-sso/AppCoBrandings.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'App Co-Brandings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/saml-transactions-logs',
      name: 'saml-transactions-logs',
      component: () => import('@/views/manage-sso/SAMLTransactionLogs.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'SAML Transaction Logs',
            active: true,
          },
        ],
      },
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('@/views/manage-sso/ContactUs.vue'),
      meta: {
        pageTitle: 'Manage SSO',
        breadcrumb: [
          {
            text: 'Contact Us',
            active: true,
          },
        ],
      },
    },

    {
      path: '/account-setting',
      name: 'account-setting',
      component: () => import('@/views/account-setting/AccountSetting.vue'),
      meta: {
        pageTitle: 'Account Settings',
        breadcrumb: [
          // {
          //   text: 'Pages',
          // },
          {
            text: 'Account Settings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

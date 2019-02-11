const Func = r => require.ensure([], () => r(require('@/views/auth-management/func-list')), 'auth-router');

const authManagementRouter = [
  {
    path: '/func-list',
    name: 'func-list',
    component: Func
  }
];

export { authManagementRouter };

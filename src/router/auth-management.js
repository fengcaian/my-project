const Func = r => require.ensure([], () => r(require('@/views/element/table')), 'element-router');

const authManagementRouter = [
  {
    path: '/func',
    name: 'func',
    component: Func
  }
];

export { authManagementRouter };

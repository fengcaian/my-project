const Table = r => require.ensure([], () => r(require('@/views/element/table')), 'element-router');
const Popover = r => require.ensure([], () => r(require('@/views/element/popover')), 'element-router');
const Dialog = r => require.ensure([], () => r(require('@/views/element/dialog')), 'element-router');
const Tree = r => require.ensure([], () => r(require('@/views/element/tree')), 'element-router');
const elementRouter = [
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/popover',
    name: 'popover',
    component: Popover
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },
  {
    path: '/tree',
    name: 'tree',
    component: Tree
  }
];
export { elementRouter };
const BigNumber = r => require.ensure([], () => r(require('@/views/other-knowledage/big-number')), 'other-knowledage');
const otherKnowledageRouter = [
  {
    path: '/big-number',
    name: 'big-number',
    component: BigNumber
  }
];
export { otherKnowledageRouter };

const BigNumber = r => require.ensure([], () => r(require('@/views/other-knowledage/big-number')), 'other-knowledage');
const Video = r => require.ensure([], () => r(require('@/views/other-knowledage/video')), 'other-knowledage');
const otherKnowledageRouter = [
  {
    path: '/big-number',
    name: 'big-number',
    component: BigNumber
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  }
];
export { otherKnowledageRouter };

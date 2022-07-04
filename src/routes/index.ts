import AdDetail from '../pages/AdDetail';

const TabRouteNames = ['Home', 'Category', 'PersonalCenter'];

export default [
  {
    name: 'AdDetail',
    component: AdDetail.screen,
    options: AdDetail.navigationOptions,
  },
];

export {TabRouteNames};

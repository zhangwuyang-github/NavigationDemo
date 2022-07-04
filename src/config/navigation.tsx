import {CardStyleInterpolators} from '@react-navigation/stack';
import {NavigationProps} from '../types/navigation';

const navOptions: any = {
  headerTintColor: '#333',
  headerBackTitleVisible: false,
  headerBackTitle: null,
  headerTransparent: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'PingFangSC-Semibold',
    fontWeight: '700',
  },
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: {
    backgroundColor: '#F7F7F7',
  },
};

const tabOptions = {
  style: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    height: 55,
  },
};

function withNavigationOptions(
  {navigation, route}: NavigationProps<any>,
  options: any,
) {
  if (typeof options === 'function') {
    options = options({navigation, route});
  }

  if (options.headerStyle) {
    options.headerStyle = {
      ...navOptions.headerStyle,
      ...options.headerStyle,
    };
  }

  return {
    ...navOptions,
    ...options,
    detachPreviousScreen: !navigation.isFocused(),
  };
}

export {navOptions, tabOptions, withNavigationOptions};

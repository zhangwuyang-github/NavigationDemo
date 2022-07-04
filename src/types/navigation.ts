import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface NavigationProps<RouteName extends keyof AppStackParamList> {
  navigation: StackNavigationProp<AppStackParamList, RouteName>;
  route: RouteProp<AppStackParamList, RouteName>;
}

type AppStackParamList = {
  Screen: {};
  Component: {};
  Home: undefined;
  AccountSecurity: undefined;
  BlackList: undefined;
  Contact: undefined;
  About: undefined;
  Tab: undefined;
  PublishRules: undefined;
  Feedback: undefined;
  Login: any;
  Coupons: undefined;
  ExpiredCouponsScreen: undefined;
};

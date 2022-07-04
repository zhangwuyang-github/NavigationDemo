import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeTabScreen} from '../../pages/HomePage';
import {MessageTabScreen} from '../../pages/MessagePage';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Tab from './Tab';

const BottomTab = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  const TabBars = (props: BottomTabBarProps) => {
    const {routes, index: activeRouteIndex} = props.state;
    return (
      <SafeAreaView style={style.safeAreaView}>
        <View style={style.wrapper}>
          {routes.map((route: any, routeIndex: number) => (
            <Tab
              key={routeIndex}
              route={route}
              isRouteActive={routeIndex === activeRouteIndex}
            />
          ))}
        </View>
      </SafeAreaView>
    );
  };

  return (
    <BottomTab.Navigator
      tabBar={TabBars}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="Home" component={HomeTabScreen} />
      <BottomTab.Screen name="Message" component={MessageTabScreen} />
    </BottomTab.Navigator>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fafafa',
  },
  safeAreaView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(251, 251, 251, 0.99)',
    flex: 1,
    elevation: 1,
  },
});

export default AppTabs;

import React from 'react';
import {Pressable, StatusBar, StyleSheet} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import IconWithBadge from './IconWithBadge';

const getTabBarIcon = (route: any, focused: boolean, tintColor: any | null) => {
  const {name} = route;
  const iconName = `${name}${focused ? 'Focused' : ''}`;
  return <IconWithBadge name={iconName} color={tintColor} focused={focused} />;
};

const Tab: React.FC<any> = (props: any) => {
  const {isRouteActive, route, navigation} = props;
  const {name}: {name: any} = route;
  const focused = isRouteActive;
  const tintColor = focused ? '#2C2D2F' : '#7A878E';

  const onTabPress = async () => {
    StatusBar.setBarStyle('dark-content');
    navigation.navigate(name);
  };

  const styles = StyleSheet.create({
    touchable: {
      flex: 1,
    },
  });

  return (
    <Pressable onPress={onTabPress} style={styles.touchable}>
      {getTabBarIcon(route, focused, tintColor)}
    </Pressable>
  );
};

export default withNavigation(Tab);

import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  color?: any;
  focused: boolean;
}

const IconWithBadge: React.FC<Props> = (props: Props) => {
  const {name, focused} = props;

  const state = {
    scale: new Animated.Value(1),
  };

  const labelFocused = focused ? {color: '#FF6633'} : {};

  const iconStyle = [
    styles.image,
    {
      transform: [
        {
          scale: state.scale,
        },
      ],
    },
  ];

  const getIcon = (routeName: string) => {
    let icon = null;
    // prettier-ignore
    switch (routeName) {
      case 'Home': icon = require('../../assets/images/home.png'); break;
      case 'HomeFocused': icon = require('../../assets/images/home_focused.png'); break;
      case 'Message': icon = require('../../assets/images/messages.png'); break;
      case 'MessageFocused': icon = require('../../assets/images/messages_focused.png'); break;
    }
    return icon;
  };

  const getName = (routeName: string) => {
    const menuNames = new Map([
      ['Home', '首页'],
      ['HomeFocused', '首页'],
      ['Message', '消息'],
      ['MessageFocused', '消息'],
    ]);
    return menuNames.get(routeName);
  };

  return (
    <View style={styles.wrap}>
      <Animated.Image source={getIcon(name)} style={iconStyle} />
      <Text style={[styles.label, labelFocused]}>{getName(name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 24,
    height: 24,
  },
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 49,
    paddingVertical: 2,
  },
  label: {
    color: '#BDC8D6',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 14,
    fontFamily: 'PingFangSC-Regular',
  },
  badgeContainer: {
    borderRadius: 10,
    position: 'absolute',
    top: 2,
    left: '45%',
    marginLeft: 10,
    height: 18,
    borderWidth: 2,
    borderColor: '#FFF',
    overflow: 'hidden',
  },
  badge: {
    paddingHorizontal: 3,
    height: 14,
    minWidth: 14,
    backgroundColor: '#FE5E5E',
  },
  badgeNumber: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 13,
  },
  redPoint: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
    top: 4,
    left: '50%',
    marginLeft: 5,
  },
  redPointDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FE5E5E',
  },
});

export default IconWithBadge;

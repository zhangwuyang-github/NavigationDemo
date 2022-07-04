import React from 'react';
import {Text, View} from 'react-native';

const AdDetail: React.FC = () => {
  return (
    <View>
      <Text>详细信息</Text>
    </View>
  );
};

export default {
  screen: AdDetail,
  navigationOptions: {
    title: '详情',
  },
};

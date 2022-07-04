import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navOptions} from '../../config/navigation';

export const MessageTabScreen: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen
        name="MessagePage"
        component={MessagePage}
        options={() => {
          return {
            title: '',
            headerShown: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const MessagePage: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>个人信息</Text>
      <Text>个人信息</Text>
      <Text>个人信息</Text>
      <Text>个人信息</Text>
      <Text>个人信息</Text>
      <Text>个人信息</Text>
    </SafeAreaView>
  );
};

export default MessagePage;

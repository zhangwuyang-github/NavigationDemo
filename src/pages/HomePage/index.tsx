import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navOptions} from '../../config/navigation';
import Navigation from '../../services';

const HomePage: React.FC = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate('AdDetail');
        }}>
        <Text style={{color: 'blue'}}>详情</Text>
      </TouchableOpacity>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
      <Text>首页</Text>
    </SafeAreaView>
  );
};

export const HomeTabScreen: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default {
  screen: HomePage,
  navigationOptions: {
    title: '',
  },
};

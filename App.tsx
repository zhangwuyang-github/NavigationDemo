import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './src/routes';
import {navOptions, withNavigationOptions} from './src/config/navigation';
import AppTabs from './src/components/common/AppTabs';
import {navigationRef} from './src/services';

const Stack = createStackNavigator();

const App = () => {
  const renderApp = () => {
    return (
      <Stack.Navigator screenOptions={{...navOptions, animationEnabled: false}}>
        <Stack.Screen
          name="Tab"
          component={AppTabs}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={navigationProps =>
              withNavigationOptions(navigationProps, route.options)
            }
          />
        ))}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>{renderApp()}</NavigationContainer>
  );
};

export default App;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserPage} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="User Screen">
      <Stack.Screen
        name="User Screen"
        component={UserPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, AddScreen, EditScreen} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

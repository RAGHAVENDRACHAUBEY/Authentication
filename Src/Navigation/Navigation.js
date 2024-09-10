import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../Component/Splashscreen';
import Start from '../Component/Start';
import Signin from '../Component/Signin';
import Signup from '../Component/Signup';
import Welcome from '../Component/Welcome';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Start" component={Start}  options={{headerShown: false}} />
        <Stack.Screen name="Signin" component={Signin}  options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup}  options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

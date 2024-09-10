import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screen/splash_screen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from './src/screen/login_screen';
import RegisterScreen from './src/screen/register_screen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

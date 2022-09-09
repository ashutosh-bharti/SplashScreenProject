import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import FirstPage from './components/first-page.js';
import SecondPage from './components/second-page.js';
// import StartupScreen from './components/startup-screen';

const Stack = createNativeStackNavigator();

const UiRoutes = () => {
  return (
    <NavigationContainer onReady={() => SplashScreen.hide()}>
      <Stack.Navigator>
      {/* <Stack.Screen name="Startup" component={StartupScreen} /> */}
        <Stack.Screen
          name="Home"
          component={FirstPage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Second" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UiRoutes;

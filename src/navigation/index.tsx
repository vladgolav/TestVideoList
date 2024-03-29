import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationScreens } from 'src/interfaces/global.interface';

import Home from 'src/screens/Home';

const MainStack = createNativeStackNavigator();

const optionsWithoutHeader = {
  header: () => null
};

const RootNavigation = () => (
  <NavigationContainer
  >
    <MainStack.Navigator initialRouteName={NavigationScreens.Home}>
      <MainStack.Screen name={NavigationScreens.Home} component={Home} options={optionsWithoutHeader} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;

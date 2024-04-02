import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRefWithCurrent,
  ParamListBase,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationScreens } from 'src/interfaces/global.interface';

import Home from 'src/screens/Home';
import Episodes from 'src/screens/Episodes';

const MainStack = createNativeStackNavigator();
export const navigationRef: NavigationContainerRefWithCurrent<
  ParamListBase
> = createNavigationContainerRef();

const optionsWithoutHeader = {
  header: () => null
};

const RootNavigation = () => (
  <NavigationContainer
    ref={navigationRef}
  >
    <MainStack.Navigator initialRouteName={NavigationScreens.Home}>
      <MainStack.Screen
        name={NavigationScreens.Home}
        component={Home}
        options={optionsWithoutHeader}
      />
      <MainStack.Screen
        name={NavigationScreens.Episodes}
        component={Episodes}
        options={optionsWithoutHeader}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;

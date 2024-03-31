import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

export enum NavigationScreens {
  'Home' = 'Home',
  'Episodes' = 'Episodes'
};

export interface INavigation{
  navigation: NativeStackNavigationProp<ParamListBase>;
}

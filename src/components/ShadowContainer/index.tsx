import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { colors } from 'src/constants/colors';

interface IShadowContainer {
  children: React.ReactNode;
};

const ShadowContainer: React.FC<IShadowContainer> = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient pointerEvents='none' colors={[colors.black, 'transparent']} style={styles.linearGradient} />
      <LinearGradient pointerEvents='none' colors={['transparent', colors.black]} style={[styles.linearGradient, styles.bottomLinearGradient]} />
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View>
  );
};

export default ShadowContainer;

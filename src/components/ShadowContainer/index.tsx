import React, {useState} from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { colors } from 'src/constants/colors';

interface IShadowContainer {
  children: React.ReactNode;
  setHeight: (height: number) => void; 
};

const ShadowContainer: React.FC<IShadowContainer> = ({ children, setHeight }) => {
  const onLayout = ({ nativeEvent } : LayoutChangeEvent) => {
    setHeight(nativeEvent.layout.height - 2);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} onLayout={onLayout}>
        <LinearGradient pointerEvents='none' colors={[colors.linearGradientBlack09, colors.linearGradientTransparent]} style={styles.linearGradient} />
        <LinearGradient pointerEvents='none' colors={[colors.linearGradientTransparent, colors.linearGradientBlack09]} style={[styles.linearGradient, styles.bottomLinearGradient]} />
        <View style={styles.childrenContainer}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShadowContainer;

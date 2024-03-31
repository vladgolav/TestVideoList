import React from 'react';
import { Platform, ViewStyle, View } from 'react-native';
import { BlurViewProps, BlurView as NativeBlurView } from "@react-native-community/blur";

import styles from './styles';

interface IBlurView {
  style: ViewStyle;
  children: React.ReactNode;
};

const BlurView: React.FC<IBlurView & BlurViewProps> = ({ style, children, ...props }) => {
  if (Platform.OS === 'android') {
    return (
      <View style={[style, styles.opacityContainer]}>
        {children}
      </View>
    );
  }

  return (
    <NativeBlurView style={style} {...props}>
      {children}
    </NativeBlurView>
  );
};

export default BlurView;

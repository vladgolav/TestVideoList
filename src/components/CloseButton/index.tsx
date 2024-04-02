import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';

import CloseIcon from 'src/assets/images/CloseIcon.png'
import { navigationRef } from 'src/navigation';

const CloseButton = () => {
  const goBack = () => {
    navigationRef.current?.goBack();
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={15} onPress={goBack}>
        <Image
          source={CloseIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CloseButton;

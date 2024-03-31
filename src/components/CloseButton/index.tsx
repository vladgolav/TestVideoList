import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import CloseIcon from 'src/assets/images/CloseIcon.png'
import { navigationRef } from 'src/navigation';

const CloseButton = () => {
  const goBack = () => {
    navigationRef.current?.goBack();
  };
  
  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <Image
        source={CloseIcon}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default CloseButton;

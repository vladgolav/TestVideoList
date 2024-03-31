import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import CloseIcon from 'src/assets/images/CloseIcon.png'
import { navigationRef } from 'src/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const CloseButton = () => {
  const goBack = () => {
    navigationRef.current?.goBack();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity hitSlop={15} onPress={goBack}>
        <Image
          source={CloseIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CloseButton;

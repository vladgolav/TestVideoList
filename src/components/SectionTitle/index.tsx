import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface ISectionTitle {
  title: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ title }) => (
  <Text style={styles.titleText}>
    {title}
  </Text>
);

export default SectionTitle;

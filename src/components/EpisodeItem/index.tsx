import React from 'react';
import { View, Text } from 'react-native';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';

interface IEpisodeItem {
  episode: IEpisode
};

const EpisodeItem: React.FC<IEpisodeItem> = ({ episode }) => {
  return (
    <View style={styles.contaienr}>
      <Text>{episode.name}</Text>
    </View>
  );
};

export default EpisodeItem;

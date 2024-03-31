import React from 'react';
import { View, Text } from 'react-native';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IEpisodeItem {
  episode: IEpisode;
  shouldPlay: boolean;
};

const EpisodeItem: React.FC<IEpisodeItem> = ({ episode, shouldPlay }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.titleContainer}>
        <View>
          <Text style={styles.nameText}>{episode.name}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EpisodeItem;

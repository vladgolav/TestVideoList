import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import EpisodeItem from 'src/components/EpisodeItem';
import CloseButton from 'src/components/CloseButton';

interface IEpisodesScreen {
  episodes: IEpisode[];
};

const EpisodesScreen: React.FC<IEpisodesScreen> = ({ episodes }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CloseButton />
        {
          episodes.map((item) => (
            <EpisodeItem episode={item} key={item.id} />
          ))
        }
      </View>
    </SafeAreaView>
  );
};

export default EpisodesScreen;

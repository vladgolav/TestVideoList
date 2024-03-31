import React, { RefObject } from 'react';
import { View, Text, ScrollView, FlatList, ViewabilityConfigCallbackPairs } from 'react-native';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import EpisodeItem from 'src/components/EpisodeItem';
import CloseButton from 'src/components/CloseButton';
import ShadowContainer from 'src/components/ShadowContainer';

import styles from './styles';

interface IEpisodesScreen {
  episodes: IEpisode[];
  currentViewableItemIndex: number;
  viewabilityConfigCallbackPairs: RefObject<ViewabilityConfigCallbackPairs>
};

const EpisodesScreen: React.FC<IEpisodesScreen> = ({ episodes, viewabilityConfigCallbackPairs, currentViewableItemIndex }) => {
  const renderItem = ({ item, index } : { item: IEpisode, index: number }) => {
    return (
      <EpisodeItem
        episode={item}
        shouldPlay={index === currentViewableItemIndex}
      />
    );
  };

  return (
    <ShadowContainer>
      <View style={styles.container}>
        <CloseButton />
        <FlatList
          data={episodes}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          pagingEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current || undefined}
        />
      </View>
    </ShadowContainer>
  );
};

export default EpisodesScreen;

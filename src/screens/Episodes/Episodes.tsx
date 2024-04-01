import React, { RefObject } from 'react';
import { View, Text, ScrollView, FlatList, ViewabilityConfigCallbackPairs, Platform } from 'react-native';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import EpisodeItem from 'src/components/EpisodeItem';
import CloseButton from 'src/components/CloseButton';
import ShadowContainer from 'src/components/ShadowContainer';

import styles from './styles';

interface IEpisodesScreen {
  episodes: IEpisode[];
  currentViewableItemIndex: number;
  viewabilityConfigCallbackPairs: RefObject<ViewabilityConfigCallbackPairs>
  setHeight: (value: number) => void;
  height: number;
};

const EpisodesScreen: React.FC<IEpisodesScreen> = ({ episodes, viewabilityConfigCallbackPairs, currentViewableItemIndex, setHeight, height }) => {
  const renderItem = ({ item, index } : { item: IEpisode, index: number }) => {
    return (
      <EpisodeItem
        episode={item}
        shouldPlay={index === currentViewableItemIndex}
        height={height}
      />
    );
  };

  return (
    <ShadowContainer setHeight={setHeight}>
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
          {
            ...Platform.select({
              android: {
                removeClippedSubviews: false
              },
            })
          }
        />
      </View>
    </ShadowContainer>
  );
};

export default EpisodesScreen;

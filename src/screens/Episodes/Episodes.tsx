import React, { Ref, RefObject, forwardRef } from 'react';
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
  inititalScrollIndex: number;
  scrollToIndexCondition: boolean;
};

const EpisodesScreen = ({
  episodes,
  viewabilityConfigCallbackPairs,
  currentViewableItemIndex,
  setHeight,
  height,
  scrollToIndexCondition,
  inititalScrollIndex,
} : IEpisodesScreen, ref: Ref<FlatList>) => {
  const renderItem = ({ item, index } : { item: IEpisode, index: number }) => {
    return (
      <EpisodeItem
        episode={item}
        shouldPlay={index === currentViewableItemIndex}
        height={height}
        key={item.id}
      />
    );
  };

  return (
    <ShadowContainer setHeight={setHeight}>
      <View style={styles.container}>
        <CloseButton />
        <FlatList
          ref={ref}
          data={episodes}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          pagingEnabled
          initialScrollIndex={scrollToIndexCondition ? inititalScrollIndex : 0}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current || undefined}
          onScrollToIndexFailed={() => {}}
          getItemLayout={(data, index) => (
            {length: height, offset: height * index, index}
          )}
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

export default forwardRef(EpisodesScreen);

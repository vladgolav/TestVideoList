import React, { useState, useRef, RefObject, useEffect } from 'react';
import EpisodesScreen from './Episodes';
import useCurrentVideoStore from 'src/store/currentVideo';
import { FlatList } from 'react-native';
import useHistoryStore from 'src/store/history';
import { IVideo } from 'src/interfaces/store/homeStore.interface';

const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

const Episodes = () => {
  const flatlistRef = useRef<FlatList>(null);

  const [height, setHeight] = useState(0);

  const { currentVideo, episodes, continueWatching } = useCurrentVideoStore((state) => ({
    currentVideo: state.currentVideo,
    continueWatching: state.continueWatching,
    episodes: state.currentVideo?.episodes || [],
  }));

  const { lastEpisodeWatched, setLastEpisodeWatched } = useHistoryStore((state) => ({
    lastEpisodeWatched: state.history[currentVideo?.id as number]?.lastEpisodeWatched,
    setLastEpisodeWatched: state.setLastEpisodeWatched,
  }));

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setLastEpisodeWatched(currentVideo as IVideo, viewableItems[0].item.id);
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  }

  const inititalScrollIndex = useRef(episodes.findIndex((item) => item.id === lastEpisodeWatched));
  const scrollToIndexCondition = useRef(inititalScrollIndex.current >= 0 && continueWatching)
  // flatlist methods
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfigCallbackPairs = (useRef([{ viewabilityConfig, onViewableItemsChanged }]));

  return (
    <EpisodesScreen
      ref={flatlistRef}
      episodes={episodes}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
      currentViewableItemIndex={currentViewableItemIndex}
      setHeight={setHeight}
      height={height}
      inititalScrollIndex={inititalScrollIndex.current}
      scrollToIndexCondition={scrollToIndexCondition.current}
    />
  );
};

export default Episodes;

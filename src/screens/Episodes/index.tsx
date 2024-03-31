import React, { useState, useRef, RefObject } from 'react';
import EpisodesScreen from './Episodes';
import useCurrentVideoStore from 'src/store/currentVideo';
import { ViewabilityConfigCallbackPairs } from 'react-native';

const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

const Episodes = () => {
  const { episodes } = useCurrentVideoStore((state) => ({
    episodes: state.currentVideo?.episodes || [],
  }));


  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  }

  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfigCallbackPairs = (useRef([{ viewabilityConfig, onViewableItemsChanged }]));

  return (
    <EpisodesScreen
      episodes={episodes}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
      currentViewableItemIndex={currentViewableItemIndex}
    />
  );
};

export default Episodes;

import React, { useRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import useHistoryStore from 'src/store/history';

import ArrowIcon from 'src/assets/images/ArrowIcon.png';
import styles from './styles';

const ContinueWatchingItem = () => {
  const { lastVideoWatched, history } = useHistoryStore((state) => ({
    lastVideoWatched: state.lastVideoWatched,
    history: state.history,
  }));

  const continueWatchingVideo = useRef(history?.[lastVideoWatched as number]).current;
  console.log('continueWatchingVideo', continueWatchingVideo.video.poster)

  return (
    <TouchableOpacity style={styles.container}>
      <FastImage
        source={{ uri: continueWatchingVideo.video.poster }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.centerContainer}>
        <Text
          style={styles.titleText}
          numberOfLines={1}
        >
          {continueWatchingVideo.video.title}
        </Text>
        {
          continueWatchingVideo.video.subTitle ? (
            <Text
              style={styles.subTitleText}
              numberOfLines={1}
            >
              {continueWatchingVideo.video.subTitle}
            </Text>
          ) : null
        }
      </View>
      <View style={styles.rightContainer}>
        <FastImage
          source={ArrowIcon}
          style={styles.arrowIcon}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ContinueWatchingItem;

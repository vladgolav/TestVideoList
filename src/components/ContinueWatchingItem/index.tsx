import React, { useRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import useHistoryStore from 'src/store/history';

import ArrowIcon from 'src/assets/images/ArrowIcon.png';
import styles from './styles';
import useCurrentVideoStore from 'src/store/currentVideo';

const ContinueWatchingItem = () => {
  const { historyVideo } = useHistoryStore((state) => ({
    historyVideo: state.history[state.lastVideoWatched as number],
  }));

  const { setCurrentVideo } = useCurrentVideoStore((state) => ({
    setCurrentVideo: state.setCurrentVideo,
  }));


  const onPress = () => {
    setCurrentVideo(historyVideo.video, true);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FastImage
        source={{ uri: historyVideo.video.poster }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.centerContainer}>
        <Text
          style={styles.titleText}
          numberOfLines={1}
        >
          {historyVideo.video.title}
        </Text>
        {
          historyVideo.video.subTitle ? (
            <Text
              style={styles.subTitleText}
              numberOfLines={1}
            >
              {historyVideo.video.subTitle}
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

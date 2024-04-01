import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-media-console';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';

interface IEpisodeItem {
  episode: IEpisode;
  shouldPlay: boolean;
  height: number;
};

const EpisodeItem: React.FC<IEpisodeItem> = ({ episode, shouldPlay, height }) => {
  return (
    <View style={[styles.container, { height }]}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.nameText}>{episode.name}</Text>
      </View> */}
      {/* <Video 
        source={{ uri: episode.url }}
        style={{ height, width: '100%' }}
        ignoreSilentSwitch={'ignore'}
        repeat={true}
        paused={!shouldPlay}
        controls={false}
        playInBackground={false}
        playWhenInactive={false}
        resizeMode={'cover'}
      /> */}
      <VideoPlayer
        source={{ uri: episode.url }}
        style={[styles.video, { height }]}
        title={episode.name}
        ignoreSilentSwitch={'ignore'}
        repeat={true}
        paused={!shouldPlay}
        controls={false}
        tapAnywhereToPause
        // alwaysShowControls={true}
        playInBackground={false}
        playWhenInactive={false}
        resizeMode={'cover'}
        disableFullscreen
        disableBack
        disableVolume
        disableSeekButtons
        disableOverlay
        disableTimer
        disablePlayPause
      />
    </View>
  );
};

export default EpisodeItem;

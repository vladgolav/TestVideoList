import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';

interface IEpisodeItem {
  episode: IEpisode;
  shouldPlay: boolean;
  height: number;
};

const EpisodeItem: React.FC<IEpisodeItem> = ({ episode, shouldPlay, height }) => {

  useEffect(() => {
    // if (!videoRef.current) return;

    // if (shouldPlay) {
    //   videoRef.current.play?.();
    // } else {
    //   videoRef.current?.pause?.()
    // }
  }, [shouldPlay])

  return (
    <View style={[styles.container, { height }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.nameText}>{episode.name}</Text>
      </View>
      <Video 
        source={{ uri: episode.url }}
        style={{ height, width: '100%' }}
        ignoreSilentSwitch={'ignore'}
        repeat={true}
        paused={!shouldPlay}
        controls={false}
        playInBackground={false}
        playWhenInactive={false}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default EpisodeItem;

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-media-console';

import { IEpisode, IVideo } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';
import useHistoryStore from 'src/store/history';
import useCurrentVideoStore from 'src/store/currentVideo';

interface IEpisodeItem {
  episode: IEpisode;
  shouldPlay: boolean;
  height: number;
};

const EpisodeItem: React.FC<IEpisodeItem> = ({ episode, shouldPlay, height }) => {
  const { setHistory } = useHistoryStore((state) => ({
    setHistory: state.setHistory,
  }));

  const { currentVideo } = useCurrentVideoStore((state) => ({
    currentVideo: state.currentVideo,
  }));

  const currentTime = useRef(0);

  const onChangeCurrentTime = (curTime: number) => {
    currentTime.current = curTime
  };

  useEffect(() => {
    return () => {
      if (currentTime.current !== 0) {
        setHistory(currentVideo as IVideo, episode.id, currentTime.current);
      }
    };
  }, [shouldPlay]);

  return (
    <View style={[styles.container, { height }]} key={episode.id}>
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
        alwaysShowControls={true}
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
        onChangeCurrentTime={onChangeCurrentTime}
        maxBitRate={20000}
        bufferConfig={{
          minBufferMs: 1500,
          maxBufferMs: 2500,
          bufferForPlaybackMs: 2500,
          bufferForPlaybackAfterRebufferMs: 5000,
        }}
      />
    </View>
  );
};

export default EpisodeItem;

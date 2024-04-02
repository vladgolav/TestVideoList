import React, { memo, useEffect, useRef } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-media-console';
import _ from 'lodash';

import { IEpisode } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';
import useHistoryStore from 'src/store/history';
import useCurrentVideoStore from 'src/store/currentVideo';

interface IEpisodeItem {
  episode: IEpisode;
  shouldPlay: boolean;
  height: number;
};

const EpisodeItem: React.FC<IEpisodeItem> = ({ episode, shouldPlay, height }) => {
  const { currentVideo, continueWatching } = useCurrentVideoStore((state) => ({
    currentVideo: state.currentVideo,
    continueWatching: state.continueWatching,
  }));

  const { setHistory, historySeek = 0 } = useHistoryStore((state) => ({
    setHistory: state.setHistory,
    historySeek: state.history[currentVideo?.id as number]?.[episode.id],
  }));

  const currentTime = useRef(0);
  const videoRef = useRef<Video>(null);

  const setHistoryToStore = _.throttle((duration) => {
    console.log('here', episode.id)
    // setHistory(currentVideo?.id as number, episode.id, duration)
  }, 3000);
  console.log('render')
  const onChangeCurrentTime = (curTime: number) => {
    if (curTime !== 0 && shouldPlay) {
      currentTime.current = curTime;
      setHistoryToStore(curTime);
    }
  };

  const onLoad = () => {
    if (videoRef?.current?.seek && continueWatching) {
      videoRef?.current?.seek(historySeek)
    }
  };

  return (
    <View style={[styles.container, { height }]}>
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
        videoRef={videoRef}
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
        onLoad={onLoad}
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

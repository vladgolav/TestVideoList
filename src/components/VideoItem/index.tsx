import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { IVideo } from 'src/interfaces/store/homeStore.interface';
import styles from './styles';

interface IVideoItem {
  video: IVideo;
};

const VideoItem: React.FC<IVideoItem> = ({ video }) => {
  return (
    <TouchableOpacity>
      <FastImage
        source={{ uri: video.poster }}
        resizeMode='cover'
        style={styles.container}
      >
        <View style={styles.videoTypeContainer}>
          <Text style={styles.videoTypeText}>
            {video.type}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{video.title}</Text>
          <Text style={styles.subTitleText}>{video.subTitle}</Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
}

export default VideoItem;

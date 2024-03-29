import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import FastImage from 'react-native-fast-image';

import { IVideo } from "src/interfaces/store/homeStore.interface";

import styles from './styles';

interface ISectionVideoItem {
  video: IVideo;
};

const SectionVideoItem: React.FC<ISectionVideoItem> = ({ video }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FastImage
        source={{ uri: video.poster }}
        resizeMode='cover'
        style={styles.poster}
      />
      <Text style={styles.titleText}>
        {video.title}
      </Text>
    </TouchableOpacity>
  );
};

export default SectionVideoItem;

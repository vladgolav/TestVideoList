import React, { useMemo } from 'react';
import { TouchableOpacity, Text, View, Platform } from "react-native";
import FastImage from 'react-native-fast-image';
import dayjs from 'dayjs';

import LockIcon from 'src/assets/images/LockIcon.png';

import { IVideo } from "src/interfaces/store/homeStore.interface";

import BlurView from '../BlurView';
import styles from './styles';

interface ISectionVideoItem {
  video: IVideo;
};

const SectionVideoItem: React.FC<ISectionVideoItem> = ({ video }) => {
  const BlurViewComponent = useMemo(() => {
    if (video.commingSoon) {
      return (
        <View style={styles.blurView}>
          <BlurView style={styles.lockIconContainer} blurType='light' blurAmount={20} overlayColor='transparent'>
            <FastImage
              source={LockIcon}
              style={styles.lockIcon}
              resizeMode='contain'
            />
          </BlurView>
        </View>
      )
    }
    return null;
  }, []);

  const BlurRadius = useMemo(() => {
    if (!video.commingSoon) return 0;

    return Platform.OS === 'ios' ? 50 : 20;
  }, []);

  const CommintSoonComponent = useMemo(() => {
    if (video.commingSoon) {
      const commingSoonText = (dayjs(video.commingSoon).format('MMMM D')).toUpperCase();
      return <Text style={styles.commingSoonText}>COMMING {commingSoonText}</Text>
    }

    return null;
  }, []);

  return (
    <>
      <TouchableOpacity disabled={!!video.commingSoon} style={styles.container}>
        <FastImage
          source={{ uri: video.poster }}
          resizeMode='stretch'
          style={styles.poster}
          blurRadius={BlurRadius}
        />
        {BlurViewComponent}
        {CommintSoonComponent}
        <Text style={styles.titleText}>
          {video.title}
        </Text>
      </TouchableOpacity>

    </>
  );
};

export default SectionVideoItem;

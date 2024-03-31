import React from 'react';
import { View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ISection, IVideo, SectionsType, VideosType } from 'src/interfaces/store/homeStore.interface';

import VideoItem from 'src/components/VideoItem';
import { colors } from 'src/constants/colors';
import styles from './styles';
import SectionItem from 'src/components/SectionItem';

interface IHomeScreen {
  loading: boolean;
  onRefresh: () => void;
  sections: SectionsType;
  videoList: VideosType;
};

const HomeScreen: React.FC<IHomeScreen> = ({
  loading,
  onRefresh,
  sections,
  videoList,
}) => {

  const renderVideoItem = ({ item } : { item: IVideo }) => (
    <VideoItem
      video={item}
    />
  );

  const renderSectionItem = ({ item } : { item: ISection }) => (
    <SectionItem
      section={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
            tintColor={colors.white}
            colors={[colors.black]}
          />
        }
      >
        <FlatList
          ListHeaderComponent={<View style={styles.spaceFlatList} />}
          ListFooterComponent={<View style={styles.spaceFlatList} />}
          data={videoList}
          renderItem={renderVideoItem}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <FlatList
          data={sections}
          renderItem={renderSectionItem}
          keyExtractor={(item) => `${item.id}`}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React, { useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { SectionsType, VideosType } from 'src/interfaces/store/homeStore.interface';

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

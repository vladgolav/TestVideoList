import React from 'react';
import { Text, FlatList, View } from 'react-native';

import { ISection, IVideo } from 'src/interfaces/store/homeStore.interface';
import SectionVideoItem from '../SectionVideoItem';

import styles from './styles';

interface ISectionItem {
  section: ISection;
};

const SectionItem: React.FC<ISectionItem> = ({ section }) => {
  const renderSectionVideoItem = ({ item } : { item: IVideo }) => (
    <SectionVideoItem
      video={item}
    />
  );

  return (
    <>
      <Text style={styles.titleText}>
        {section.title}
      </Text>
      <FlatList
        ListHeaderComponent={<View style={styles.spaceFlatList} />}
        ListFooterComponent={<View style={styles.spaceFlatList} />}
        data={section.videos}
        renderItem={renderSectionVideoItem}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        style={styles.flatlist}
        horizontal
      />
    </>
  );
};

export default SectionItem;

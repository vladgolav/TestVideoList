import React from 'react';
import { FlatList, View } from 'react-native';

import { ISection, IVideo } from 'src/interfaces/store/homeStore.interface';
import SectionVideoItem from '../SectionVideoItem';

import styles from './styles';
import SectionTitle from '../SectionTitle';

interface ISectionItem {
  section: ISection;
}

const SectionItem: React.FC<ISectionItem> = ({ section }) => {
  const renderSectionVideoItem = ({ item } : { item: IVideo }) => (
    <SectionVideoItem
      video={item}
    />
  );

  return (
    <>
      <SectionTitle title={section.title} />
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

import { Alert } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

import { IHomeStore, ISection, VideosType, ISectionParameter, SectionsType } from 'src/interfaces/store/homeStore.interface';
import zustandStorage from 'src/utils/zustandPersistMmkv';
import { getVideoList } from 'src/utils/getVideoList';

const useHomeStore = create<IHomeStore>()(persist((set) => ({
  sections: [],
  videoList: [],
  videos: [],
  loading: false,
  fetchInfo: async () => {
    try {
      set(() => ({ loading: true }));
      await remoteConfig().fetch(0);
      
      const resFeatchAndActive = await remoteConfig().fetchAndActivate();
      
      if (resFeatchAndActive) {
        const parameters = remoteConfig().getAll();
        const videos = JSON.parse(parameters.videos?.asString() || '[]') as VideosType;
        const videoListParameter = JSON.parse(parameters.videoList?.asString() || '[]') as number[];
        const sectionsParameter = JSON.parse(parameters.sections?.asString() || '{}') as ISectionParameter;

        const videoList = getVideoList(videoListParameter, videos);

        const sections = sectionsParameter.order?.reduce((acc: SectionsType, item: string) => {
          if (sectionsParameter?.sectionList[item]) {
            acc = acc.concat({
              ...sectionsParameter?.sectionList[item],
              videos: getVideoList(sectionsParameter?.sectionList?.[item]?.videos, videos),
            });
          }

          return acc;
        }, [])

        set(() => ({
          videos,
          videoList,
          sections,
        }));
        
      }
    } catch (error) {
      Alert.alert('Something went wrong');
    } finally {
      set(() => ({ loading: false }));
    }
  },
}),
{
  name: 'home-storage',
  storage: createJSONStorage(() => zustandStorage),
}));

export default useHomeStore;

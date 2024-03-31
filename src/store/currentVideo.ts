import { create } from 'zustand';

import { NavigationScreens } from 'src/interfaces/global.interface';
import { navigationRef } from 'src/navigation';
import { ICurrentVideoStore } from 'src/interfaces/currentVideoStore.interface';
import { IVideo } from 'src/interfaces/store/homeStore.interface';


const useCurrentVideoStore = create<ICurrentVideoStore>()((set) => ({
  currentVideo: null,
  setCurrentVideo: (currentVideo) => {
    set(() => ({
      currentVideo,
    }));
    navigationRef.current?.navigate(NavigationScreens.Episodes);
  }
}));

export default useCurrentVideoStore;

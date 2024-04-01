import { create } from 'zustand';

import { NavigationScreens } from 'src/interfaces/global.interface';
import { navigationRef } from 'src/navigation';
import { ICurrentVideoStore } from 'src/interfaces/store/currentVideoStore.interface';


const useCurrentVideoStore = create<ICurrentVideoStore>()((set) => ({
  currentVideo: null,
  setCurrentVideo: (currentVideo, params) => {
    set(() => ({
      currentVideo,
    }));
    navigationRef.current?.navigate(NavigationScreens.Episodes, params);
  }
}));

export default useCurrentVideoStore;

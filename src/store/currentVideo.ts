import { create } from 'zustand';

import { NavigationScreens } from 'src/interfaces/global.interface';
import { navigationRef } from 'src/navigation';
import { ICurrentVideoStore } from 'src/interfaces/store/currentVideoStore.interface';


const useCurrentVideoStore = create<ICurrentVideoStore>()((set) => ({
  currentVideo: null,
  continueWatching: false,
  setCurrentVideo: (currentVideo, continueWatching = false) => {
    set(() => ({
      currentVideo,
      continueWatching,
    }));
    navigationRef.current?.navigate(NavigationScreens.Episodes);
  }
}));

export default useCurrentVideoStore;

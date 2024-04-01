import { create } from 'zustand';

import { IHistoryStore } from 'src/interfaces/store/historyStore.interface';
import { createJSONStorage, persist } from 'zustand/middleware';
import zustandStorage from 'src/utils/zustandPersistMmkv';

const useHistoryStore = create<IHistoryStore>()(persist((set) => ({
  history: {},
  lastVideoWatched: null,
  setHistory: (video, episodeId, duration) => {
    set((state) => ({
      lastVideoWatched: video.id,
      history: {
        ...state.history,
        [video.id]: {
          ...state.history[video.id],
          video,
          [episodeId]: duration,
        },
      }
    }));
  },
}), {
  name: 'history-storage',
  storage: createJSONStorage(() => zustandStorage),
}));

export default useHistoryStore;

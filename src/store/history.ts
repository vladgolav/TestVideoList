import { create } from 'zustand';

import { IHistoryStore } from 'src/interfaces/store/historyStore.interface';
import { createJSONStorage, persist } from 'zustand/middleware';
import zustandStorage from 'src/utils/zustandPersistMmkv';

const useHistoryStore = create<IHistoryStore>()(persist((set) => ({
  history: {},
  lastVideoWatched: null,
  setHistory: (videoId, episodeId, duration) => {
    set((state) => ({
      lastVideoWatched: videoId,
      history: {
        ...state.history,
        [videoId]: {
          ...state.history[videoId],
          [episodeId]: duration,
        },
      }
    }));
  },
  setLastEpisodeWatched: (video, episodeId) => {
    set((state) => ({
      lastVideoWatched: video.id,
      history: {
        ...state.history,
        [video.id]: {
          ...state.history[video.id],
          video,
          lastEpisodeWatched: episodeId,
        },
      }
    }));
  },
}), {
  name: 'history-storage',
  storage: createJSONStorage(() => zustandStorage),
}));

export default useHistoryStore;

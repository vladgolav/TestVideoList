import { IVideo } from "./homeStore.interface";

// export interface IHistoryEpisodes extends IEpisode {
//   duration: number;
// };

// export interface IHistoryVideo extends IVideo {
//   episodes: IHistoryEpisodes[];
// };

export interface IHistory {
  [key: number]: {
    video: IVideo;
    lastEpisodeWatched: number;
    [key: number]: number;
  }
};


export interface IHistoryStore {
  history: IHistory;
  lastVideoWatched: number | null;
  setHistory: (videoId: number, episodeId: number, duration: number) => void;
  setLastEpisodeWatched: (video: IVideo, episodeId: number) => void
};

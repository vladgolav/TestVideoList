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
    [key: number]: number;
  }
};


export interface IHistoryStore {
  history: IHistory;
  lastVideoWatched: number | null;
  setHistory: (video: IVideo, episodeId: number, duration: number) => void;
};

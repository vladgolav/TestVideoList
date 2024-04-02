import { IVideo } from "./homeStore.interface";

export interface ICurrentVideoStore {
  currentVideo: IVideo | null;
  continueWatching: boolean;
  setCurrentVideo: (currentVideo: IVideo | null, continueWatching?: boolean) => void;
};

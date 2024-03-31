import { IVideo } from "./store/homeStore.interface";

export interface ICurrentVideoStore {
  currentVideo: IVideo | null;
  setCurrentVideo: (currentVideo: IVideo | null) => void;
};

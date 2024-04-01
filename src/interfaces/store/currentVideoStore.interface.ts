import { IVideo } from "./homeStore.interface";

export interface ICurrentVideoStore {
  currentVideo: IVideo | null;
  setCurrentVideo: (currentVideo: IVideo | null, params?: object) => void;
};

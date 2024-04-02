export interface IEpisode {
  id: number;
  name: string;
  url: string;
}

export interface IVideo {
  id: number;
  title: string;
  commingSoon: Date | null;
  type: string;
  subTitle: string | null;
  poster: string;
  episodes: Array<IEpisode>;
}

export type VideosType = Array<IVideo>;

export interface ISection {
  id: number;
  title: string;
  videos: VideosType;
}

export type SectionsType = Array<ISection>;

export interface IHomeStore {
  sections: SectionsType;
  videoList: VideosType;
  videos: VideosType;
  loading: boolean;
  fetchInfo: () => Promise<void>;
}

export type SectionListType = ISection & {
  videos: number[];
}

export interface ISectionParameter {
  order: string[],
  sectionList: {
    [key: string]: SectionListType
  }
}

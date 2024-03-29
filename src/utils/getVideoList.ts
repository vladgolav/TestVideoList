import { VideosType } from "src/interfaces/store/homeStore.interface";

export const getVideoList = (videoList: number[], videos: VideosType) => 
  videoList.reduce((acc: VideosType, item) => {
    const video = videos.find(_ => _.id === item);
    if (video?.id) {
      acc = acc.concat(video);
    }

    return acc;
  }, []);
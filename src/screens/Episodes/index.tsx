import React from 'react';
import EpisodesScreen from './Episodes';
import useCurrentVideoStore from 'src/store/currentVideo';

const Episodes = () => {
  const { episodes } = useCurrentVideoStore((state) => ({
    episodes: state.currentVideo?.episodes || [],
  }));

  return (
    <EpisodesScreen
      episodes={episodes}
    />
  );
};

export default Episodes;

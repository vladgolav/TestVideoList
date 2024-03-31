import React, { useEffect } from 'react';

import HomeScreen from './Home';
import useHomeStore from 'src/store/home';

const Home = () => {
  const { fetchInfo, loading, sections, videoList } = useHomeStore((state) => ({
    fetchInfo: state.fetchInfo,
    loading: state.loading,
    sections: state.sections,
    videoList: state.videoList,
  }));
  
  useEffect(() => {
    fetchInfo();
  }, []);

  const onRefresh = () => {
    fetchInfo();
  };

  return (
    <HomeScreen
      loading={loading}
      onRefresh={onRefresh}
      sections={sections}
      videoList={videoList}
    />
  );
};

export default Home;

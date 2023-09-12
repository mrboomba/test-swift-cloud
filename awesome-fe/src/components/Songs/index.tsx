import * as React from 'react';
import { useGetSongsQuery } from '../../generated/graphql';
import Songs from './Songs';

const SongsContainer = () => {
  const { data, error, loading } = useGetSongsQuery();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <Songs data={data} />;
};

export default SongsContainer;
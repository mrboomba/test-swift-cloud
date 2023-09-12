import * as React from 'react';
import { SortOrder, useGetPopularSongsQuery} from '../../generated/graphql';
import Popular from './Popular';
import { Stack } from '@mui/material';

const PopularContainer = () => {
  const june = useGetPopularSongsQuery({variables:{orderBy:{PlaysJune:SortOrder.Desc},skip:0,take:10}});
  const july = useGetPopularSongsQuery({variables:{orderBy:{PlaysJuly:SortOrder.Desc},skip:0,take:10}});
  const august = useGetPopularSongsQuery({variables:{orderBy:{PlaysAugust:SortOrder.Desc},skip:0,take:10}});

  if (june.loading && july.loading && august.loading) {
    return <div>Loading...</div>;
  }

  if (june.error && july.error && august.error) {
    return <div>ERROR</div>;
  }

  if (!(june.data && july.data && august.data)) {
    return <div>Can't find matched song</div>;
  }

  return <div style={{ padding: "5px",display:"flex", justifyContent:"center" }}>
 
    <Popular data={june.data} month='June' />
    <Popular data={july.data} month='July'/>
    <Popular data={august.data} month='August'/>
  
  </div>;
};

export default PopularContainer;
import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query getPopularSongs($orderBy: SongOrderByInput! $skip: Int $take: Int) {
    getSongs(orderBy: $orderBy,skip: $skip,take:$take) {
      Song
      Year
      Album
      PlaysJune
      PlaysJuly
      PlaysAugust
    }
  }
`;
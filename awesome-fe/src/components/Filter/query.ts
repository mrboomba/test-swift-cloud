import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query getSongsWithFilter($where: SongWhereInput!) {
    getSongs(where: $where) {
      Song
      Year
      Album
    }
  }
`;
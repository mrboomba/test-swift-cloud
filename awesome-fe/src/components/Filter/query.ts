import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query getSongsWithFilter($where: SongWhereInput!) {
    getsongs(where: $where) {
      Song
      Year
      Album
    }
  }
`;
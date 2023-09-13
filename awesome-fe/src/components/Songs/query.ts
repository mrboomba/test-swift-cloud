import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  query getSongs {
    getSongs {
      Song
      Year
      Album
    }
  }
`;

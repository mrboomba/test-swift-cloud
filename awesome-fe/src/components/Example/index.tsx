import * as React from 'react';
import { SortOrder, useGetPopularSongsQuery } from '../../generated/graphql';
import { Stack } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const ExampleContainer = () => {
  return <div style={{ padding: "5px" }}>
    <h3> Get All Song With no filter </h3>
    <CodeBlock
      text={`query getSongs {
      getSongs {
        Song
        Year
        Album
      }
    }
  `}
      wrapLongLines
    />
    <h3> Get All Song With filter </h3>
    <CodeBlock
      text={`
      query getSongsWithFilter($where: SongWhereInput!) {
        getSongs(where: $where) {
          Song
          Year
          Album
        }
      }
    `}
      wrapLongLines
    />
    <h3> Get Popular song </h3>
    <CodeBlock
      text={`
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
    `}
      wrapLongLines
    />


  </div>;
};

export default ExampleContainer;
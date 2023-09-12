/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getsongs?: Maybe<Array<Maybe<Song>>>;
};


export type QueryGetsongsArgs = {
  orderBy?: InputMaybe<SongOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SongWhereInput>;
};

export type Song = {
  __typename?: 'Song';
  Album?: Maybe<Scalars['String']['output']>;
  Artist?: Maybe<Scalars['String']['output']>;
  PlaysAugust?: Maybe<Scalars['Int']['output']>;
  PlaysJuly?: Maybe<Scalars['Int']['output']>;
  PlaysJune?: Maybe<Scalars['Int']['output']>;
  Song?: Maybe<Scalars['String']['output']>;
  Writer?: Maybe<Scalars['String']['output']>;
  Year?: Maybe<Scalars['Int']['output']>;
};

export type SongOrderByInput = {
  PlaysAugust?: InputMaybe<SortOrder>;
  PlaysJuly?: InputMaybe<SortOrder>;
  PlaysJune?: InputMaybe<SortOrder>;
  Year?: InputMaybe<SortOrder>;
};

export type SongWhereInput = {
  Album?: InputMaybe<Scalars['String']['input']>;
  Song?: InputMaybe<Scalars['String']['input']>;
  Year?: InputMaybe<Scalars['Int']['input']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GetSongsWithFilterQueryVariables = Exact<{
  where: SongWhereInput;
}>;


export type GetSongsWithFilterQuery = { __typename?: 'Query', getsongs?: Array<{ __typename?: 'Song', Song?: string | null, Year?: number | null, Album?: string | null } | null> | null };

export type GetPopularSongsQueryVariables = Exact<{
  orderBy: SongOrderByInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPopularSongsQuery = { __typename?: 'Query', getsongs?: Array<{ __typename?: 'Song', Song?: string | null, Year?: number | null, Album?: string | null, PlaysJune?: number | null, PlaysJuly?: number | null, PlaysAugust?: number | null } | null> | null };

export type GetSongsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSongsQuery = { __typename?: 'Query', getsongs?: Array<{ __typename?: 'Song', Song?: string | null, Year?: number | null, Album?: string | null } | null> | null };


export const GetSongsWithFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSongsWithFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SongWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getsongs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Song"}},{"kind":"Field","name":{"kind":"Name","value":"Year"}},{"kind":"Field","name":{"kind":"Name","value":"Album"}}]}}]}}]} as unknown as DocumentNode<GetSongsWithFilterQuery, GetSongsWithFilterQueryVariables>;


/**
 * __useGetSongsWithFilterQuery__
 *
 * To run a query within a React component, call `useGetSongsWithFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsWithFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsWithFilterQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSongsWithFilterQuery(baseOptions: Apollo.QueryHookOptions<GetSongsWithFilterQuery, GetSongsWithFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongsWithFilterQuery, GetSongsWithFilterQueryVariables>(GetSongsWithFilterDocument, options);
      }
export function useGetSongsWithFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongsWithFilterQuery, GetSongsWithFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongsWithFilterQuery, GetSongsWithFilterQueryVariables>(GetSongsWithFilterDocument, options);
        }
export type GetSongsWithFilterQueryHookResult = ReturnType<typeof useGetSongsWithFilterQuery>;
export type GetSongsWithFilterLazyQueryHookResult = ReturnType<typeof useGetSongsWithFilterLazyQuery>;
export type GetSongsWithFilterQueryResult = Apollo.QueryResult<GetSongsWithFilterQuery, GetSongsWithFilterQueryVariables>;
export const GetPopularSongsDocument = gql`
    query getPopularSongs($orderBy: SongOrderByInput!, $skip: Int, $take: Int) {
  getsongs(orderBy: $orderBy, skip: $skip, take: $take) {
    Song
    Year
    Album
    PlaysJune
    PlaysJuly
    PlaysAugust
  }
}
    `;

/**
 * __useGetPopularSongsQuery__
 *
 * To run a query within a React component, call `useGetPopularSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularSongsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetPopularSongsQuery(baseOptions: Apollo.QueryHookOptions<GetPopularSongsQuery, GetPopularSongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularSongsQuery, GetPopularSongsQueryVariables>(GetPopularSongsDocument, options);
      }
export function useGetPopularSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularSongsQuery, GetPopularSongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularSongsQuery, GetPopularSongsQueryVariables>(GetPopularSongsDocument, options);
        }
export type GetPopularSongsQueryHookResult = ReturnType<typeof useGetPopularSongsQuery>;
export type GetPopularSongsLazyQueryHookResult = ReturnType<typeof useGetPopularSongsLazyQuery>;
export type GetPopularSongsQueryResult = Apollo.QueryResult<GetPopularSongsQuery, GetPopularSongsQueryVariables>;
export const GetSongsDocument = gql`
    query getSongs {
  getsongs {
    Song
    Year
    Album
  }
}
    `;

/**
 * __useGetSongsQuery__
 *
 * To run a query within a React component, call `useGetSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSongsQuery(baseOptions?: Apollo.QueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
      }
export function useGetSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
        }
export type GetSongsQueryHookResult = ReturnType<typeof useGetSongsQuery>;
export type GetSongsLazyQueryHookResult = ReturnType<typeof useGetSongsLazyQuery>;
export type GetSongsQueryResult = Apollo.QueryResult<GetSongsQuery, GetSongsQueryVariables>;
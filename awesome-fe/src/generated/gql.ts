/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getSongsWithFilter($where: SongWhereInput!) {\n    getSongs(where: $where) {\n      Song\n      Year\n      Album\n    }\n  }\n": types.GetSongsWithFilterDocument,
    "\n  query getPopularSongs($orderBy: SongOrderByInput! $skip: Int $take: Int) {\n    getSongs(orderBy: $orderBy,skip: $skip,take:$take) {\n      Song\n      Year\n      Album\n      PlaysJune\n      PlaysJuly\n      PlaysAugust\n    }\n  }\n": types.GetPopularSongsDocument,
    "\n  query getSongs {\n    getSongs {\n      Song\n      Year\n      Album\n    }\n  }\n": types.GetSongsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSongsWithFilter($where: SongWhereInput!) {\n    getSongs(where: $where) {\n      Song\n      Year\n      Album\n    }\n  }\n"): (typeof documents)["\n  query getSongsWithFilter($where: SongWhereInput!) {\n    getSongs(where: $where) {\n      Song\n      Year\n      Album\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPopularSongs($orderBy: SongOrderByInput! $skip: Int $take: Int) {\n    getSongs(orderBy: $orderBy,skip: $skip,take:$take) {\n      Song\n      Year\n      Album\n      PlaysJune\n      PlaysJuly\n      PlaysAugust\n    }\n  }\n"): (typeof documents)["\n  query getPopularSongs($orderBy: SongOrderByInput! $skip: Int $take: Int) {\n    getSongs(orderBy: $orderBy,skip: $skip,take:$take) {\n      Song\n      Year\n      Album\n      PlaysJune\n      PlaysJuly\n      PlaysAugust\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSongs {\n    getSongs {\n      Song\n      Year\n      Album\n    }\n  }\n"): (typeof documents)["\n  query getSongs {\n    getSongs {\n      Song\n      Year\n      Album\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
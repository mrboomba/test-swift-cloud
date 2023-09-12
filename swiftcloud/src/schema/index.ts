import { PrismaClient } from '@prisma/client';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLEnumType, GraphQLList } from 'graphql';

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const prisma = new PrismaClient()
const Song = new GraphQLObjectType({
    name: 'Song',
    fields: {
        Song: { type: GraphQLString },
        Artist: { type: GraphQLString },
        Writer: { type: GraphQLString },
        Album: { type: GraphQLString },
        Year: { type: GraphQLInt },
        PlaysJune: { type: GraphQLInt },
        PlaysJuly: { type: GraphQLInt },
        PlaysAugust: { type: GraphQLInt },
    },
})
const SortOrder = new GraphQLEnumType({
    name: 'SortOrder',
    values: {
        ASC: { value: "asc" },
        DESC: { value: "desc" }
    }
});
const SongOrderByInput = new GraphQLInputObjectType({
    name: "SongOrderByInput",
    fields: {
        Year: { type: SortOrder },
        PlaysJune: { type: SortOrder },
        PlaysJuly: { type: SortOrder },
        PlaysAugust: { type: SortOrder },
    }
})
const SongWhereInput = new GraphQLInputObjectType({
    name: "SongWhereInput",
    fields: {
        Song: { type: GraphQLString },
        Album: { type: GraphQLString },
    }
})
export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            getsongs: {
                type: new GraphQLList(Song),
                args: {
                    orderBy:{type: SongOrderByInput},
                    skip:{type: GraphQLInt},
                    take: {type: GraphQLInt},
                    where: {type: SongWhereInput}
                },
                resolve: async (_, { orderBy, skip, take, where }) => {
                    try {
                        const songs = await prisma.song.findMany({
                            orderBy: orderBy,
                            where: where
                                ? {
                                    AND: [
                                        {
                                            Song: {
                                                contains: where.Song,
                                            },
                                        },
                                        {
                                            Album: {
                                                contains: where.Album,
                                            },
                                        },
                                    ],
                                }
                                : undefined,
                            skip: skip,
                            take: take,
                        });                        
                        return songs
                    } catch (e) {
                        console.error('error:', e)
                    }

                },
            },
            
        },
    }),
    types: [
        Song,
        SortOrder,
        SongOrderByInput,
        SongWhereInput
    ],

});
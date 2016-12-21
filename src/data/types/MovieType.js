/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';

const MovieImageType = new ObjectType({
  name: 'MovieImage',
  fields: {
    small: { type: new NonNull(StringType) },
    large: { type: new NonNull(StringType) },
    medium: { type: new NonNull(StringType) },
  },
});

const MovieRatingType = new ObjectType({
  name: 'MovieRating',
  fields: {
    max: { type: new NonNull(StringType) },
    average: { type: new NonNull(StringType) },
    stars: { type: new NonNull(StringType) },
    min: { type: new NonNull(StringType) },
  },
});

const MovieDirectorType = new ObjectType({
  name: 'MovieDirector',
  fields: {
    name: { type: new NonNull(StringType) },
    alt: { type: StringType },
    avatars: { type: MovieImageType },
  },
});



const MovieType = new ObjectType({
  name: 'Movie',
  fields: {
    title: { type: new NonNull(StringType) },
    alt: { type: new NonNull(StringType) },
    original_title: { type: new NonNull(StringType) },
    year: { type: StringType },
    images: { type: MovieImageType },
    rating: { type: MovieRatingType },
    directors: { type: new List(MovieDirectorType) },
  },
});

export default MovieType;

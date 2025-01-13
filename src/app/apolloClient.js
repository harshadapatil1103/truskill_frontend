"use client";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://145.223.18.76:1337/graphql', // Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

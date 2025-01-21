"use client";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://strapi.truskill.in/graphql', // Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

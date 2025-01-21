"use client";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://strapi.truskill.in/graphql', // Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

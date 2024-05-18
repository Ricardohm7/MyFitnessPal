import { Stack } from 'expo-router';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://aljandab.us-east-a.ibm.stepzen.net/api/flabby-quetzal/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "apikey aljandab::local.net+1000::6576ceab3ccd97a7da12f9e92b26e4e0d3dcf5816f5be030bfc28820bf1e36a4"
  }
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  )
}

export default RootLayout;
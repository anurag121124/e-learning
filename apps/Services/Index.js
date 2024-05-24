import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

export const getAllProducts = async () => {
  const GET_ALL_PRODUCTS = gql`
    query GetAllProducts {
      getAllProducts {
        id
        name
        price
        description
        image
      }
    }
  `;

  try {
    const { data } = await client.query({
      query: GET_ALL_PRODUCTS
    });
    return data.getAllProducts;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

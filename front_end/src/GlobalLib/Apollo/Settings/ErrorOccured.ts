import { onError } from "@apollo/client/link/error";

export default onError(({ graphQLErrors, networkError }) => {
  graphQLErrors &&
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  networkError && console.log(`[Network error]: ${networkError}`);
});

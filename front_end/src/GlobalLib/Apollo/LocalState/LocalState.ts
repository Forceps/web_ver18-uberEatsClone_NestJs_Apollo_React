import authResolver from "./auth/authResolver";
import { InMemoryCache } from "@apollo/client/cache";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return Boolean(localStorage.getItem("token"));
          },
        },
      },
    },
  },
});

export const resolvers = {
  Mutation: {
    ...authResolver.Mutation,
  },
};

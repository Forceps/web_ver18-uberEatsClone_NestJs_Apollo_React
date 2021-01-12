import { InMemoryCache, makeVar } from "@apollo/client/cache";
import { LOCALSTORAGE_TOKEN } from "./constants";

export const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

console.log("default value of isLoggedInVar is:", isLoggedInVar());
console.log("default value of authTokenVar is:", authTokenVar());

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar;
          },
        },
        token: {
          read() {
            return authTokenVar;
          },
        },
      },
    },
  },
});

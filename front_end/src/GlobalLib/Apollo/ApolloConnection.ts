import { ApolloClient, ApolloLink } from "@apollo/client";
import { cache, resolvers } from "./LocalState/LocalState";
import requestContext from "./apolloSetting/requestContext";
import ErrorOccured from "./apolloSetting/ErrorOccured";
import BackendWay from "./apolloSetting/BackendWay";

export const client = new ApolloClient({
  link: ApolloLink.from([ErrorOccured, requestContext, BackendWay]),
  cache,
  resolvers,
});

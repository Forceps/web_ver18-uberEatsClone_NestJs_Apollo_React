import { ApolloClient, ApolloLink } from "@apollo/client";
import { cache, resolvers } from "./LocalState/LocalState";
import ErrorOccured from "./Settings/ErrorOccured";
import BackendWay from "./Settings/BackendWay";
import requestContext from "./Settings/RequestContext";

export const client = new ApolloClient({
  link: ApolloLink.from([ErrorOccured, requestContext, BackendWay]),
  cache,
  resolvers,
});

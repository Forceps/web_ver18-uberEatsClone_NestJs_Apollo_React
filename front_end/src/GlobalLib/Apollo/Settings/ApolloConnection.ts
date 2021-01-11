import { ApolloClient, ApolloLink } from "@apollo/client";
import { cache, resolvers } from "../LocalState/LocalState";
import ErrorOccured from "./ErrorOccured";
import BackendWay from "./BackendWay";
import requestContext from "./RequestContext";

export const client = new ApolloClient({
  link: ApolloLink.from([ErrorOccured, requestContext, BackendWay]),
  cache,
  resolvers,
});

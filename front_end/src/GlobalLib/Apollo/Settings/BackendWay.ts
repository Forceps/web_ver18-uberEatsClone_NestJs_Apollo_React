import { HttpLink, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const PORT = 4000;
export const http_BackEnd = `http://127.0.0.1:${PORT}/graphql`;
export const webSoket_BackEnd = `ws://127.0.0.1:${PORT}/graphql`;
export const jwt_header = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
const httpLink = new HttpLink({
  uri: http_BackEnd,
});
const wsLink = new WebSocketLink({
  uri: webSoket_BackEnd,
  options: {
    connectionParams: jwt_header,
    reconnect: true,
  },
});
export default split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

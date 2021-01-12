import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../../ApolloTypes/meQuery";

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const useMe = () => useQuery<meQuery>(ME_QUERY);

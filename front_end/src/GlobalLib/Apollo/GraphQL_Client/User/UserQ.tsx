import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../../ApolloTypes/meQuery";
import { RESTAURANT_FRAGMENT } from "../Restaurant/RestaurantQ";

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
      restaurant {
        ...RestaurantParts
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const useMe = () => useQuery<meQuery>(ME_QUERY);

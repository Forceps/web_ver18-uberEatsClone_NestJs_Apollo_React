import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../../ApolloTypes/meQuery";
import { DISH_FRAGMENT } from "../Dish/DishQ";
import { ORDERS_FRAGMENT } from "../Order/OrderQ";
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
        dish {
          ...DishParts
        }
        order {
          ...OrderParts
        }
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
  ${DISH_FRAGMENT}
  ${ORDERS_FRAGMENT}
`;

export const useMe = () => useQuery<meQuery>(ME_QUERY);

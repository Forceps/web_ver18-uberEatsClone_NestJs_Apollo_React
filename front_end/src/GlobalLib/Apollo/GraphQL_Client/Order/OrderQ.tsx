import { gql } from "@apollo/client";

export const ORDERS_FRAGMENT = gql`
  fragment OrderParts on order {
    id
    createdAt
    total
  }
`;

export const GET_ORDER = gql`
  query getOrder($input: GetOrderInput!) {
    getOrder(input: $input) {
      ok
      error
      order {
        id
        status
        total
        user_order_driverTouser {
          email
        }
        user_order_customerTouser {
          email
        }
        restaurant_orderTorestaurant {
          name
        }
      }
    }
  }
`;

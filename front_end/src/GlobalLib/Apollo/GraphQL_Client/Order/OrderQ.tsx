import { gql } from "@apollo/client";

export const ORDERS_FRAGMENT = gql`
  fragment OrderParts on order {
    id
    createdAt
    total
  }
`;

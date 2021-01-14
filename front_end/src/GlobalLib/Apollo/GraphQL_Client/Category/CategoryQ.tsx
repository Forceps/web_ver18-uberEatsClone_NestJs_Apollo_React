import { gql } from "@apollo/client";
import { RESTAURANT_FRAGMENT } from "../Restaurant/RestaurantQ";

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryParts on category {
    id
    name
    coverImg
    slug
    restaurantCount
    restaurant {
      ...RestaurantParts
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const CATEGORY_QUERY = gql`
  query category($input: CategoryInput!) {
    category(input: $input) {
      ok
      error
      totalPages
      totalResults
      category {
        ...CategoryParts
      }
    }
  }
  ${CATEGORY_FRAGMENT}
`;

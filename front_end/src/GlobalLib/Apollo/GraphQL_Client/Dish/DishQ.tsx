import { gql } from "@apollo/client";

export const DISH_FRAGMENT = gql`
  fragment DishParts on dish {
    id
    name
    price
    photo
    description
    options {
      name
      extra
      choice {
        name
        extra
      }
    }
  }
`;

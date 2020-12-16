import { gql } from "@apollo/client";

export const MAKE_GROUPS = gql`
  mutation makeGroups(
    $name: String!
    $purpose: String!
    $participation_system: String!
    $withdrawal_system: String!
    $identiti_back_img: String
    $identiti_profile_img: String
  ) {
    makeGroups(
      name: $name
      purpose: $purpose
      participation_system: $participation_system
      withdrawal_system: $withdrawal_system
      identiti_back_img: $identiti_back_img
      identiti_profile_img: $identiti_profile_img
    )
  }
`;

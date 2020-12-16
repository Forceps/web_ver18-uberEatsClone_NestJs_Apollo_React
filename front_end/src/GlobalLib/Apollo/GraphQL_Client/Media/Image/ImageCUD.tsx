import { gql } from "@apollo/client";

export const IMG_UPLOAD = gql`
  mutation imgUpload(
    $address: [String!]!
    $caption: [String!]!
    $volume: [Int!]!
    $directory_id: [Int!]!
    $type: [String]
  ) {
    imgUpload(
      address: $address
      caption: $caption
      volume: $volume
      directory_id: $directory_id
      type: $type
    )
  }
`;

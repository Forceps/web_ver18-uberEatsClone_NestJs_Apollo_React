import { gql } from "@apollo/client";

export const VIDEO_UPLOAD = gql`
  mutation videoUpload(
    $address: [String!]!
    $caption: [String!]!
    $volume: [Int!]!
    $directory_id: [Int!]!
    $type: [String]
    $thumbnail: [String]
  ) {
    videoUpload(
      address: $address
      caption: $caption
      volume: $volume
      directory_id: $directory_id
      type: $type
      thumbnail: $thumbnail
    )
  }
`;

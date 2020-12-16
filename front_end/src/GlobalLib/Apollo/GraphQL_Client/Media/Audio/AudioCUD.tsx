import { gql } from "@apollo/client";

export const AUDIO_UPLOAD = gql`
  mutation musicUpload(
    $address: [String!]!
    $caption: [String!]!
    $volume: [Int!]!
    $directory_id: [Int!]!
    $type: [String]
  ) {
    musicUpload(
      address: $address
      caption: $caption
      volume: $volume
      directory_id: $directory_id
      type: $type
    )
  }
`;

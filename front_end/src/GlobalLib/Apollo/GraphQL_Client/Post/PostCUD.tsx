import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost(
    $caption: String!
    $content: String
    $directory_id: Int!
    $face: String
    $face_type: String
  ) {
    createPost(
      caption: $caption
      content: $content
      directory_id: $directory_id
      face: $face
      face_type: $face_type
    )
  }
`;
export const EDIT_POST = gql`
  mutation editPost(
    $post_id: Int!
    $caption: String!
    $content: String!
    $directory_id: Int!
    $face: String
    $face_type: String
  ) {
    editPost(
      post_id: $post_id
      caption: $caption
      content: $content
      directory_id: $directory_id
      face: $face
      face_type: $face_type
    )
  }
`;
export const DELETE_POST = gql`
  mutation deletePost($post_id: Int!) {
    deletePost(post_id: $post_id)
  }
`;

export const VIEW_POST = gql`
  mutation viewPost($post_id: Int!) {
    viewPost(post_id: $post_id)
  }
`;

export const LIKE_POST = gql`
  mutation likePost($post_id: Int!) {
    likePost(post_id: $post_id)
  }
`;

import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation addComment($post_id: Int!, $comment: String!) {
    addComment(post_id: $post_id, comment: $comment)
  }
`;

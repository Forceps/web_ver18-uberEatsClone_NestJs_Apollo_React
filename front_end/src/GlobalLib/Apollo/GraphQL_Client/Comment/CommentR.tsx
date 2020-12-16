import { gql, useQuery } from "@apollo/client";

export const SEE_COMMENTS = gql`
  query seeComments($post_id: Int!) {
    seeComments(post_id: $post_id) {
      comment_id
      user_commentTouser {
        user_id
        avatar
        username
      }
      comment
      likes
      year
      month
      day
      hour
      minute
    }
  }
`;
export const SeeCommentsRequest = (post_id: number) =>
  useQuery(SEE_COMMENTS, {
    variables: { post_id },
  });
export const COUNT_COMMENTS = gql`
  query countComments($post_id: Int!) {
    countComments(post_id: $post_id) {
      commentsCount
    }
  }
`;
export const CountCommentsRequest = (post_id: number) =>
  useQuery(COUNT_COMMENTS, {
    variables: { post_id },
  });

import { gql, useQuery } from "@apollo/client";

export const SUBSCRIPTION_POST = gql`
  query subscriptionPost($skip: Int!, $take: Int!) {
    subscriptionPost(skip: $skip, take: $take) {
      post_id
      caption
      content
      user_postTouser {
        user_id
        avatar
        username
      }
      views
      likes
      face
      face_type
    }
  }
`;
export const SubscriptionPostRequest = (skip: number, take: number) =>
  useQuery(SUBSCRIPTION_POST, {
    variables: { skip, take },
  });

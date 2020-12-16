import { gql, useQuery } from "@apollo/client";

export const RECOMMEND_AUTHOR_BY_USER_ID = gql`
  query recommendAuthorByUserId {
    recommendAuthorByUserId {
      user_id
      username
      avatar
      back_img
    }
  }
`;
export const RecommendAuthorByUserIdRequest = () =>
  useQuery(RECOMMEND_AUTHOR_BY_USER_ID);

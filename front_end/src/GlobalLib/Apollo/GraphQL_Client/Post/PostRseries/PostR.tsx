import { gql, useLazyQuery, useQuery } from "@apollo/client";

export const SEE_POST = gql`
  query seePost($post_id: Int!) {
    seePost(post_id: $post_id) {
      post_id
      caption
      content
      directory
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
export const SeePostLazyRequest = (post_id: number) =>
  useLazyQuery(SEE_POST, {
    variables: { post_id },
  });
export const SeePostRequest = (post_id: number) =>
  useQuery(SEE_POST, {
    variables: { post_id },
  });

export const SEE_POST_ALL = gql`
  query seePosts($skip: Int!, $take: Int!) {
    seePosts(skip: $skip, take: $take) {
      post_id
      caption
      user_postTouser {
        user_id
        username
        avatar
      }
      directory
      views
      likes
      face
      face_type
    }
  }
`;
export const SeePostAllRequest = (skip: number, take: number) =>
  useQuery(SEE_POST_ALL, {
    variables: { skip, take },
  });

export const SEE_SEARCH_POSTS = gql`
  query searchPost($keyWord: String!) {
    searchPost(keyWord: $keyWord) {
      post_id
      caption
      user_postTouser {
        user_id
        username
        avatar
      }
      directory
      views
      likes
      face
      face_type
    }
  }
`;
export const SeeSearchPostsRequest = (keyWord: string, user_id?: number) =>
  useLazyQuery(SEE_SEARCH_POSTS, {
    variables: { keyWord, user_id },
  });

export const MY_WATCHING_LOG = gql`
  query myWatchingLog {
    myWatchingLog {
      post_id
      caption
      user_postTouser {
        user_id
        username
        avatar
      }
      views
      likes
      face
      face_type
      year
      month
      day
      hour
      minute
    }
  }
`;
export const MyWatchingLogRequest = () => useLazyQuery(MY_WATCHING_LOG);

import { gql, useQuery } from "@apollo/client";

export const POST_META_INFO = gql`
  query postMetaInfo {
    postMetaInfo {
      postCount
    }
  }
`;

export const PostMetaInfoRequest = () => useQuery(POST_META_INFO);

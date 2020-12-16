import { gql, useQuery } from "@apollo/client";

export const VIDEO_GET_BY_DIR_ID = gql`
  query videoGetByDirId(
    $author_id: Int!
    $directory_id: Int!
    $skip: Int!
    $take: Int!
  ) {
    videoGetByDirId(
      author_id: $author_id
      directory_id: $directory_id
      skip: $skip
      take: $take
    ) {
      video_id
      address
      caption
      thumbnail
    }
  }
`;
export const VideoGetByDirIdRequest = (
  directory_id: number,
  author_id: number,
  skip: number,
  take: number
) =>
  useQuery(VIDEO_GET_BY_DIR_ID, {
    variables: { directory_id, author_id, skip, take },
  });

export const VIDEO_COUNT_BY_DIR_ID = gql`
  query videoCountByDirId($author_id: Int!, $directory_id: Int!) {
    videoCountByDirId(author_id: $author_id, directory_id: $directory_id)
  }
`;
export const VideoCountByDirIdRequest = (
  author_id: number,
  directory_id: number
) =>
  useQuery(VIDEO_COUNT_BY_DIR_ID, {
    variables: { author_id, directory_id },
  });

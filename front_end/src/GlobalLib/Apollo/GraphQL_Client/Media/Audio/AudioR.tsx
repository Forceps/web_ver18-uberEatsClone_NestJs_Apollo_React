import { gql, useQuery } from "@apollo/client";

export const MUSIC_GET_BY_DIR_ID = gql`
  query musicGetByDirId(
    $author_id: Int!
    $directory_id: Int!
    $skip: Int!
    $take: Int!
  ) {
    musicGetByDirId(
      author_id: $author_id
      directory_id: $directory_id
      skip: $skip
      take: $take
    ) {
      music_id
      address
      caption
    }
  }
`;
export const AudioGetByDirIdRequest = (
  directory_id: number,
  author_id: number,
  skip: number,
  take: number
) =>
  useQuery(MUSIC_GET_BY_DIR_ID, {
    variables: { directory_id, author_id, skip, take },
  });

export const MUSIC_COUNT_BY_DIR_ID = gql`
  query musicCountByDirId($author_id: Int!, $directory_id: Int!) {
    musicCountByDirId(author_id: $author_id, directory_id: $directory_id)
  }
`;
export const AudioCountByDirIdRequest = (
  author_id: number,
  directory_id: number
) =>
  useQuery(MUSIC_COUNT_BY_DIR_ID, {
    variables: { author_id, directory_id },
  });

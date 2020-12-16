import { gql, useQuery } from "@apollo/client";

export const IMG_GET_BY_DIR_ID = gql`
  query imgGetByDirId(
    $author_id: Int!
    $directory_id: Int!
    $skip: Int!
    $take: Int!
  ) {
    imgGetByDirId(
      author_id: $author_id
      directory_id: $directory_id
      skip: $skip
      take: $take
    ) {
      image_id
      address
      caption
    }
  }
`;
export const ImgGetByDirIdRequest = (
  directory_id: number,
  author_id: number,
  skip: number,
  take: number
) =>
  useQuery(IMG_GET_BY_DIR_ID, {
    variables: { directory_id, author_id, skip, take },
  });

export const IMG_COUNT_BY_DIR_ID = gql`
  query imgCountByDirId($author_id: Int!, $directory_id: Int!) {
    imgCountByDirId(author_id: $author_id, directory_id: $directory_id)
  }
`;
export const ImgCountByDirIdRequest = (
  author_id: number,
  directory_id: number
) =>
  useQuery(IMG_COUNT_BY_DIR_ID, {
    variables: { author_id, directory_id },
  });

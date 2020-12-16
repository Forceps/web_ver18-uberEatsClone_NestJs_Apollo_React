import { gql, useQuery } from "@apollo/client";

export const COUNT_POST_BY_DIR_ID = gql`
  query countPostByDirId($author_id: Int!, $directory_id: Int!) {
    countPostByDirId(author_id: $author_id, directory_id: $directory_id)
  }
`;
export const CountPostByDirIdRequest = (
  author_id: number,
  directory_id: number
) =>
  useQuery(COUNT_POST_BY_DIR_ID, {
    variables: { author_id, directory_id },
  });

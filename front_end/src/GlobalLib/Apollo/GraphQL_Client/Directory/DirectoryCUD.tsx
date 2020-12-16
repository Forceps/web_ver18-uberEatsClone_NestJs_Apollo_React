import { gql } from "@apollo/client";

export const MAKE_DIRECTORY = gql`
  mutation makeDir($name: String!, $parent_id: Int!) {
    makeDir(name: $name, parent_id: $parent_id)
  }
`;
export const UPDATE_DIR = gql`
  mutation updateDir($directory_id: Int!, $name: String, $parent_id: Int!) {
    updateDir(directory_id: $directory_id, name: $name, parent_id: $parent_id)
  }
`;
export const DELETE_DIR = gql`
  mutation deleteDir($directory_id: Int!) {
    deleteDir(directory_id: $directory_id)
  }
`;

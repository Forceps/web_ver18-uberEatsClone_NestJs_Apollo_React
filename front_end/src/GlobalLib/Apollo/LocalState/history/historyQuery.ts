import { gql } from "@apollo/client";

export const HISTORY_READ = gql`
  {
    history @client
  }
`;
export const HISTORY_ADD = gql`
  mutation historyAdd {
    historyAdd @client
  }
`;
export const HISTORY_DELETE_ALL = gql`
  mutation historyDeleteAll {
    historyDeleteAll @client
  }
`;

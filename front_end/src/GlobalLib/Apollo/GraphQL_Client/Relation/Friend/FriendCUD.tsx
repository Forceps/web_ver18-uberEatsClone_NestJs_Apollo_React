import { gql } from "@apollo/client";

export const REQUEST_FRIEND = gql`
  mutation requestFriend($respondent: Int!) {
    requestFriend(respondent: $respondent)
  }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation acceptFriendRequest($proposer: Int!) {
    acceptFriendRequest(proposer: $proposer)
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($user_id: Int!) {
    removeFriend(user_id: $user_id)
  }
`;

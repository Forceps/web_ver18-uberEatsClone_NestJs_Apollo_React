import { gql } from "@apollo/client";

export const COMMENTING = gql`
  mutation commenting($chat_room_id: Int!, $comment: String!) {
    commenting(chat_room_id: $chat_room_id, comment: $comment)
  }
`;

export const CREATE_ROOM = gql`
  mutation createRoom($name: String!, $users: [Int!]!) {
    createRoom(name: $name, users: $users)
  }
`;

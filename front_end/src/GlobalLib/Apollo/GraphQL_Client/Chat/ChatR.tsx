import { gql, useQuery } from "@apollo/client";

export const CHAT_DETAIL = gql`
  query chatDetail($chat_room_id: Int!, $skip: Int, $take: Int) {
    chatDetail(chat_room_id: $chat_room_id, skip: $skip, take: $take) {
      chat_id
      user
      user_chatTouser {
        user_id
        username
        avatar
      }
      comment
    }
  }
`;
export const ChatDetailRequest = (
  chat_room_id: number,
  skip?: number,
  take?: number
) =>
  useQuery(CHAT_DETAIL, {
    variables: { chat_room_id, skip: skip ? skip : 0, take: take ? take : 4 },
  });

export const TALK_COMRADES = gql`
  query talkComrades($skip: Int!, $take: Int) {
    talkComrades(skip: $skip, take: $take) {
      user_id
      username
      avatar
    }
  }
`;
export const TalkComradesRequest = (skip?: number, take?: number) =>
  useQuery(TALK_COMRADES, {
    variables: { skip: skip ? skip : 0, take: take ? take : 0 },
  });

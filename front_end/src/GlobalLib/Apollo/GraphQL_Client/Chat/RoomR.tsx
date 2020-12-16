import { gql, useQuery } from "@apollo/client";

export const SEE_ROOMS = gql`
  query seeRooms($skip: Int, $take: Int) {
    seeRooms(skip: $skip, take: $take) {
      chat_room_id
      name
      chat_member {
        user
        user_chat_memberTouser {
          avatar
        }
      }
    }
  }
`;
export const SeeRoomsRequest = (skip: number, take: number) =>
  useQuery(SEE_ROOMS, {
    variables: { skip, take },
  });
export const SEE_ROOM = gql`
  query seeRoom($chat_room_id: Int!) {
    seeRoom(chat_room_id: $chat_room_id) {
      chat_room_id
      name
      chat_member {
        user
      }
    }
  }
`;
export const SeeRoomRequest = (chat_room_id: number) =>
  useQuery(SEE_ROOM, {
    variables: { chat_room_id },
  });

export const INSTANT_CHAT_START = gql`
  mutation instantChatStart($opponent: Int!) {
    instantChatStart(opponent: $opponent)
  }
`;

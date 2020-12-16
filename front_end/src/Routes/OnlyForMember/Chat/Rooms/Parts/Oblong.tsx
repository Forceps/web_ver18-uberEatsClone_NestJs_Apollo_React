import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";
import Conversation from "../../../../../Components/Chat/Conversation/ConversationCon";

export const Barrier = styled.div`
  display: grid;
  grid-template-rows: 40px 50px 1fr;
  width: 290px;
  height: 390px;
  margin: 10px 10px 0 0;
  background-color: rgba(223, 230, 233, 0.7);
  overflow: hidden;
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const Verticalize = styled(WH100per)`
  display: grid;
  grid-template-columns: 60px 1fr;
`;
const Oheader = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
  font-size: 1rem;
`;
const Plaque = styled(WH100per)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2px;
`;
const Interval = styled.div`
  width: calc(100%);
  height: calc(100% / 5);
  padding: 2px;
`;
const Info = styled(WH100per)`
  padding: 5px;
`;
const OverNot = styled(WH100per)`
  overflow: hidden;
`;

export default ({
  roomData,
  chatListenData,
  chatListenLoad,
  setRoomEnter,
  setParticularRoom,
}: OblongProps) => {
  return (
    <Barrier
      onClick={() => {
        setParticularRoom(S_N_to_N(roomData.chat_room_id));
        setRoomEnter(true);
      }}
    >
      <Oheader>{roomData.name}</Oheader>
      <Info>
        <i className="icon-group" /> {roomData.chat_member.length}
      </Info>
      <Verticalize>
        <Plaque>
          {roomData.chat_member?.map((k: any) => (
            <Interval key={k.user}>
              <Avatar size={54} url={k.user_chat_memberTouser?.avatar} />
            </Interval>
          ))}
        </Plaque>
        <OverNot>
          <Conversation
            room_id={S_N_to_N(roomData.chat_room_id)}
            chatListenData={chatListenData}
            chatListenLoad={chatListenLoad}
            fixNum={4}
          />
        </OverNot>
      </Verticalize>
    </Barrier>
  );
};

interface OblongProps {
  roomData: any;
  chatListenData: any;
  chatListenLoad: boolean;
  setRoomEnter: any;
  setParticularRoom: any;
}

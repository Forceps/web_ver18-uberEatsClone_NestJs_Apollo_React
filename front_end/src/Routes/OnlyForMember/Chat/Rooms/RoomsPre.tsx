import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";
import { useSubscription } from "@apollo/client";
import { CHAT_LISTENING } from "../../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatSub";
import { FlexCenter } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import Oblong, { Barrier } from "./Parts/Oblong";

const Tent = styled(W100per)``;
const Sbj = styled(W100per)`
  display: flex;
  font-size: 1.4rem;
`;
const Exhibit = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 10px 0 0 0;
`;
const OblongEmpty = styled(Barrier)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
`;
const ChatIcon = styled.i`
  font-size: 2.7rem;
  margin: 0 0 10px 0;
`;
const RoomPlus = styled(FlexCenter)`
  width: 23px;
  margin: 0 0 0 10px;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;

export default ({
  srLoading,
  srData,
  setMakeRoomOp,
  setRoomEnter,
  setParticularRoom,
}: RoomsPreProps) => {
  return (
    <Tent>
      <Sbj>
        Channels{" "}
        {!srLoading && srData.length !== 0 && (
          <RoomPlus>
            <i
              onClick={() => {
                setMakeRoomOp(true);
              }}
              className="icon-plus"
            />
          </RoomPlus>
        )}
      </Sbj>
      <Exhibit>
        {srLoading ? (
          <Loading />
        ) : srData.length === 0 ? (
          <OblongEmpty
            onClick={() => {
              setMakeRoomOp(true);
            }}
          >
            <ChatIcon className="icon-chat-empty" />
            Add chat room?
          </OblongEmpty>
        ) : (
          srData.map((i: any) => {
            const {
              data: chatListenData,
              loading: chatListenLoad,
            } = useSubscription(CHAT_LISTENING, {
              variables: { chat_room_id: S_N_to_N(i.chat_room_id) },
            });
            return (
              <Oblong
                key={i.chat_room_id}
                roomData={i}
                chatListenData={chatListenData}
                chatListenLoad={chatListenLoad}
                setRoomEnter={setRoomEnter}
                setParticularRoom={setParticularRoom}
              />
            );
          })
        )}
      </Exhibit>
    </Tent>
  );
};
interface RoomsPreProps {
  srLoading: boolean;
  srData: any;
  setMakeRoomOp: any;
  setRoomEnter: any;
  setParticularRoom: any;
}

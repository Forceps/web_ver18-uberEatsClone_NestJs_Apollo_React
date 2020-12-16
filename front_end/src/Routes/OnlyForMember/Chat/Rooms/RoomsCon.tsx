import React from "react";
import RoomsPre from "./RoomsPre";
import { SeeRoomsRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Chat/RoomR";

export default ({
  setMakeRoomOp,
  setRoomEnter,
  setParticularRoom,
}: RoomsConProps) => {
  const { loading: srLoading, data: srData } = SeeRoomsRequest(0, 5);
  return (
    <RoomsPre
      srLoading={srLoading}
      srData={srData?.seeRooms}
      setMakeRoomOp={setMakeRoomOp}
      setRoomEnter={setRoomEnter}
      setParticularRoom={setParticularRoom}
    />
  );
};
interface RoomsConProps {
  setMakeRoomOp: any;
  setRoomEnter: any;
  setParticularRoom: any;
}

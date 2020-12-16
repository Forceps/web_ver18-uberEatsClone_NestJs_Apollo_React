import React, { useState } from "react";
import ChatPre from "./ChatPre";

export default () => {
  const [MakeRoomOp, setMakeRoomOp] = useState(false);
  const [RoomEnter, setRoomEnter] = useState(false);
  const [ParticularRoom, setParticularRoom] = useState(0);
  return (
    <ChatPre
      MakeRoomOp={MakeRoomOp}
      setMakeRoomOp={setMakeRoomOp}
      RoomEnter={RoomEnter}
      setRoomEnter={setRoomEnter}
      ParticularRoom={ParticularRoom}
      setParticularRoom={setParticularRoom}
    />
  );
};

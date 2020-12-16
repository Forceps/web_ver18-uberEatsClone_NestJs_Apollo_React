import React, { useState } from "react";
import HeaderPre from "./HeaderPre";

export default ({ setSeeMode }: RightConProps) => {
  const [LoginOpen, setLoginOpen] = useState(false);

  return (
    <HeaderPre
      setSeeMode={setSeeMode}
      LoginOpen={LoginOpen}
      setLoginOpen={setLoginOpen}
    />
  );
};

interface RightConProps {
  setSeeMode: any;
}

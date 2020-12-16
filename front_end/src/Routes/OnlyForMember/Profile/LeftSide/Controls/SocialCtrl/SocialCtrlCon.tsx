import React, { useState } from "react";
import SocialCtrlPre from "./SocialCtrlPre";
import useInput from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";

export default () => {
  const [GroupMakeOpen, setGroupMakeOpen] = useState(false);
  const SearchKeyWord = useInput("");
  const Search = async () => {
    if (SearchKeyWord.value) {
    } else {
    }
  };
  return (
    <SocialCtrlPre
      GroupMakeOpen={GroupMakeOpen}
      setGroupMakeOpen={setGroupMakeOpen}
      SearchKeyWord={SearchKeyWord}
      Search={Search}
    />
  );
};

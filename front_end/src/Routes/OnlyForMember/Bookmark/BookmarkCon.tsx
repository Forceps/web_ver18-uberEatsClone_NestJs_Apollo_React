import React, { useState } from "react";
import BookmarkPre from "./BookmarkPre";

export default () => {
  const [SeeMode, setSeeMode] = useState("Default");

  return <BookmarkPre SeeMode={SeeMode} setSeeMode={setSeeMode} />;
};

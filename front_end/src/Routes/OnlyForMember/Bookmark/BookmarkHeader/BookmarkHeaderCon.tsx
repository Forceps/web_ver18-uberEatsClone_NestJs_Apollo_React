import React from "react";
import BookmarkHeaderPre from "./BookmarkHeaderPre";

export default ({ setLoginOpen, zIndex }: BookmarkHeaderConProps) => {
  return <BookmarkHeaderPre setLoginOpen={setLoginOpen} zIndex={zIndex} />;
};

interface BookmarkHeaderConProps {
  setLoginOpen?: any;
  zIndex: number;
}

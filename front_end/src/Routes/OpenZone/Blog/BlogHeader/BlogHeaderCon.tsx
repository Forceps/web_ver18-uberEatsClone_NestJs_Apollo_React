import React from "react";
import BlogHeaderPre from "./BlogHeaderPre";

export default ({ setLoginOpen, zIndex }: BlogHeaderConProps) => {
  return <BlogHeaderPre setLoginOpen={setLoginOpen} zIndex={zIndex} />;
};

interface BlogHeaderConProps {
  setLoginOpen: any;
  zIndex: number;
}

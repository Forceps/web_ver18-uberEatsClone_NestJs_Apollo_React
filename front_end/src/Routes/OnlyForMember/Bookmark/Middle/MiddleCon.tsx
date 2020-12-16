import React from "react";
import MiddlePre from "./MiddlePre";
import useInfiniteScroll from "../../../../GlobalLib/RecycleFunction/Hooks/useInfiniteScroll";

export default ({ SeeMode }: MiddleConProps) => {
  const { List, Finish } = useInfiniteScroll();

  return <MiddlePre List={List} LoadCount={6} Finish={Finish} />;
};

interface MiddleConProps {
  SeeMode: string;
}

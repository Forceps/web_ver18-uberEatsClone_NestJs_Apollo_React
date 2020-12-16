import React, { useEffect, useState } from "react";
import HomePre from "./HomePre";
import { useTargetsShown } from "../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { useDummyState } from "../../../GlobalLib/Context/Lib/DummyState";

export default () => {
  const DS = useDummyState();
  const TSP = useTargetsShown();
  const [SeeMode, setSeeMode] = useState("Default");

  useEffect(() => {
    TSP.setPostTargetMode("All");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TSP]);
  return <HomePre SeeMode={SeeMode} setSeeMode={setSeeMode} />;
};

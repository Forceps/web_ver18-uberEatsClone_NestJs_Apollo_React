import React, { useState, useEffect } from "react";
import PaginationPre from "./PaginationPre";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";

export default () => {
  const PfDM = useProfileDetailMode();
  const [PaginationNum, setPaginationNum] = useState([1]);
  const [UpperUnitPageNum, setUpperUnitPageNum] = useState([1]);
  const [CurrentUUP, setCurrentUUP] = useState(1);
  const [NumberOfDigits] = useState(8);

  const divide =
    Math.ceil(PfDM.TotalCount / PfDM.OneTimeShow) === 0
      ? 1
      : Math.ceil(PfDM.TotalCount / PfDM.OneTimeShow);
  const divideU = Math.ceil(divide / NumberOfDigits);

  useEffect(() => {
    let arrU: number[] = [];
    for (let i = 1; i <= divideU; i++) {
      arrU = arrU.concat(i);
    }
    setUpperUnitPageNum(arrU);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PfDM.TotalCount]);
  useEffect(() => {
    let arr: number[] = [];
    if (CurrentUUP === divideU) {
      for (let i = 1; i <= divide - (divideU - 1) * NumberOfDigits; i++) {
        arr = arr.concat(i + (divideU - 1) * NumberOfDigits);
      }
    } else {
      for (let i = 1; i <= NumberOfDigits; i++) {
        arr = arr.concat((CurrentUUP - 1) * NumberOfDigits + i);
      }
    }
    setPaginationNum(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentUUP, PfDM.TotalCount]);

  return (
    <PaginationPre
      PaginationNum={PaginationNum}
      UpperUnitPageNum={UpperUnitPageNum}
      CurrentUUP={CurrentUUP}
      setCurrentUUP={setCurrentUUP}
      NumberOfDigits={NumberOfDigits}
    />
  );
};

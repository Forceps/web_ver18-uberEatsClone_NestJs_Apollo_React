import React, { useState, useEffect } from "react";
import OrganizePre from "./OrganizePre";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { TerminalM } from "./Steps/Step4/Step4";
import { TerminalD } from "./Steps/Step5/Step5";
import { useDummyState } from "../../../../../../../GlobalLib/Context/Lib/DummyState";
import { useMutation } from "@apollo/client";
import { MAKE_GROUPS } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Group/GroupCUD";

export default ({ zIndex = 10, setGroupMakeOpen }: OrganizeConProps) => {
  const DS = useDummyState();
  const [Phase, setPhase] = useState(1);
  const NameAssign = useInput("");
  const PurposeAssign = useInput("");
  const [CItems, setCItems] = useState([{ id: 0, name: "The first item" }]);
  const [AddNum, setAddNum] = useState(1);
  const [BackImg, setBackImg] = useState("");
  const [PfImg, setPfImg] = useState("");
  const [ChoicedM, setChoicedM] = useState("Start");
  const [ChoicedD, setChoicedD] = useState("Start");
  const NextActivateCondition = (num?: number): boolean => {
    let Obj;
    if (num) {
      Obj = num;
    } else {
      Obj = Phase;
    }
    if (Obj === 1) {
      if (NameAssign.value) {
        return true;
      } else {
        return false;
      }
    } else if (Obj === 2) {
      return true;
    } else if (Obj === 3) {
      if (CItems.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (Obj === 4) {
      if (TerminalM.indexOf(ChoicedM) !== -1) {
        return true;
      } else {
        return false;
      }
    } else if (Obj === 5) {
      if (TerminalD.indexOf(ChoicedD) !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const SatisfiedAll = () => {
    let judge = true;
    for (let i = 0; i < 5; i++) {
      if (!NextActivateCondition(i)) {
        judge = false;
        break;
      }
    }
    return judge;
  };
  const [MakeGroupMutation] = useMutation(MAKE_GROUPS);
  const MakeGroupTrigger = async () => {
    try {
      await MakeGroupMutation({
        variables: {
          name: NameAssign.value,
          purpose: PurposeAssign.value,
          participation_system: ChoicedM,
          withdrawal_system: ChoicedD,
          identiti_back_img: BackImg,
          identiti_profile_img: PfImg,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setGroupMakeOpen(false);
    }
  };

  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NextActivateCondition()]);

  return (
    <OrganizePre
      zIndex={zIndex}
      setGroupMakeOpen={setGroupMakeOpen}
      Phase={Phase}
      setPhase={setPhase}
      NameAssign={NameAssign}
      PurposeAssign={PurposeAssign}
      CItems={CItems}
      setCItems={setCItems}
      AddNum={AddNum}
      setAddNum={setAddNum}
      ChoicedM={ChoicedM}
      setChoicedM={setChoicedM}
      ChoicedD={ChoicedD}
      setChoicedD={setChoicedD}
      NextActivateCondition={NextActivateCondition}
      BackImg={BackImg}
      setBackImg={setBackImg}
      PfImg={PfImg}
      setPfImg={setPfImg}
      SatisfiedAll={SatisfiedAll}
      MakeGroupTrigger={MakeGroupTrigger}
    />
  );
};

interface OrganizeConProps {
  zIndex?: number;
  setGroupMakeOpen: any;
}

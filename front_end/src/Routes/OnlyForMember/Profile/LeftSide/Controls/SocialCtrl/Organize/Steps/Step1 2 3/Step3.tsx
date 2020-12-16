import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  WH100perInput,
} from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../../../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useDummyState } from "../../../../../../../../../GlobalLib/Context/Lib/DummyState";

const Wrapper = styled(WH100per)`
  padding: 10px 0 10px 0;
  overflow: hidden;
`;
const ScrollArea = styled(IncludeScrollBar)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Item = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 40px;
  align-items: center;
  height: 40px;
  &:hover {
    background-color: #dfe6e9;
    & > .DeleteCategoryInMakingGroupScreen {
      display: grid;
    }
    & > .CategoryNameInMakingGroupScreen {
      background-color: #dfe6e9;
    }
  }
`;
const Cname = styled(WH100perInput)`
  font-size: 1rem;
  padding: 5px 5px 5px 10px;
  border: 0;
  &:hover {
    background-color: #dfe6e9;
  }
`;
const DeleteC = styled(WH100per)`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const AddBtn = styled(Item)`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin: 10px 0 0 0;
  background-color: #dfe6e9;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;

export default ({ CItems, setCItems, AddNum, setAddNum }: Step3Props) => {
  const { setDummyState } = useDummyState();
  const ListMutate = (id: number, type: string, name?: string) => {
    const idx = CItems.findIndex((item) => {
      return item.id === id;
    });
    let tempA = CItems;
    if (type === "Change") {
      if (name) {
        tempA.splice(idx, 1, { id, name });
        setCItems(tempA);
      }
    } else if (type === "Delete") {
      tempA.splice(idx, 1);
      setCItems(tempA);
    }
  };
  return (
    <Wrapper>
      <ScrollArea>
        {CItems.map((Elem: { id: number; name: string }) => (
          <Item key={Elem.id}>
            <Cname
              placeholder="Category Name"
              defaultValue={Elem.name}
              onChange={(e) => {
                spaped(e);
                ListMutate(Elem.id, "Change", e.target.value);
              }}
              className="CategoryNameInMakingGroupScreen"
              spellCheck="false"
            />
            <DeleteC
              onClick={(e) => {
                ListMutate(Elem.id, "Delete");
                spaped(e);
                setDummyState((p: number) => p + 1);
              }}
              className="DeleteCategoryInMakingGroupScreen"
            >
              <i className="icon-noun_x_2939490" />
            </DeleteC>
          </Item>
        ))}
        <AddBtn
          onClick={(e) => {
            spaped(e);
            setCItems((p: any[]) => {
              p = p.concat({ id: AddNum, name: "Added" });
              return p;
            });
            setAddNum((p: number) => p + 1);
          }}
        >
          Add
          <i className="icon-plus" />
        </AddBtn>
      </ScrollArea>
    </Wrapper>
  );
};

interface Step3Props {
  CItems: { id: number; name: string }[];
  setCItems: any;
  AddNum: number;
  setAddNum: any;
}

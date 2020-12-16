import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";
import { MedataStructure } from "../../../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import ConfirmationModal from "../../../../../Components/ElementEtc/Effect/ConfirmationModal";
import { FlexCenter } from "../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Encirclement = styled(W100per)`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100px;
`;
const Functionality = styled(WH100per)`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding: 10px 25px 0 15px;
`;
const Nucleus = styled(WH100per)`
  display: flex;
  flex-direction: column;
`;
const Cells = styled(WH100per)`
  padding: 12px 0 0 0;
  display: flex;
  flex-direction: column;
`;
const Sbj = styled(WH100per)`
  padding: 0 0 0 9px;
  font-size: 1.3rem;
`;
const Sorting = styled(W100per)`
  display: flex;
  height: 35px;
`;
interface SmodeProps {
  RelationSortBy: string;
  myType: string;
}
const Smode = styled(FlexCenter)<SmodeProps>`
  padding: 3px 10px 3px 10px;
  text-transform: capitalize;
  cursor: pointer;
  ${(p) => {
    if (p.RelationSortBy === p.myType) {
      return css`
        border-top: 3px solid black;
        padding-top: 0;
      `;
    }
  }}
`;
const AddFriendBtn = styled(FlexCenter)`
  width: 100%;
  padding: 10px;
  background-color: #dfe6e9;
  &:hover {
    background-color: #b2bec3;
  }
  transition-property: background-color;
  transition-duration: 0.18s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const Function = styled(W100per)``;
const SubSbj = styled(W100per)`
  padding: 15px 5px 5px 5px;
  font-size: 1.2rem;
  margin-bottom: 7px;
  &:nth-child(n + 2) {
    margin-top: 30px;
  }
`;
const FreindsList = styled(W100per)`
  display: flex;
`;
const AvatarContainer = styled.div`
  padding: 5px;
`;
const Gab = styled(W100per)`
  height: 40px;
`;
const FriendStatus = styled(W100per)`
  display: flex;
  align-items: center;
  padding: 7px;
  border-left: 3px solid #636e72;
`;

const BlogRelationPre = ({
  RelationSortBy,
  setRelationSortBy,
  I_SubsData,
  I_SubsLoading,
  My_SubsData,
  My_SubsLoading,
  friendsData,
  friendsLoading,
  MEdata,
  user_id,
  AddFriendConfirm,
  setAddFriendConfirm,
  requestFriendFunc,
  FcData,
  friendCheckLoad,
}: BlogRelationPreProps) => {
  const IsMe = S_N_to_N(MEdata.user_id) === user_id;
  return (
    <Encirclement>
      <Functionality>
        <Sbj>Function</Sbj>
        <Function>
          {friendCheckLoad &&
            (RelationSortBy === "all" || RelationSortBy === "friends") &&
            !IsMe &&
            FcData &&
            (FcData.length === 0 ? (
              <AddFriendBtn
                onClick={() => {
                  setAddFriendConfirm(true);
                }}
              >
                Add friend
              </AddFriendBtn>
            ) : !FcData[0].consent ? (
              <FriendStatus>On request (Friend)</FriendStatus>
            ) : (
              <FriendStatus>Already Friend</FriendStatus>
            ))}
        </Function>
        {AddFriendConfirm && (
          <ConfirmationModal
            subject={"Add friend"}
            message={"Would you like to request a friend?"}
            setConfirmationModalOpen={setAddFriendConfirm}
            zIndex={30}
            functionExecute={requestFriendFunc}
          />
        )}
      </Functionality>
      <Nucleus>
        <Sorting>
          {["all", "subscribing", "subscribed", "friends"].map((str) => (
            <Smode
              onClick={() => {
                setRelationSortBy(str);
              }}
              RelationSortBy={RelationSortBy}
              myType={str}
            >
              {str}
            </Smode>
          ))}
        </Sorting>
        <Cells>
          {RelationSortBy !== "all" && <Gab />}
          {!I_SubsLoading && I_SubsData.length !== 0 && (
            <>
              {RelationSortBy === "all" && <SubSbj>Subscribing</SubSbj>}
              {(RelationSortBy === "all" ||
                RelationSortBy === "subscribing") && (
                <FreindsList>
                  {I_SubsData.map((sg: any) => (
                    <AvatarContainer>
                      <Avatar
                        size={140}
                        url={sg.avatar}
                        link={`/blog/${sg.user_id}`}
                        name={sg.username}
                      />
                    </AvatarContainer>
                  ))}
                </FreindsList>
              )}
            </>
          )}
          {!My_SubsLoading && My_SubsData.length !== 0 && (
            <>
              {RelationSortBy === "all" && <SubSbj>Subscribed</SubSbj>}
              {(RelationSortBy === "all" ||
                RelationSortBy === "subscribed") && (
                <FreindsList>
                  {My_SubsData.map((sd: any) => (
                    <AvatarContainer>
                      <Avatar
                        size={140}
                        url={sd.avatar}
                        link={`/blog/${sd.user_id}`}
                        name={sd.username}
                      />
                    </AvatarContainer>
                  ))}
                </FreindsList>
              )}
            </>
          )}
          {!friendsLoading && friendsData.length !== 0 && (
            <>
              {RelationSortBy === "all" && <SubSbj>Freinds</SubSbj>}
              {(RelationSortBy === "all" || RelationSortBy === "friends") && (
                <FreindsList>
                  {friendsData.map((f: any) => (
                    <AvatarContainer>
                      <Avatar
                        size={140}
                        url={f.avatar}
                        link={`/blog/${f.user_id}`}
                        name={f.username}
                      />
                    </AvatarContainer>
                  ))}
                </FreindsList>
              )}
            </>
          )}
        </Cells>
      </Nucleus>
    </Encirclement>
  );
};

interface BlogRelationPreProps {
  RelationSortBy: string;
  setRelationSortBy: any;
  I_SubsData: any;
  I_SubsLoading: boolean;
  My_SubsData: any;
  My_SubsLoading: boolean;
  friendsData: any;
  friendsLoading: boolean;
  MEdata: MedataStructure;
  user_id: number;
  AddFriendConfirm: boolean;
  setAddFriendConfirm: any;
  requestFriendFunc: () => void;
  FcData: any;
  friendCheckLoad: boolean;
}

export default React.memo(BlogRelationPre);

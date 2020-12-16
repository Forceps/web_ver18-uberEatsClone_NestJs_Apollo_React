import React from "react";
import styled from "styled-components";
import ThingsWall from "./ThingsWall";
import Loading from "../../../../../../../Components/ElementEtc/Effect/Loading";
import { useProfileDetailMode } from "../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import IncludeScrollBar from "../../../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useBackImgInS } from "../../../../../../../GlobalLib/Context/ProfileContext/BackImgInS";
import { useMyInfo } from "../../../../../../../GlobalLib/Context/UserContext/Me";

const LSec = styled(IncludeScrollBar)`
  min-width: 550px;
  height: calc(100vh - 55px);
  overflow: auto;
`;
const LDWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;
const BackImgDefault = styled.div`
  display: none;
  width: 100%;
  height: 200px;
  background-color: #dfe6e9;
  @media (max-width: 1300px) {
    display: grid;
  }
`;
const Posts = styled.div``;
interface BackImgProp {
  url: string;
}
const BackImg = styled(BackImgDefault)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const UserName = styled.div`
  display: inline-block;
  padding: 5px 0 0 10px;
  width: 100%;
  font-size: 1.5rem;
  word-break: normal;
  overflow: hidden;
  line-height: 2rem;
  text-align: left;
`;

const KernelsPre = ({ data, loading }: KermelsPreProps) => {
  const { MEdata } = useMyInfo();
  const PfDM = useProfileDetailMode();
  const BII = useBackImgInS();
  return (
    <LSec>
      {!MEdata.back_img ? (
        <BackImgDefault
          onClick={(e: any) => {
            spaped(e);
            BII.setDesignateBackImg(true);
          }}
        >
          <UserName>{MEdata.username}</UserName>
        </BackImgDefault>
      ) : PfDM.Mode === "PostDetail" ? (
        <div />
      ) : (
        <BackImg
          url={MEdata.back_img}
          onClick={(e: any) => {
            spaped(e);
            BII.setDesignateBackImg(true);
          }}
        />
      )}

      <Posts>
        {loading ? (
          <LDWrap>
            <Loading />
          </LDWrap>
        ) : (
          <ThingsWall data={data} />
        )}
      </Posts>
    </LSec>
  );
};

interface KermelsPreProps {
  data: any;
  loading: boolean;
}

export default React.memo(KernelsPre);

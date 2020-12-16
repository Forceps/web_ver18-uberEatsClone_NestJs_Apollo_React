import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TemporaryBackground from "../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { FlexCenter } from "../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

interface EnvironProps {
  zIndex: number;
}
const Environ = styled(WH100per)<EnvironProps>`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
const Template = styled(FlexCenter)<EnvironProps>`
  position: relative;
  width: 70vw;
  height: 92vh;
  overflow: hidden;
  z-index: ${(prop) => prop.zIndex};
`;
const BackFont = styled.div<EnvironProps>`
  position: fixed;
  display: flex;
  top: 0;
  padding: 10px;
  color: white;
  z-index: ${(prop) => prop.zIndex};
`;
const Title = styled(BackFont)`
  left: 0;
  font-size: 1.1rem;
`;
const OUT = styled(BackFont)`
  right: 0;
  font-size: 1.4rem;
  cursor: pointer;
`;
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
const VideoPrev = styled.video`
  min-width: 40px;
  min-height: 40px;
  max-width: 100%;
  max-height: 100%;
`;
const AudioPrev = styled.audio`
  display: flex;
  min-width: 40px;
  min-height: 40px;
  width: 80%;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  outline: none;
  background-color: white;
`;

export default ({
  zIndex = 10,
  setOpen,
  type,
  url,
  title,
  thumbnail,
}: ShowOneProps) => {
  return (
    <Environ zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          if (setOpen) {
            setOpen(false);
          }
        }}
        zIndex={zIndex + 1}
      />
      <Title zIndex={zIndex + 3}>{title}</Title>
      <OUT
        onClick={(e: any) => {
          spaped(e);
          if (setOpen) {
            setOpen(false);
          }
        }}
        zIndex={zIndex + 4}
      >
        <i className="icon-noun_x_2939490" />
      </OUT>
      <Template zIndex={zIndex + 2}>
        {type === "audio" ? (
          <AudioPrev controls>
            <source src={url} />
          </AudioPrev>
        ) : type === "video" ? (
          <VideoPrev poster={thumbnail} controls>
            <source src={url} type="video/mp4" />
            <source src={url} type="video/ogg" />
            <source src={url} type="video/avi" />
            <source src={url} type="video/x-ms-wmv" />
            <source src={url} type="video/mov" />
            <source src={url} type="video/rm" />
            <source src={url} type="video/ram" />
            <source src={url} type="video/swf" />
            <source src={url} type="video/flv" />
            <source src={url} type="video/webm" />
          </VideoPrev>
        ) : (
          <ImgPrev src={url} alt="image" />
        )}
      </Template>
    </Environ>
  );
};
interface ShowOneProps {
  zIndex?: number;
  setOpen: any;
  type: string;
  url: string;
  title: string;
  thumbnail?: string;
}

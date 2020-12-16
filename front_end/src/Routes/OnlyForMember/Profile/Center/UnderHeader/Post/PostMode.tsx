import React from "react";
import styled from "styled-components";
import KernelsCon from "./Kernels/KernelsCon";
import WH100per from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Under = styled(WH100per)``;

export default () => {
  return (
    <Under>
      <KernelsCon />
    </Under>
  );
};

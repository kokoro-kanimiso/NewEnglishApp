'use client'

import styled from "styled-components";

import { StyledContainer } from "../common/Container";
import LoginButton from "./modules/LoginButton";
import MainTitle from "./modules/MainTitle";
import SignUpButton from "./modules/SignUpButton";
import StartAppButton from "./modules/StartAppButton";
import { StyledCommonWrapper } from "../common/CommonWrapper";
import { StyledFlexAlignItemsCenter } from "../common/FlexBox";

const StyledInitialScreenWrapper = styled.div`
  padding-top: 100px;
`;

const InitialScreen = () => {
  return (
    <>
      <StyledCommonWrapper>
        <StyledContainer>
            <StyledInitialScreenWrapper>
              <MainTitle />
              <LoginButton />
              <SignUpButton />
              <StartAppButton />
            </StyledInitialScreenWrapper>
        </StyledContainer>
      </StyledCommonWrapper>
    </>
  );
};

export default InitialScreen;

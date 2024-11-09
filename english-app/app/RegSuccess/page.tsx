'use client'

import styled from "styled-components";
import { StyledButton } from "../common/Button";
import { StyledCommonWrapper } from "../common/CommonWrapper";
import { StyledContainer } from "../common/Container";
import { useRouter } from "next/navigation";

const StyledRegSuccessTitle = styled.h2`
   font-size: 3rem;
   padding-top: 50px;
`;

const RegSuccess = () => {

    const router = useRouter();

    const goToRegWordPage = () => {
        router.push("/RegWord");
    }
    const goToStartAppPage = () => {
        router.push("/StartApp");
    }

    return(
        <>
        <StyledCommonWrapper>
        <StyledContainer>
            <StyledRegSuccessTitle>Register word was successful!!</StyledRegSuccessTitle>
            <StyledButton style={{marginTop: "50px"}} onClick={goToRegWordPage}>Register word again</StyledButton>
            <StyledButton style={{marginTop: "50px"}} onClick={goToStartAppPage}>Start app</StyledButton>
        </StyledContainer>
      </StyledCommonWrapper>
        </>
    )
}

export default RegSuccess;
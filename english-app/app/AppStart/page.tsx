'use client'

import Link from "next/link";
import { StyledCommonWrapper } from "../common/CommonWrapper";
import { StyledContainer } from "../common/Container";
import { StyledBorderBottomDiv } from "../common/StyledBorderBottomDiv";
import { StyledTitle } from "../common/Title";
import { StyledButton } from "../common/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AppStart = () => {
  const router = useRouter();

  useEffect(() => {
    const id : any = sessionStorage.getItem("ID");
    console.log("ID : ", id);

    if(id === null || id === ""){
      router.push("/Login");
    }
  },[]);

    const goToStartAppPage = () => {
      router.push("/StartApp");
    }

    const goToRegisterWordPage = () => {
        router.push("/RegWord")
    }
    return(
        <>
      <StyledCommonWrapper>
        <StyledContainer>
            <StyledBorderBottomDiv>
              <StyledTitle>Kera App</StyledTitle>
              {/* <Link href="/InitialScreen" style={{fontSize: "1.5rem",display: "inline-block", marginBottom: "10px"}}>Back to Initial Page</Link> */}
            </StyledBorderBottomDiv>
            <StyledButton style={{marginTop: "50px"}} onClick={goToStartAppPage}>Let's start app!!</StyledButton>
            <StyledButton style={{marginTop: "50px"}} onClick={goToRegisterWordPage}>Register new word</StyledButton>
        </StyledContainer>
      </StyledCommonWrapper>
    </>
    )
}

export default AppStart;
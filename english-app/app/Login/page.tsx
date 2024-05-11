
"use client";

import styled from "styled-components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { StyledCommonWrapper } from "../common/CommonWrapper";
import { StyledContainer } from "../common/Container";
import { StyledTitle } from "../common/Title";
import FormInput from "../common/FormInput";
import { StyledButton } from "../common/Button";
import { error } from "console";
import axios from "axios";
import { useRouter } from "next/navigation";
import { StyledBorderBottomDiv } from "../common/StyledBorderBottomDiv";
import Link from "next/link";
import { useState } from "react";

const StyledLoginWrapper = styled.div`
  padding-top: 30px;
`;

const StyledLoginForm = styled.form`
  width: 30%;
  margin: 0 auto;
`;

type IFormInput = {
  name: string;
  password: string;
  birthday: string;
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const[loginFailStatus, setLoginFailStatus] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    console.log("Login start");

    try {
      const response = await axios.post("http://localhost:8080/api/login", data);
      console.log("responseの中身: ", response);
      if(response.data === "Login fail"){
        setLoginFailStatus(true);
        console.log("Login end");
      }else{
        console.log("Login end");
        setLoginFailStatus(false);
        router.push("/AppStart");
      }
      
    } catch (error) {
      console.log("error contents: ",error);
      router.push("/ErrorPage");
    }
  };

  return (
    <>
      <StyledCommonWrapper>
        <StyledContainer>
          <StyledLoginWrapper>
            <StyledBorderBottomDiv>
            <StyledTitle>Login</StyledTitle>
            <Link href="/SignUp" style={{fontSize: "1.5rem",display: "inline-block", marginBottom: "10px"}}>Go to SignUp Page</Link>
            </StyledBorderBottomDiv>

            {loginFailStatus ? <div style={{color: "red", fontSize: "1.5rem", marginTop: "20px"}}>Login failed, check entered name and password</div> : ""}
            <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required"
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter your name"
                    type="text"
                  />
                )}
              />
              {errors.name && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.name.message}
                </p>
              )}

              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required"
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter password"
                    type="password"
                  />
                )}
              />
              {errors.password && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.password.message}
                </p>
              )}
              <StyledButton
                type="submit"
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  marginTop: "30px",
                }}
              >
                Login
              </StyledButton>
            </StyledLoginForm>
          </StyledLoginWrapper>
        </StyledContainer>
      </StyledCommonWrapper>
    </>
  );
};

export default Login;

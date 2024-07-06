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
  word: string;
  correctOption: string;
  incorrectOption1: string;
  incorrectOption2: string;
  incorrectOption3: string;
};

const RegWord = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const[regWordFailStatus, setRegWordFailStatus] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("data:", data);
    console.log("RegWord start");

    try {
      const response = await axios.post("http://localhost:8080/api/login", data);
      console.log("responseの中身: ", response);
      if(response.data === "Login fail"){
        setRegWordFailStatus(true);
        console.log("RegWord end");
      }else{
        console.log("RegWord end");
        setRegWordFailStatus(false);
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
            <StyledTitle>Register Word</StyledTitle>
            <Link href="/AppStart" style={{fontSize: "1.5rem",display: "inline-block", marginBottom: "10px"}}>Go to AppStart Page</Link>
            </StyledBorderBottomDiv>

            {regWordFailStatus ? <div style={{color: "red", fontSize: "1.5rem", marginTop: "20px"}}>Register word failed, please try again</div> : ""}
            <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="word"
                control={control}
                rules={{
                  required: "Word is required",
                  maxLength: {
                    value: 50,
                    message: "Word must be less than 50 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only alphabetic characters are allowed"
                  }
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter word you want to register"
                    type="text"
                  />
                )}
              />
              {errors.word && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.word.message}
                </p>
              )}

              <Controller
                name="correctOption"
                control={control}
                rules={{
                  required: "CorrectOption is required",
                  maxLength: {
                    value: 50,
                    message: "CorrectOption must be less than 50 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only alphabetic characters are allowed"
                  }
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter correctOption"
                    type="text"
                  />
                )}
              />
              {errors.correctOption && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.correctOption.message}
                </p>
              )}
              <Controller
                name="incorrectOption1"
                control={control}
                rules={{
                  required: "incorrectOption1 is required",
                  maxLength: {
                    value: 50,
                    message: "incorrectOption must be less than 50 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only alphabetic characters are allowed"
                  }
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter incorrectOption1"
                    type="text"
                  />
                )}
              />
              {errors.incorrectOption1 && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.incorrectOption1.message}
                </p>
              )}

              <Controller
                name="incorrectOption2"
                control={control}
                rules={{
                  required: "incorrectOption2 is required",
                  maxLength: {
                    value: 50,
                    message: "incorrectOption2 must be less than 50 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only alphabetic characters are allowed"
                  }
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter incorrectOption2"
                    type="text"
                  />
                )}
              />
              {errors.incorrectOption2 && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.incorrectOption2.message}
                </p>
              )}
              <Controller
                name="incorrectOption3"
                control={control}
                rules={{
                  required: "incorrectOption3 is required",
                  maxLength: {
                    value: 50,
                    message: "incorrectOption3 must be less than 50 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only alphabetic characters are allowed"
                  }
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter incorrectOption3"
                    type="text"
                  />
                )}
              />
              {errors.incorrectOption3 && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.incorrectOption3.message}
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
                Register
              </StyledButton>
            </StyledLoginForm>
          </StyledLoginWrapper>
        </StyledContainer>
      </StyledCommonWrapper>
    </>
  );
};

export default RegWord;
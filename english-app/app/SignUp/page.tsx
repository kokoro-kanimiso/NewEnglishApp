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

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    console.log("Login start");

    try {
      const response = await axios.post("http://localhost:8080/api/signup", {name: "", password: "", birthday: "2024-12-12"});
      console.log("responseの中身: ", response);
      console.log("Login end");
      
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
            <StyledTitle>SignUp</StyledTitle>
            <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                  maxLength: {
                    value: 10,
                    message: "Name must be less than 10 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Name must be English or number",
                  },
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter your name（Less than 10 characters and English or number）"
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
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Password must be 8 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Password must be English or number",
                  },
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter password（Exactly 8 characters  and English or number）"
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

              <Controller
                name="birthday"
                control={control}
                rules={{
                  required: "Birthday is required",
                  validate: (value) =>
                    new Date(value) <= new Date() ||
                    "Birthday must be in the past",
                }}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    title="Please enter your birthday"
                    type="date"
                  />
                )}
              />
              {errors.birthday && (
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errors.birthday.message}
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
                Sign up
              </StyledButton>
            </StyledLoginForm>
          </StyledLoginWrapper>
        </StyledContainer>
      </StyledCommonWrapper>
    </>
  );
};

export default SignUp;

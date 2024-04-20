import { StyledButton } from "@/app/common/Button";

const LoginButton = () => {
  const handler = () => {
    console.log("Login");
  };

  return <StyledButton onClick={handler}>Login</StyledButton>;
};

export default LoginButton;

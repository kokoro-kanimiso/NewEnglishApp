import { StyledButton } from "@/app/common/Button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  const handler = () => {
    console.log("Login");
    router.push("/Login");
  };

  return <StyledButton onClick={handler}>Login</StyledButton>;
};

export default LoginButton;

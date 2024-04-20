import LoginButton from "./modules/LoginButton";
import MainTitle from "./modules/MainTitle";
import SignUpButton from "./modules/SignUpButton";
import StartAppButton from "./modules/StartAppButton";

const InitialScreen = () => {
  return (
    <>
      <MainTitle />
      <LoginButton />
      <SignUpButton />
      <StartAppButton />
    </>
  );
};

export default InitialScreen;

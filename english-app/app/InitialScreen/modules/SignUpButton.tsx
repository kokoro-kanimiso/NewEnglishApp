import { StyledButton } from "@/app/common/Button";

const SignUpButton = () => {

    const handler = () => {
        console.log("signUp");
    }

    return(
        <StyledButton onClick={handler}>Sign Up</StyledButton>
    )
}

export default SignUpButton;
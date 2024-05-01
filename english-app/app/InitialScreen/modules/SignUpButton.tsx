import { StyledButton } from "@/app/common/Button";
import { useRouter } from "next/navigation";

const SignUpButton = () => {
    const router = useRouter();
    const handler = () => {
        console.log("signUp");
        router.push('/SignUp');
    }

    return(
        <StyledButton onClick={handler}>Sign Up</StyledButton>
    )
}

export default SignUpButton;
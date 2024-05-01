import { StyledButton } from "@/app/common/Button"
import { useRouter } from "next/navigation";

const StartAppButton = () => {
    const router = useRouter();
    const handler = () => {
        console.log("Start app");
        router.push('/AppStart');
    }
    return(
        <StyledButton onClick={handler}>Start App</StyledButton>
    )
}

export default StartAppButton;
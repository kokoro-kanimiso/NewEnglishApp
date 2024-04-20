import { StyledButton } from "@/app/common/Button"

const StartAppButton = () => {
    const handler = () => {
        console.log("Start app");
    }
    return(
        <StyledButton onClick={handler}>Start App</StyledButton>
    )
}

export default StartAppButton;
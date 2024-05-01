import styled from "styled-components"

const StyledLabbel = styled.label`
    font-size: 1.5rem;
    color: #333;
`;

const StyledInput = styled.input`
    width: 300px;
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`

const FormInput = ({ title,type, ...rest }: { title: string, type: string }) => {

    return(
        <div style={{textAlign: "left", marginTop: "30px"}}>
            <StyledLabbel>{title}</StyledLabbel>
            <StyledInput {...rest} type={type}/>
        </div>
    )
}

export default FormInput;
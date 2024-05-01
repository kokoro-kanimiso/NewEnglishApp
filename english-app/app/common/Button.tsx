import styled from "styled-components";

export const StyledButton = styled.button`
  width: 300px;
  padding: 10px;
  background-color  : #BB86FC;
  font-size: 2rem;
  color: white;
  display: block;
  margin: 0 auto;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover{
    color: #BB86FC;
    background-color: white;
    border: solid 1px #BB86FC;
    cursor: pointer;
  }
`;

const Button = () => {

}
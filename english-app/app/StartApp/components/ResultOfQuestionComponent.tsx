import styled from "styled-components";
import { questionAndAnswerData, questionListData } from "../page";


type argProps = {
    data: questionListData;
    index: number;
    mistakeWordMap: Map<string, string>;
    questionAndAnswerInfoMap: Map<string, questionAndAnswerData>
  };

const AnswerCheckComponent = styled.div`
  border  : 1px solid black ;
  width: 50%;
  margin: 20px auto 0px auto;

`;

const StyledUl = styled.ul`
    padding-left: 0px;
`;

const StyledLi = styled.li`
  list-style  : none;
`;

const ResultOfQuestionComponent: React.FC<argProps> = ({data, index, mistakeWordMap,questionAndAnswerInfoMap}) => {
    return (
        <>
        <AnswerCheckComponent>
            <h1>問題{index+1}（{mistakeWordMap.get(data.word) != null? <span style={{color: "red"}}>不正解</span> : <span>正解</span>}）</h1>
            <StyledUl>
                <StyledLi>{data.word}</StyledLi>
                <StyledLi>正解：{data.correct}</StyledLi>
                <StyledLi>あなたの回答：{questionAndAnswerInfoMap.get(data.word)?.answer}</StyledLi>
            </StyledUl>
        </AnswerCheckComponent>
        </>
    )
}

export default ResultOfQuestionComponent;
import React from "react";
import styled from "styled-components";
import { questionAndAnswerData, questionListData } from "../page";
import { StyledCommonWrapper } from "@/app/common/CommonWrapper";
import { StyledContainer } from "@/app/common/Container";
import ResultOfQuestionComponent from "./ResultOfQuestionComponent";

const StyledResultPageWrapper = styled(StyledCommonWrapper)`
  height  :100% ;
`;

const StyledResultPageContainer = styled(StyledContainer)`
  height: 100%;
  padding: 50px 0px;
`;

const QuestionStyle = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const Word = styled.h1`
  font-size: 4rem;
`;

const AnswerBtn = styled.input`
  display: block;
  width: 100px;
  padding: 5px 10px;
  margin: 0 auto;
`;

// プロパティの型定義
type QuestionComponentProps = {
  optionsList: string[]; // 選択肢リスト
  questionList: questionListData;
  checkAnswer: (option: string, word: string) => void; // 回答をチェックする関数
  index: string;
  currentQuestionNum: string; // 何問目かを表す
};

type argProps = {
  correctNum: number;
  mistakeWordMap: Map<string, string>;
  questionListData: questionListData[];
  questionAndAnswerInfoMap: Map<string, questionAndAnswerData>;
};

const ResultComponent: React.FC<argProps> = ({
  correctNum,
  mistakeWordMap,
  questionListData,
  questionAndAnswerInfoMap
}) => {
  return (
    <>
      <StyledResultPageWrapper>
        <StyledResultPageContainer>
          <h1>
            正解数：{correctNum}/10
          </h1>
          {questionListData.map((data, index) => {
            return (
              <ResultOfQuestionComponent key={index} data={data} index={index} mistakeWordMap={mistakeWordMap} questionAndAnswerInfoMap={questionAndAnswerInfoMap} />
           )
          })}
          {/* <h1>不正解単語：{mistakeWordList.map((word) => word + ",")}</h1>
          <h1>問題：{questionListData.map((data, index) => data.correct+"word"+data.word+data.incorrect1+"index:"+index)}</h1> */}
            
        </StyledResultPageContainer>
      </StyledResultPageWrapper>
    </>
  );
};
//   ({ optionsList, questionList, checkAnswer, index, currentQuestionNum }) => {
//     console.log("memo rendering");
//     console.log("currentQuestion : ", currentQuestionNum);
//     const word = questionList !== null && questionList !== undefined ? questionList.word : "";
//     return (
//     <QuestionStyle id={"question"+index} style={currentQuestionNum === index ? {display:"block"} : {display:"none"}}>
//       <Word>{word}</Word>
//       {optionsList.map((option, index) => (
//         <AnswerBtn
//           key={index}
//           type="submit"
//           onClick={() => checkAnswer(option,word)}
//           className={questionList !== null && questionList !== undefined  ? option : ""}
//           value={questionList !== null && questionList !== undefined  ? questionList[option] : ""}
//           name={questionList !== null && questionList !== undefined  ? option : ""}
//         ></AnswerBtn>
//       ))}
//     </QuestionStyle>
//     )
// };

export default ResultComponent;

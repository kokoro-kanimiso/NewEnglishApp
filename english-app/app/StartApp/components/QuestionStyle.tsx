import React from "react";
import styled from "styled-components";
import { questionListData } from "../page";

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
  checkAnswer: (option: string) => void; // 回答をチェックする関数
  index: string;
  currentQuestionNum: string; // 何問目かを表す
};

const QuestionComponent = React.memo<QuestionComponentProps>(
  ({ optionsList, questionList, checkAnswer, index, currentQuestionNum }) => {
    console.log("memo rendering");
    console.log("currentQuestion : ", currentQuestionNum);
    return (
    <QuestionStyle id={"question"+index} style={currentQuestionNum === index ? {display:"block"} : {display:"none"}}>
      <Word>{questionList !== null && questionList !== undefined ? questionList.word : ""}</Word>
      {optionsList.map((option, index) => (
        <AnswerBtn
          key={index}
          type="submit"
          onClick={() => checkAnswer(option)}
          className={questionList !== null && questionList !== undefined  ? option : ""}
          value={questionList !== null && questionList !== undefined  ? questionList[option] : ""}
          name={questionList !== null && questionList !== undefined  ? option : ""}
        ></AnswerBtn>
      ))}
    </QuestionStyle>
    )
}
);

export default QuestionComponent;

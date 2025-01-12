import React, { useEffect, useState } from "react";
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
  checkAnswer: (option: string, word: string, userAnswer: string, correct: string) => void; // 回答をチェックする関数
  index: string;
  currentQuestionNum: string; // 何問目かを表す
};

const QuestionComponent = React.memo<QuestionComponentProps>(
  ({ optionsList, questionList, checkAnswer, index, currentQuestionNum }) => {
    console.log("memo rendering");

    const [optionsList1, setOptionsList] = useState<string[]>([
      "correct",
      "incorrect1",
      "incorrect2",
      "incorrect3",
    ]);

    useEffect(() => {

      const shuffleArray = () => {
        for (let i = optionsList1.length - 1; i > 0; i--) {
          // 0 から i の間でランダムなインデックスを選ぶ
          const j = Math.floor(Math.random() * (i + 1));
          // array[i] と array[j] を交換
          [optionsList1[i], optionsList1[j]] = [optionsList1[j], optionsList1[i]];
        }
        setOptionsList(optionsList1);
      };

      shuffleArray();
    }, [])

    const word = questionList !== null && questionList !== undefined ? questionList.word : "";
    return (
    <QuestionStyle id={"question"+index} style={currentQuestionNum === index ? {display:"block"} : {display:"none"}}>
      <Word>{word}</Word>
      {optionsList1.map((option, index) => (
        <AnswerBtn
          key={index}
          type="submit"
          onClick={() => checkAnswer(option,word,questionList[option],questionList["correct"])}
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

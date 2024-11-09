"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionComponent from "./components/QuestionStyle";
import { set } from "react-hook-form";

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

type userIdData = {
  userId: string;
};

type IFormInput = {
  correct?: string;
  incorrect1?: string;
  incorrect2?: string;
  incorrect3?: string;
};

export type questionListData = {
  userId: string;
  word: string;
  correct: string;
  incorrect1: string;
  incorrect2: string;
  incorrect3: string;
  [key: string]: string;
};

const StartApp = () => {
  const [questionList, setQuestionlist] = useState<questionListData[]>([]);
  const [optionsList, setOptionsList] = useState<string[]>([
    "correct",
    "incorrect1",
    "incorrect2",
    "incorrect3",
  ]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState<string>("0");

  const [answeredFlag, setAnsweredFlag] = useState<string>("");

  let correctFlg: string = "0";

  useEffect(() => {
    console.log("startApp start");

    const fetchData = async () => {
      const userIdData: userIdData = { userId: "27" };
      const result = await axios.post(
        "http://localhost:8080/api/StartApp",
        userIdData
      );

      setQuestionlist(result.data);
    };

    const shuffleArray = () => {
      for (let i = optionsList.length - 1; i > 0; i--) {
        // 0 から i の間でランダムなインデックスを選ぶ
        const j = Math.floor(Math.random() * (i + 1));
        // array[i] と array[j] を交換
        [optionsList[i], optionsList[j]] = [optionsList[j], optionsList[i]];
      }
      setOptionsList(optionsList);
    };

    fetchData();
    shuffleArray();
  }, []);

  const checkAnswer = (answer: string) => {
    if (answer === "correct") {
      correctFlg = "";
    } else {
    }
    alert("answer is " + answer);
    console.log("questionNum", currentQuestionNum);
    setCurrentQuestionNum((prev) => String(Number(prev) + 1));
    setAnsweredFlag("1");
  };

  return (
    <>
      {currentQuestionNum === "10" ? (<h1>終了</h1>) : (questionList.map((ab, index) => {
        return (
          <QuestionComponent
            key={index}
            optionsList={optionsList}
            questionList={ab}
            checkAnswer={checkAnswer}
            index={String(index)}
            currentQuestionNum={currentQuestionNum}
          ></QuestionComponent>
        );
      }))}
      {/* <QuestionComponent  optionsList={optionsList} questionList={questionList[0]} checkAnswer={checkAnswer}>

    </QuestionComponent> */}
      {/* <QuestionStyle>
      <Word>{questionList.length === 0 ? "" : questionList[5].word}</Word>
      <AnswerBtn
        type="submit"
        onClick={() => checkAnswer(optionsList[0])}
        className={questionList.length !== 0 ? optionsList[0] : ""}
        value={questionList.length === 0 ? "" : questionList[5][optionsList[0]]}
        name={questionList.length === 0 ? "" : optionsList[0]}
      />
      <AnswerBtn
        type="submit"
        onClick={() => checkAnswer(optionsList[1])}
        className={questionList.length !== 0 ? optionsList[1] : ""}
        value={questionList.length === 0 ? "" : questionList[5][optionsList[1]]}
        name={questionList.length === 0 ? "" : optionsList[1]}
      />
      <AnswerBtn
        type="submit"
        onClick={() => checkAnswer(optionsList[2])}
        className={questionList.length !== 0 ? optionsList[2] : ""}
        value={questionList.length === 0 ? "" : questionList[5][optionsList[2]]}
        name={questionList.length === 0 ? "" : optionsList[2]}
      />
      <AnswerBtn
        type="submit"
        onClick={() => checkAnswer(optionsList[3])}
        className={questionList.length !== 0 ? optionsList[3] : ""}
        value={questionList.length === 0 ? "" : questionList[5][optionsList[3]]}
        name={questionList.length === 0 ? "" : optionsList[3]}
      />
    </QuestionStyle> */}
      {/* <div style={{ display: answeredFlag === "1" ? "block" : "none" }}>
        aaa
      </div> */}
    </>
  );
};

export default StartApp;

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionComponent from "./components/QuestionStyle";
import { set } from "react-hook-form";
import ResultComponent from "./components/ResultStyle";
import { useRouter } from "next/navigation";

type userIdData = {
  userId: string;
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

export type questionAndAnswerData = {
  word: string;
  correct: string;
  answer: string;
}

const StartApp = () => {
  const [questionList, setQuestionlist] = useState<questionListData[]>([]);
  const [optionsList, setOptionsList] = useState<string[]>([
    "correct",
    "incorrect1",
    "incorrect2",
    "incorrect3",
  ]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState<string>("0");
  const [correctNum, setCorrectNum] = useState<number>(0);
  const [mistakeWordMap, setMistakeWordMap] = useState<Map<string, string>>(new Map<string, string>());
  const [questionAndAnswerInfoMap, setQuestionAndAnswerInfoMap ] = useState<Map<string, questionAndAnswerData>>(new Map<string, questionAndAnswerData>());

  const router = useRouter();

  useEffect(() => {
    console.log("startApp start");

    const fetchData = async () => {
      const userIdData: userIdData = { userId: "27" };
      try {
        const result = await axios.post(
          "http://localhost:8080/api/StartApp",
          userIdData
        );
  
        setQuestionlist(result.data);
        
      } catch (error) {
        router.push("/ErrorPage")
      }
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

  const checkAnswer = (answer: string, word: string, userAnswer: string, correct: string) => {
    if (answer === "correct") {
      setCorrectNum(prev => prev + 1);
      alert("answer is " + correct +"\n"+"goodJob!!");
    } else{
      mistakeWordMap.set(word, word);
      setMistakeWordMap(mistakeWordMap);
      alert("answer is " + correct +"\n"+"Do your best next!!");
    }
    setCurrentQuestionNum((prev) => String(Number(prev) + 1));

    questionAndAnswerInfoMap.set(word, {word: word,
      correct: correct,
      answer: userAnswer});
  };

  return (
    <>
      {currentQuestionNum === "10" ? (<ResultComponent correctNum={correctNum} mistakeWordMap={mistakeWordMap} questionListData={questionList} questionAndAnswerInfoMap={questionAndAnswerInfoMap} />) : (questionList.map((ab, index) => {
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

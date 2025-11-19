import React, { useState, useRef } from "react";
import { data } from "../../assets/data.js";
import "./Quiz.css";

function Quiz() {
  const [index, setIndex] = useState(0);
  const questions = data[index];
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const Option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock == false) {
      if (questions.ans == ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        Option_array[questions.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    const nextidx = index + 1;
    if (nextidx > data.length - 1) {
      setResult(true);
    }
    if (lock === true) {
      setIndex(nextidx);
      setLock(false);
      Option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const playAgain = () => {
    setIndex(0);
    setLock(false);
    setScore(0);
    setResult(false);
  };

  return (
    <div className="w-4/5 sm:w-3/5 md:w-2/5 m-auto border-2 bg-[#12101a] text-white border-[#12101a] rounded-2xl flex flex-col gap-3 ">
      <h1 className="text-4xl pt-4 pl-5">Quiz App</h1>
      <hr className="w-9/10 m-auto" />
      {result ? (
        <>
          <h2 className="m-auto">
            You scored {score} out of {data.length}
          </h2>
          <button
            onClick={playAgain}
            className="bg-[#2d1849] mb-2 py-2 m-auto w-2/5 rounded-md cursor-pointer"
          >
            Play Again
          </button>
        </>
      ) : (
        <>
          <p className="pl-6 text-lg">
            {index + 1}. {questions.question}
          </p>
          <ul className="flex flex-col text-lg pl-9 gap-2 pr-15">
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
              className="cursor-pointer border-2 border-amber-100 p-2 rounded-md "
            >
              {questions.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
              className="cursor-pointer border-2 border-amber-100 p-2 rounded-md "
            >
              {questions.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
              className="cursor-pointer border-2 border-amber-100 p-2 rounded-md "
            >
              {questions.option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
              className="border-2 border-amber-100 p-2 rounded-md cursor-pointer"
            >
              {questions.option4}
            </li>
          </ul>
          <button
            onClick={next}
            className="bg-[#0e183b] py-2 m-auto w-2/5 rounded-md cursor-pointer"
          >
            Next
          </button>
          <p className="mb-2 m-auto">
            {index + 1} of {data.length} questions
          </p>
        </>
      )}
    </div>
  );
}

export default Quiz;

'use client';
import {useState} from "react";
import {quiz} from "@/lib/utils/data";
import Image from "next/image";
const QuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const {questions} = quiz;
  const {question, answers, correctAnswer} = questions[activeQuestion];


  // select and check answer
  const onAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  }

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prevState) =>
      selectedAnswer ?
        {
          ...prevState,
          score: prevState.score + 5,
          correctAnswers: prevState.correctAnswers + 1,
        } :
        {
          ...prevState,
          wrongAnswers: prevState.wrongAnswers + 1,
        }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);

  }

  return (
    <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container px-8 xl:px-10 '}>
      <h1 className={'text-5xl'}>Quiz Page</h1>
      <div>
        {/*<h2 className={'text-3xl'}>*/}
        {/*  Question: {activeQuestion + 1}*/}
        {/*  <span>/{questions.length}</span>*/}
        {/*</h2>*/}
      </div>
      <div>
        {!showResult ? (
          <div className={'quiz-container flex'}>
            <div className={'w-1/2'}>
              <Image src={'/csdd.png'} alt='sd' width={778} height={330}/>
              <h3>{question}</h3>
            </div>
            <div className={'w-1/2'}>
              {answers.map((answer, index) => (
                <li
                  key={answer.id}
                  onClick={() => onAnswerSelected(answer, index)}
                  className={
                    selectedAnswerIndex === index ? 'li-selected list-none' : 'li-hover list-none'
                  }>
                  <span>{answer}</span>
                </li>
              ))}
              {checked ? (
                <button onClick={nextQuestion} className={'bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white'} >
                  {
                    activeQuestion === questions.length - 1 ? 'Finish' : 'Next'
                  }
                </button>
              ) : (
                <button onClick={nextQuestion} disabled={true} className={'bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" disabled '}>
                  {
                    activeQuestion === questions.length - 1 ? 'Finish' : 'Next'
                  }
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className={'quiz-container'}>
            <h3>Results</h3>
            <h3 className={''}>Overall {(result.score / 25) * 100}%</h3>
            <p className={'font-bold'}>Total Questions: <span>{questions.length}</span></p>
            <p className={'font-bold'}>Total Score: <span>{result.score}</span></p>
            <p className={'font-bold'}>Correct Answers: <span>{result.correctAnswers}</span></p>
            <p className={'font-bold'}>Wrong Answers: <span>{result.wrongAnswers}</span></p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
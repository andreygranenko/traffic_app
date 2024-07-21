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
    <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container px-8 xl:px-10 py-8 mx-auto'}>
      <div>
        {/*<h2 className={'text-3xl'}>*/}
        {/*  Question: {activeQuestion + 1}*/}
        {/*  <span>/{questions.length}</span>*/}
        {/*</h2>*/}
      </div>
      <div>
        {!showResult ? (
          <div className={'quiz-container flex gap-20 justify-between mt-5'}>
            <div className={'w-1/2'}>
              <Image src={'/csdd.png'} alt='sd' width={778} height={330}/>
              <h3 className={'text-3xl font-bold mt-5'}>{question}</h3>
            </div>
            <div className={'w-1/2 flex flex-col gap-5'}>
              {answers.map((answer, index) => (
                <div
                  key={answer.id}
                  onClick={() => onAnswerSelected(answer, index)}
                  className="flex overflow-y-auto justify-between bg-base-300 p-3 rounded-xl items-center ">
                  <span className={'break-all'}>{answer}</span>
                  <input type="checkbox"  checked={selectedAnswerIndex === index} className="checkbox" />
                </div>
                // <li
                //   key={answer.id}
                //   onClick={() => onAnswerSelected(answer, index)}
                //   className={
                //     selectedAnswerIndex === index ? 'li-selected list-none' : 'li-hover list-none'
                //   }>
                //   <span>{answer}</span>
                // </li>
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
            <h3 className={'text-center text-3xl font-bold'}>Testa rezultāts</h3>
            {
              (result.score / 25) * 100 > 50 ?
                (
                  <>
                    <div style={{
                      height: '50px',
                      width: '28px',
                      borderBottom: '10px solid black',
                      borderRight: '10px solid black',
                      transform: 'rotate(45deg)',
                      margin: '20px auto'
                    }}></div>
                    <h3 className={'text-xl text-center my-5'}>Lieliski, Jūs esat nokārtojuši </h3>
                  </>


                ) :
                (
                  <>
                    <div  style={{
                      transform: 'rotate(45deg)',
                      '--b': '10px',   /* the thickness*/
                      '--c': '#0000 90deg,#000 0', /* the coloration */
                      'width':'50px', /* the size */
                      aspectRatio:1,
                      background: 'conic-gradient(from 90deg at var(--b) var(--b),var(--c)) calc(100% + var(--b)/2) calc(100% + var(--b)/2)/ calc(50%  + var(--b))   calc(50%  + var(--b))',
                      display: 'block',
                      margin: '20px auto 20px auto',
                      verticalAlign: 'middle',
                    }}></div>
                    <h3 className={'text-xl text-center my-5'}>Jūs neesat nokārtojuši testu</h3>
                  </>

                )
            }
            <div className={'flex justify-center gap-10 '}>
              <div className={'flex flex-col items-center bg-base-300 p-5 rounded-xl'}>
                <h4 className={'font-bold'}>JŪSU REZULTĀTS</h4>
                <h3 className={'text-2xl'}>{(result.score / 25) * 100}%</h3>
                <hr className={'w-full h-2 text-black border-black'}/>
                <h3 className={'uppercase'}>vajadzīgais Rezultāts: 50%</h3>
              </div>

              <div className={'flex flex-col items-center bg-base-300 p-5 rounded-xl'}>
                <h4 className={'font-bold'}>JŪSU PUNKTI</h4>
                <h3 className={'text-2xl'}>{result.score}</h3>
                <hr className={'w-full h-2 text-black border-black'}/>
                <p className={' uppercase'}>PAREIZĀS ATBILDES SKAITS: {result.correctAnswers}</p>
              </div>
            </div>


            {/*<p className={'font-bold'}>Total Questions: <span>{questions.length}</span></p>*/}
            {/*<p className={'font-bold'}>Total Score: <span>{result.score}</span></p>*/}
            {/*<p className={'font-bold'}>Correct Answers: <span>{result.correctAnswers}</span></p>*/}
            {/*<p className={'font-bold'}>Wrong Answers: <span>{result.wrongAnswers}</span></p>*/}
            <div className={'flex justify-center mt-5'}>
              <button className={'btn btn-neutral'} onClick={() => window.location.reload()}>Restart</button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
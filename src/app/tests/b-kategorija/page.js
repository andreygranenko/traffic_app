'use client';
import {useEffect, useMemo, useState} from "react";
import {quiz} from "@/lib/utils/data";
import Image from "next/image";
import { motion } from 'framer-motion';
import {fetchQuizQuestions} from "@/lib/fetch/fetch";

function shuffle(array = []) {
  if (!Array.isArray(array)) return [];
  const arrayCopy = [...array];
  return arrayCopy.sort(() => Math.random() - 0.5);
}



const QuizPage = () => {
  const [start, setStart] = useState(false);
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


  const [showMistakes, setShowMistakes] = useState(false);
  const [mistakesCheck, setMistakesCheck] = useState({
    mistakes: [],
  });
  const [activeMistake, setActiveMistake] = useState(0);
  const {
    question : questionMiss,
    correctAnswer : correctAnswerMiss,
    selectedAnswer : selectedAnswerMiss,
    answers: answersMiss,
    img: imgMiss
  } = mistakesCheck.mistakes[activeMistake] || {};

  const [questions, setQuestions] = useState(null);
  const [visible, setVisible] = useState(false);
  // const {questions} = quiz;
  const {question, answers, correctAnswer, img} = questions ? questions[activeQuestion] : {};
  console.log(shuffle(questions))
  const shuffledAnswers = useMemo(() => shuffle(answers), [answers]);
  useEffect(() => {
    fetchQuizQuestions("questions")
      .then((data) => {
      setQuestions(shuffle(data));
      });
  }, []);


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


  const nextMistake = () => {
    if (activeMistake !== mistakesCheck.mistakes.length - 1) {
      setActiveMistake((prev) => prev + 1);
    } else {
      setActiveMistake(0);
      setShowMistakes(false);
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
    setMistakesCheck((prevState) =>{
      if (!selectedAnswer) {
        return {
          mistakes: [...prevState.mistakes, {
            question: question,
            correctAnswer: correctAnswer,
            selectedAnswer: shuffledAnswers[selectedAnswerIndex],
            answers: shuffledAnswers,
            img: img
          }]
        }
      } else {
        return {
          mistakes: [...prevState.mistakes]
        }
      }
    });
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      setVisible(false);
      setTimeout(() => setVisible(true), 100);
    }
    setChecked(false);
  }

  if (!questions) return (
    // <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-56 w-5/6	 px-8 xl:px-10 py-8 mx-auto my-10 "></div>
    // </div>
  )


  if (start) {

    if (showMistakes) {
      return (
        <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container px-8 xl:px-10 py-8 mx-auto'}>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }} className={`quiz-container   mt-5 ` }>
            <div>
              <h2 className={'text-2xl font-bold'}>{activeMistake + 1}/{mistakesCheck.mistakes.length} jautājums</h2>
            </div>
            <div className={'flex flex-col lg:flex-row gap-5 lg:gap-20 lg:justify-between mt-3'}>
              <div className={'lg:w-1/2'}>
                <Image src={`/quiz/${imgMiss.src}`} className={'rounded-xl'} alt='sd' width={778} height={330}/>
                <h3 className={'text-3xl font-bold mt-5'}>{questionMiss}</h3>
              </div>
              <div className={'lg:w-1/2 flex flex-col gap-5'}>
                {answersMiss.map((answer, index) => {
                  if (answer === correctAnswerMiss) {
                    return (
                      <div
                        key={index}
                        className="flex overflow-y-auto justify-between bg-green-300 p-3 rounded-xl items-center ">
                        <span className={'break-all'}>{answer}</span>

                      </div>
                    );
                } else if (answer === selectedAnswerMiss) {
                    return (
                      <div
                        key={index}
                        className="flex overflow-y-auto justify-between bg-red-300 p-3 rounded-xl items-center ">
                        <span className={'break-all'}>{answer}</span>

                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className="flex overflow-y-auto justify-between bg-base-300 p-3 rounded-xl items-center ">
                        <span className={'break-all'}>{answer}</span>

                      </div>
                    );
                  }

              })}
                  <button onClick={() => activeMistake === mistakesCheck.mistakes.length - 1 ? window.location.reload() : nextMistake()} className={' bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white'} >
                    {
                      activeMistake === mistakesCheck.mistakes.length - 1 ? 'Finish' : 'Next'
                    }
                  </button>

              </div>
            </div>


          </motion.div>

        </div>

        </div>
      )

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.75 }} className={`quiz-container   mt-5 ` }>
              <div>
                <h2 className={'text-2xl font-bold'}>{activeQuestion + 1}/{questions.length} jautājums</h2>
              </div>
              <div className={'flex flex-col lg:flex-row gap-5 lg:gap-20 lg:justify-between mt-3'}>
                <div className={'lg:w-1/2'}>
                  <Image src={`/quiz/${img.src}`} className={'rounded-xl'} alt='sd' width={778} height={330}/>
                  <h3 className={'text-3xl font-bold mt-5'}>{question}</h3>
                </div>
                <div className={'lg:w-1/2 flex flex-col gap-5'}>
                  {shuffledAnswers.map((answer, index) => (
                    <div
                      key={index}
                      onClick={() => onAnswerSelected(answer, index)}
                      className="flex overflow-y-auto justify-between bg-base-300 p-3 rounded-xl items-center ">
                      <span className={'break-all'}>{answer}</span>
                      <input
                        type="checkbox"
                        checked={selectedAnswerIndex === index}
                        onChange={() => onAnswerSelected(answer, index)}
                        className="checkbox" />
                    </div>
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


            </motion.div>
          ) : (
            <div style={{minHeight: 'calc(100vh - 288px)'}} className={`quiz-container  transition-all duration-500 ${ visible ? 'opacity-100 ' : 'opacity-0 '} flex flex-col items-center justify-around`}>
              <h3 className={'text-center text-3xl font-bold'}>Testa rezultāts</h3>
              {
                result.correctAnswers  >= Math.round(questions.length / 100 * 90) ?
                  (
                    <div>
                      <div style={{
                        height: '50px',
                        width: '28px',
                        borderBottom: '10px solid black',
                        borderRight: '10px solid black',
                        transform: 'rotate(45deg)',
                        margin: '20px auto'
                      }}></div>
                      <h3 className={'text-xl text-center my-5'}>Lieliski, Jūs esat nokārtojuši </h3>
                    </div>


                  ) :
                  (
                    <div>
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
                    </div>

                  )
              }
              <div className={`flex flex-col sm:flex-row  justify-center gap-10 transition-all duration-500 ${visible ? 'opacity-100 ' : 'opacity-0 '}`}>
                <div className={'flex flex-col items-end gap-5'}>
                  <div className={'flex flex-col items-center bg-base-300 p-5 rounded-xl'}>
                    <h4 className={'font-bold'}>JŪSU REZULTĀTS</h4>
                    <h3 className={'text-2xl'}>{Math.round((result.correctAnswers / questions.length ) * 100)}%</h3>
                    <hr className={'w-full h-2 text-black border-black'}/>
                    <h3 className={'uppercase'}>vajadzīgais Rezultāts: 90%</h3>
                  </div>
                  {
                    mistakesCheck.mistakes.length > 0 && (
                      <button className={'btn'} onClick={() => setShowMistakes(true)}>Apskatīt kļūdas</button>
                    )
                  }

                </div>

                <div className={'flex flex-col items-start gap-5'}>
                  <div className={'flex flex-col items-center bg-base-300 p-5 rounded-xl'}>
                    <h4 className={'font-bold'}>PAREIZAS ATBILDES</h4>
                    <h3 className={'text-2xl'}>{result.correctAnswers}/{questions.length}</h3>
                    <hr className={'w-full h-2 text-black border-black'}/>
                    <p className={' uppercase'}>PAREIZĀS ATBILDES SKAITS JĀBŪT {Math.round(questions.length / 100 * 90)}</p>
                  </div>
                  {
                    mistakesCheck.mistakes.length > 0 && (
                      <button className={'btn btn-neutral '} onClick={() => window.location.reload()}>Mēģināt vēlreiz</button>

                    )
                  }
                </div>
              </div>
              {
                mistakesCheck.mistakes.length === 0 && (
                  <button className={'btn btn-neutral  mt-5'} onClick={() => window.location.reload()}>Mēģināt vēlreiz</button>
                )
              }
              <div className={'flex justify-center gap-5 mt-5 '}>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container px-8 xl:px-10 py-8 mx-auto'}>
        <div className={'bg-base-300 rounded-xl flex flex-col-reverse gap-5 lg:flex-row lg:justify-around p-5 lg:p-10 w-10/12 mx-auto'}>
          <div className={' flex-1 break-normal flex flex-col justify-around gap-3'}>
            <h3 className={'text-4xl uppercase font-bold'}>B kategorijas sagatavošanas tests</h3>
            <p className={'text-lg'}>
              Tests, lai sagatavotos eksāmenam CSDD B kategorijai.
              Satur piemērus par jautājumiem, kurus var uzdot eksāmenā, tie var atšķirties
            </p>
            <button onClick={() => setStart(true)} className={'btn btn-neutral w-32'}>Sākt</button>

          </div>
          <div className={'flex-1'}>
            <Image className={'rounded-xl'} src={'https://images.pexels.com/photos/6683673/pexels-photo-6683673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={'quiz'} width={594} height={366}/>
          </div>
        </div>
      </div>
    )
  }


}

export default QuizPage;

'use client';
import { useState} from "react";
import {quiz} from "@/lib/utils/data";
import Image from "next/image";
import { motion } from 'framer-motion';


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
  const [visible, setVisible] = useState(false);
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
      setVisible(false);
      setTimeout(() => setVisible(true), 100);
    }
    setChecked(false);
  }

  if (start) {
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
              transition={{ ease: 'easeInOut', duration: 0.75 }} className={`quiz-container  flex flex-col lg:flex-row gap-5 lg:gap-20 lg:justify-between mt-5 ` }>
              <div className={'lg:w-1/2'}>
                <Image src={'/csdd.png'} alt='sd' width={778} height={330}/>
                <h3 className={'text-3xl font-bold mt-5'}>{question}</h3>
              </div>
              <div className={'lg:w-1/2 flex flex-col gap-5'}>
                {answers.map((answer, index) => (
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
            </motion.div>
          ) : (
            <div style={{minHeight: 'calc(100vh - 288px)'}} className={`quiz-container  transition-all duration-500 ${ visible ? 'opacity-100 ' : 'opacity-0 '} flex flex-col justify-around`}>
              <h3 className={'text-center text-3xl font-bold'}>Testa rezultāts</h3>
              {
                (result.score / 25) * 100 > 50 ?
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
              <div className={`flex flex-col sm:flex-row justify-center gap-10 transition-all duration-500 ${visible ? 'opacity-100 ' : 'opacity-0 '}`}>
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
              <div className={'flex justify-center mt-5 '}>
                <button className={'btn btn-neutral '} onClick={() => window.location.reload()}>Restart</button>
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

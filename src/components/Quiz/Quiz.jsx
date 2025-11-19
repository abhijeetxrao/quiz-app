import React from 'react'
import { data } from '../../assets/data.js'
import {useState} from 'react'
import './Quiz.css';

function Quiz() {
  const [index, setIndex] = useState(2);
  const [questions, setQuestions] = useState(data[index])
  const [selected, setSelected] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  
  const handleOption = (e,option)=>{
    // if(questions.ans==ans){
    //   e.target.classList.add('correct')
    // }
    // else{
    //   e.target.classList.add('wrong')
    // }

    setSelected(ans);
    if(questions.ans === ans){
      
    }
  }
  return (
    <div className='w-4/5 sm:w-3/5 md:w-2/5 m-auto border-2 bg-[#12101a] text-white border-[#12101a] rounded-2xl flex flex-col gap-3 '>
      <h1 className='text-4xl pt-4 pl-5'>Quiz App</h1>
      <hr className='w-9/10 m-auto'/>
      <p className='pl-6 text-lg'>{index+1}. {questions.question}</p>
      <ul className='flex flex-col text-lg pl-9 gap-2 pr-15'>
        <li onClick={(e)=>{handleOption(e,1)}} className='border-2 border-amber-100 p-2 rounded-md '>{questions.option1}</li>
        <li onClick={(e)=>{handleOption(e,2)}} className='border-2 border-amber-100 p-2 rounded-md '>{questions.option2}</li>
        <li onClick={(e)=>{handleOption(e,3)}} className='border-2 border-amber-100 p-2 rounded-md '>{questions.option3}</li>
        <li onClick={(e)=>{handleOption(e,4)}} className='border-2 border-amber-100 p-2 rounded-md '>{questions.option4}</li>
      </ul>
      <button className='bg-[#0e183b] py-2 m-auto w-2/5 rounded-md cursor-pointer'>Next</button>
      <p className='mb-2 m-auto'>1 of 5 questions</p>
    </div>
  )
}

export default Quiz
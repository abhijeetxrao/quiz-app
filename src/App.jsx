import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz/Quiz.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#1a0933] via-[#301b4b] to-[#051937] pt-[120px] items-start'>
      <Quiz />
      <Footer/>
    </div>
  )
}

export default App

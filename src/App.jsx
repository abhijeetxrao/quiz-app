import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz/Quiz.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-linear-to-r/decreasing from-indigo-500 to-teal-400 p-0 m-0'>
      <Quiz/>
    </div>
  )
}

export default App

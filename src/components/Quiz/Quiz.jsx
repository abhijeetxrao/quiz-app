import React from 'react'

function Quiz() {
  return (
    <div className='width-[640px] m-auto mt-150'>
      <h1>Quiz App</h1>
      <hr/>
      <p>Which Device is required for internet!</p>
      <ul>
        <li>Adapter</li>
        <li>Modem</li>
        <li>Network</li>
        <li>LAN</li>
      </ul>
      <button>Submit</button>
      <p>1 of 5 questions</p>
    </div>
  )
}

export default Quiz
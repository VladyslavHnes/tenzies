import { useState } from 'react'
import Die from './Die'

function App() {

  const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  let dice = randomNumbers.map(num =>  <Die value={num}/>)

  return (
    <>
      <main>
          <h1>Tenzies</h1>
          <p className='description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice'>
            {dice}
          </div>
          <button>New Game</button>
      </main>
    </>
  )
}

export default App

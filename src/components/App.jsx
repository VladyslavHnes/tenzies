import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './Die'

function App() {

  let [numbers, setNumbers] = useState(generateRandomNumbers());
  let [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    let isSolved = numbers.every(num => num.isHeld && num.value === numbers[0].value)
    setIsSolved(isSolved)
  }, [numbers])

  function generateRandomNumbers() {
    let numbers = Array.from({ length: 10 }, () => generateRandomNumber());
    return numbers.map(num => ({
      id: nanoid(),
      value: num,
      isHeld: false
    }))
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function getNumber() {
    return ({
      id: nanoid(),
      value: generateRandomNumber(),
      isHeld: false
    })
  }

  function refreshNumbers() {
    let newNumbers = isSolved ? generateRandomNumbers() : numbers.map(num => num.isHeld === false ? getNumber() : num)
    setNumbers(newNumbers)
  }

  function hold(id) {
    setNumbers(() => numbers.map(prevNum => prevNum.id === id ? {...prevNum, isHeld: !prevNum.isHeld} :  prevNum))
  }

  let dice = numbers.map(num => 
    <Die 
      key={num.id} 
      id={num.id} 
      value={num.value} 
      isHeld={num.isHeld} 
      holdFunc={hold}
    />)

  return (
    <>
      <main>
          <h1>Tenzies</h1>
          <p className='description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice'>
            {dice}
          </div>
          <button onClick={refreshNumbers}>{isSolved ? "New Game" : "Refresh"}</button>
      </main>
      
    </>
  )
}

export default App

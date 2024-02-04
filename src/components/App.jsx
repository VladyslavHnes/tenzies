import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
          <h1>Tenzies</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam dolor autem et ipsam dolorum quas eius accusamus distinctio delectus alias nisi veniam, dolorem consequatur possimus amet esse! Amet, iusto?</p>
          <div className='tenzies'>
            
          </div>
          <button>New Game</button>
      </main>
    </>
  )
}

export default App

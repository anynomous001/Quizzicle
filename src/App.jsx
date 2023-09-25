import './App.css'
import React from 'react'
import Questions from './Questions'
/*import { answersContext } from './Questions'*/

function App() {
  /*const { answersHtml } = React.useContext(answersContext)*/
  const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  function click() {
    fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
    setStart((prevStart) => !prevStart);
    console.log('clicked')
  }


  return (
    <div className='app'>
      <div className={`main`}>
        <div className={`start-container ${start ? 'game-start' : ''}`} >
          <h1>Quizzicle</h1>
          <h4>Some description if needed</h4>
          <button className='start-btn' onClick={click}>Start Quiz</button>
        </div>
        {start ? <div className='quiz-setup'>
          <Questions questions={questions} />
        </div> : null}


      </div>

    </div>
  )
}

export default App
